/**
 * EmailJS integration for Curexhealth booking form.
 *
 * Admin Contact Information:
 * - Email: sahilnaik1515@gmail.com
 * - Phone/WhatsApp: +91 8762697832
 *
 * Setup steps (one-time):
 * 1. Create a free account at https://www.emailjs.com using sahilnaik1515@gmail.com
 * 2. Add an Email Service (Gmail / SMTP) → copy the Service ID
 * 3. Create an Email Template with these variables:
 *      {{patient_name}}, {{mobile}}, {{whatsapp}}, {{email}},
 *      {{service}}, {{patient_age}}, {{gender}},
 *      {{condition}}, {{address}}, {{area}}, {{pincode}},
 *      {{preferred_date}}, {{preferred_time}}, {{notes}},
 *      {{submission_time}}, {{whatsapp_message}}
 * 4. Copy Template ID and Public Key
 * 5. Replace the three constants below with your actual values.
 *
 * The template body (HTML) recommended:
 * ─────────────────────────────────────
 * <h2>New Booking Request — Curexhealth</h2>
 * <table>
 *   <tr><td><b>Patient Name</b></td><td>{{patient_name}}</td></tr>
 *   <tr><td><b>Mobile</b></td><td>{{mobile}}</td></tr>
 *   <tr><td><b>WhatsApp</b></td><td>{{whatsapp}}</td></tr>
 *   <tr><td><b>Email</b></td><td>{{email}}</td></tr>
 *   <tr><td><b>Service</b></td><td>{{service}}</td></tr>
 *   <tr><td><b>Age</b></td><td>{{patient_age}}</td></tr>
 *   <tr><td><b>Gender</b></td><td>{{gender}}</td></tr>
 *   <tr><td><b>Condition</b></td><td>{{condition}}</td></tr>
 *   <tr><td><b>Address</b></td><td>{{address}}</td></tr>
 *   <tr><td><b>Area</b></td><td>{{area}}</td></tr>
 *   <tr><td><b>Pincode</b></td><td>{{pincode}}</td></tr>
 *   <tr><td><b>Preferred Date</b></td><td>{{preferred_date}}</td></tr>
 *   <tr><td><b>Preferred Time</b></td><td>{{preferred_time}}</td></tr>
 *   <tr><td><b>Notes</b></td><td>{{notes}}</td></tr>
 *   <tr><td><b>Submitted At</b></td><td>{{submission_time}}</td></tr>
 * </table>
 * <hr/>
 * <h3>📱 WhatsApp Message for Staff (copy & send manually):</h3>
 * <pre>{{whatsapp_message}}</pre>
 */

// ─── CONFIGURE THESE THREE VALUES ────────────────────────────────────────────
// Instructions: Go to https://www.emailjs.com and follow the setup guide in EMAILJS_SETUP.md
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'   // e.g. 'abcDEFghiJKL...'
// ─────────────────────────────────────────────────────────────────────────────

const SERVICE_LABELS = {
  'home-physiotherapy': 'Home Physiotherapy',
  'nursing-care': 'Nursing Care',
  'elder-care': 'Elder Care',
  'post-surgery-rehabilitation': 'Post Surgery Rehabilitation',
  'stroke-rehabilitation': 'Stroke Rehabilitation',
  'sports-injury-rehabilitation': 'Sports Injury Rehabilitation',
  'orthopedic-rehabilitation': 'Orthopedic Rehabilitation',
  'other': 'Other / Not Sure',
}

/**
 * Build the formatted WhatsApp message for staff to send manually.
 * Staff copies this text and pastes it in WhatsApp to contact the patient.
 */
export function buildStaffWhatsAppMessage(formData) {
  const service = SERVICE_LABELS[formData.service] || formData.service
  const wa = formData.sameAsPhone ? formData.mobile : (formData.whatsapp || formData.mobile)
  const date = formData.preferredDate
    ? new Date(formData.preferredDate).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    : 'Not specified'

  return `Hello ${formData.patientName},

This is Curexhealth — Mumbai's premium home healthcare service. 🏠

We have received your booking request for *${service}*.

Here are the details we have on record:
• Patient: ${formData.patientName}
• Mobile: +91 ${formData.mobile}
• Service: ${service}
• Condition: ${formData.condition}
• Address: ${formData.address}, ${formData.area} — ${formData.pincode}
• Preferred Date: ${date}
• Preferred Time: ${formData.preferredTime}

Our care coordinator will call you shortly to:
✅ Confirm availability
✅ Assign the right certified professional
✅ Share the professional's profile & credentials

Please note: *Your appointment is NOT confirmed yet.* Our team will contact you to confirm.

Thank you for choosing Curexhealth.
📞 +91 8762697832
🌐 curexhealth.com`
}

/**
 * Send booking details to business email via EmailJS.
 * Returns { success: true } or { success: false, error: string }
 */
export async function sendBookingEmail(formData) {
  // Dynamically import to keep bundle size lean
  const emailjs = await import('@emailjs/browser')

  const service = SERVICE_LABELS[formData.service] || formData.service
  const wa = formData.sameAsPhone ? formData.mobile : (formData.whatsapp || formData.mobile)
  const date = formData.preferredDate
    ? new Date(formData.preferredDate).toLocaleDateString('en-IN', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    })
    : 'Not specified'

  const submissionTime = new Date().toLocaleString('en-IN', {
    dateStyle: 'full', timeStyle: 'short'
  })

  const templateParams = {
    patient_name: formData.patientName,
    mobile: `+91 ${formData.mobile}`,
    whatsapp: `+91 ${wa}`,
    email: formData.email || 'Not provided',
    service: service,
    patient_age: formData.patientAge ? `${formData.patientAge} years` : 'Not provided',
    gender: formData.gender
      ? formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1)
      : 'Not provided',
    condition: formData.condition,
    address: formData.address,
    area: formData.area,
    pincode: formData.pincode,
    preferred_date: date,
    preferred_time: formData.preferredTime,
    notes: formData.notes || 'None',
    submission_time: submissionTime,
    whatsapp_message: buildStaffWhatsAppMessage(formData),
  }

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )
    return { success: true }
  } catch (err) {
    console.error('EmailJS error:', err)
    return { success: false, error: err?.text || err?.message || 'Email sending failed' }
  }
}

/** Check if EmailJS is properly configured */
export function isEmailConfigured() {
  return (
    EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' &&
    EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
    EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY'
  )
}
