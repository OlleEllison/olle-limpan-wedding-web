import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )

    const rsvpData = await req.json()
    
    // Store in Supabase database
    const { data, error } = await supabase
      .from('rsvp_submissions')
      .insert([{
        name: rsvpData.name,
        email: rsvpData.email,
        phone: rsvpData.phone,
        attending: rsvpData.attending,
        guest_count: parseInt(rsvpData.guestCount),
        allergies: rsvpData.allergies,
        dietary_restrictions: rsvpData.dietaryRestrictions,
        accommodation: rsvpData.accommodation,
        message: rsvpData.message,
        submitted_at: new Date().toISOString()
      }])

    if (error) {
      console.error('Supabase error:', error)
      throw error
    }

    // Send to Google Sheets
    const googleSheetsUrl = Deno.env.get('GOOGLE_SHEETS_WEBHOOK_URL')
    
    if (googleSheetsUrl) {
      try {
        const sheetsResponse = await fetch(googleSheetsUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: rsvpData.name,
            email: rsvpData.email,
            phone: rsvpData.phone,
            attending: rsvpData.attending,
            guestCount: rsvpData.guestCount,
            allergies: rsvpData.allergies,
            dietaryRestrictions: rsvpData.dietaryRestrictions,
            accommodation: rsvpData.accommodation,
            message: rsvpData.message,
            submittedAt: new Date().toISOString()
          })
        })

        if (!sheetsResponse.ok) {
          console.error('Google Sheets webhook failed:', sheetsResponse.status)
        }
      } catch (sheetsError) {
        console.error('Error sending to Google Sheets:', sheetsError)
        // Continue processing even if Google Sheets fails
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: 'RSVP submitted successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )

  } catch (error) {
    console.error('Error processing RSVP:', error)
    return new Response(
      JSON.stringify({ error: String(error) }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})