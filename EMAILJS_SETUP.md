# EmailJS Setup Guide — Curexhealth Booking Form

## Admin Information
- **Admin Email**: sahilnaik1515@gmail.com
- **Admin Phone/WhatsApp**: +91 8762697832

## Overview
The booking form uses **EmailJS** (free, no backend required) to send booking details
directly to the business email when a patient submits a request.

## Step 1 — Create a Free EmailJS Account
1. Go to https://www.emailjs.com
2. Click **Sign Up** → create a free account using **sahilnaik1515@gmail.com**
3. Free plan: 200 emails/month (sufficient for a growing practice)

## Step 2 — Add an Email Service
1. In the EmailJS dashboard → **Email Services** → **Add New Service**
2. Choose **Gmail** (recommended) or any SMTP provider
3. Connect your Gmail account (**sahilnaik1515@gmail.com**)
4. Click **Create Service** → copy the **Service ID** (e.g. `service_abc123`)

## Step 3 — Create an Email Template
1. In the dashboard → **Email Templates** → **Create New Template**
2. Set the **To Email** field to: **sahilnaik1515@gmail.com**
3. Set the **Subject** to:
   ```
   New Booking Request — {{patient_name}} ({{service}})
   ```
4. Paste this HTML in the **Content** area:

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: linear-gradient(135deg, #0F6CBD, #00B894); padding: 24px; border-radius: 12px 12px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 22px;">🏠 New Booking Request</h1>
    <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px;">Curexhealth — Mumbai Home Healthcare</p>
  </div>
  
  <div style="background: #f8fafc; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
    
    <h2 style="color: #0F172A; font-size: 16px; margin-bottom: 16px;">👤 Patient Information</h2>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr><td style="padding: 8px; background: white; border: 1px solid #e2e8f0; font-weight: bold; width: 40%; color: #64748b; font-size: 13px;">Patient Name</td><td style="padding: 8px; background: white; border: 1px solid #e2e8f0; font-size: 13px;">{{patient_name}}</td></tr>
      <tr><td style="padding: 8px; background: #f8fafc; border: 1px solid #e2e8f0; font-weight: bold; color: #64748b; font-size: 13px;">Mobile</td><td style="padding: 8px; background: #f8fafc; border: 1px solid #e2e8f0; font-size: 13px;">{{mobile}}</td></tr>
      <tr><td style="padding: 8px; background: white; border: 1px solid #e2e8f0; font-weight: bold; color: #64748b; font-size: 13px;">WhatsApp</td><td style="padding: 8px; background: white; border: 1px solid #e2e8f0; font-size: 13px;">{{whatsapp}}</td></tr>
      <tr><td style="padding: 8px; background: #f8fafc; border: 1px solid #e2e8f0; font-weight: bold; color: #64748b; font-size: 13px;">Email</td><td style="padding: 8px; background: #f8fafc; border: 1px solid #e2e8f0; font-size: 13px;">{{email}}</td></tr>
    </table>
    
    <h2 style="color: #0F172A; font-size: 16px; margin-bottom: 16px;">🏥 Service Details</h2>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr><td style="padding: 8px; background: white; border: 1px solid #e2e8f0; font-weight: bold; width: 40%; color: #64748b; font-size: 13px;">Service</td><td style="padding: 8px; background: white; border: 1px solid #e2e8f0; font-size: 13px; color: #0F6CBD; font-weight: bold;">{{service}}</td></tr>
      <tr><td style="padding: 8px; background: #f8fafc; border: 1px solid #e2e8f0; font-weight: bold; color: #64748b; font-size: 13px;">Patient Age</td><td style="padding: 8px; background: #f8fafc; border: 1px solid #e2e8f0; font-size: 13px;">{{patient_age}}</td></tr>
      <tr><td style="padding: 8px; background: white; border: 1px solid #e2e8f0; font-weight: bold; color: #64748b; font-size: 13px;">Gender</td><td style="padding: 8px; background: white; border: 1px solid #e2e8f0; font-size: 13px;">{{gender}}</td></tr>
      <tr><td style="padding: 8px; background: #f8fafc; border: 1px solid #e2e8f0; font-weight: bold; color: #64748b; font-size: 13px;">Medical Condition</td><td style="padding: 8px; background: #f8fafc; border: 1px solid #e2e8f0; font-size: 13px;">{{condition}}</td></tr>
    </table>
    
    <h2 style="color: #0F172A; font-size: 16px; margin-bottom: 16px;">📍 Visit Details</h2>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr><td style="padding: 8px; background: white; border: 1px solid #e2e8f0; font-weight: bold; width: 40%; color: #64748b; font-size: 13px;">Address</td><td style="padding: 8px; background: white; border: 1px solid #e2e8f0; font-size: 13px;">{{address}}</td></tr>
      <tr><td style="padding: 8px; background: #f8fafc; border: 1px solid #e2e8f0; font-weight: bold; color: #64748b; font-size: 13px;">Area</td><td style="padding: 8px; background: #f8fafc; border: 1px solid #e2e8f0; font-size: 13px;">{{area}}</td></tr>
      <tr><td style="padding: 8px; background: white; border: 1px solid #e2e8f0; font-weight: bold; color: #64748b; font-size: 13px;">Pincode</td><td style="padding: 8px; background: white; border: 1px solid #e2e8f0; font-size: 13px;">{{pincode}}</td></tr>
      <tr><td style="padding: 8px; background: #f8fafc; border: 1px solid #e2e8f0; font-weight: bold; color: #64748b; font-size: 13px;">Preferred Date</td><td style="padding: 8px; background: #f8fafc; border: 1px solid #e2e8f0; font-size: 13px; color: #0F6CBD; font-weight: bold;">{{preferred_date}}</td></tr>
      <tr><td style="padding: 8px; background: white; border: 1px solid #e2e8f0; font-weight: bold; color: #64748b; font-size: 13px;">Preferred Time</td><td style="padding: 8px; background: white; border: 1px solid #e2e8f0; font-size: 13px; color: #0F6CBD; font-weight: bold;">{{preferred_time}}</td></tr>
      <tr><td style="padding: 8px; background: #f8fafc; border: 1px solid #e2e8f0; font-weight: bold; color: #64748b; font-size: 13px;">Additional Notes</td><td style="padding: 8px; background: #f8fafc; border: 1px solid #e2e8f0; font-size: 13px;">{{notes}}</td></tr>
    </table>
    
    <div style="background: #fffbf0; border: 1px solid #fcd34d; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
      <p style="margin: 0; font-weight: bold; color: #92400e; font-size: 13px;">⚠️ ACTION REQUIRED</p>
      <p style="margin: 4px 0 0; color: #78350f; font-size: 12px;">This appointment is NOT confirmed. Please call the patient within 30 minutes to confirm availability and assign a professional.</p>
    </div>
    
    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px;">
      <p style="margin: 0 0 8px; font-weight: bold; color: #166534; font-size: 13px;">📱 WhatsApp Follow-up Message (copy & send manually):</p>
      <pre style="margin: 0; font-size: 11px; color: #374151; white-space: pre-wrap; background: white; padding: 12px; border-radius: 6px; border: 1px solid #d1fae5;">{{whatsapp_message}}</pre>
    </div>
    
    <p style="color: #94a3b8; font-size: 11px; margin-top: 16px; text-align: center;">
      Submitted: {{submission_time}} · Curexhealth Booking System
    </p>
  </div>
</div>
```

5. Click **Save** → copy the **Template ID** (e.g. `template_xyz789`)

## Step 4 — Get Your Public Key
1. In the dashboard → **Account** → **General**
2. Copy the **Public Key** (e.g. `abcDEFghiJKL_mno123`)

## Step 5 — Configure the Website
Open `src/services/emailService.js` and replace:

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'   // → paste your Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // → paste your Template ID
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'   // → paste your Public Key
```

## Step 6 — Test It
1. Run `npm run dev`
2. Open the website, fill the booking form
3. Submit → check your business email inbox
4. You should receive a formatted email with all booking details + the WhatsApp message

## How It Works (Flow Summary)
```
Patient fills form → Submits → EmailJS sends email to care@curexhealth.com
                                      ↓
                          Staff receives email with all details
                                      ↓
                   Staff manually calls / WhatsApps the patient
                                      ↓
                        Appointment confirmed by staff only
```

## Important Notes
- ✅ No auto-confirmation is sent to the patient
- ✅ No WhatsApp redirect from the website
- ✅ No backend, no database, no server required
- ✅ Patient sees a clear "NOT YET CONFIRMED" notice
- ✅ Staff gets a ready-to-copy WhatsApp message in the email
- ✅ Staff also has a "Copy WhatsApp Message" tool in the success screen (collapsed by default)
- 🔒 EmailJS Public Key is safe to include in frontend code (it's read-only)
