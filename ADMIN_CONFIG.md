# Curexhealth Admin Configuration

## Admin Contact Information

**Primary Admin:**
- **Name**: Sahil Naik
- **Email**: sahilnaik1515@gmail.com
- **Phone**: +91 8762697832
- **WhatsApp**: +91 8762697832

## Important Files Updated

The following files have been updated with the admin contact information:

### Core Configuration Files:
- ✅ `src/services/emailService.js` - WhatsApp message template
- ✅ `src/seo/seoConfig.js` - Site-wide phone configuration
- ✅ `index.html` - Schema.org structured data
- ✅ `EMAILJS_SETUP.md` - Email setup instructions

### Files Still Using Placeholder (Need Manual Update):
The following files contain the old placeholder number `8762697832` and should be updated to `8762697832`:

**Component Files:**
- `src/components/home/Hero.jsx`
- `src/components/home/FinalCTA.jsx`
- `src/components/home/HowItWorks.jsx`
- `src/components/home/HomeFAQ.jsx`
- `src/components/home/AreasWeServe.jsx`
- `src/components/home/Conditions.jsx`
- `src/components/layout/Navbar.jsx`
- `src/components/layout/Footer.jsx`
- `src/components/common/FloatingButtons.jsx`
- `src/components/services/ServicePageTemplate.jsx`
- `src/components/booking/SuccessScreen.jsx`

**Page Files:**
- `src/pages/About.jsx`
- `src/pages/Contact.jsx`
- `src/pages/CancellationPolicy.jsx`

## Quick Replace Command

To replace all remaining instances, stop the dev server and run:

```bash
# Windows PowerShell (recommended)
Get-ChildItem -Path "src" -Filter "*.jsx" -Recurse | ForEach-Object {
    (Get-Content $_.FullName -Raw) -replace '8762697832', '8762697832' | Set-Content $_.FullName -NoNewline
}
```

Or manually use Find & Replace in your editor:
- Find: `8762697832`
- Replace with: `8762697832`

## EmailJS Setup Required

To enable booking emails, you need to:

1. Create an EmailJS account at https://www.emailjs.com using **sahilnaik1515@gmail.com**
2. Follow the complete setup guide in `EMAILJS_SETUP.md`
3. Update these values in `src/services/emailService.js`:
   ```javascript
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'   // Get from EmailJS dashboard
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID' // Get from EmailJS dashboard
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'   // Get from EmailJS dashboard
   ```

## Booking Flow

1. Patient submits booking form on website
2. EmailJS sends formatted email to **sahilnaik1515@gmail.com**
3. Admin receives email with:
   - Complete patient details
   - Service requested
   - Medical condition
   - Preferred date/time
   - Pre-formatted WhatsApp message
4. Admin manually calls/WhatsApps patient to confirm
5. Admin assigns healthcare professional
6. Appointment confirmed

## Social Media Links (Update These)

Current placeholder links in Footer.jsx:
- WhatsApp: `https://wa.me/918762697832` ✅ (Updated)
- Instagram: `https://instagram.com/curexhealth` (Update with real handle)
- Facebook: `https://facebook.com/curexhealth` (Update with real page)
- Twitter: `https://twitter.com/curexhealth` (Update with real handle)
- LinkedIn: `https://linkedin.com/company/curexhealth` (Update with real page)

## Need Help?

If you need to build a proper admin dashboard with:
- Database to store bookings
- Real-time booking management
- Automated WhatsApp messages
- Staff assignment system
- Booking analytics

Let me know and I can help you set it up!
