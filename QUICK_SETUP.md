# 🚀 Quick Setup - Collect Booking Data

## ✅ Your Form is Ready!

The booking form is fully functional and will collect this data:
- Patient Name, Mobile, WhatsApp, Email
- Age, Gender
- Service (auto-selected from card or manually chosen)
- Medical Condition
- Address, Area, Pincode
- Preferred Date & Time
- Additional Notes

---

## 📊 Option 1: Google Sheets (Recommended - FREE)

### Quick 3-Step Setup:

#### 1️⃣ Create Google Sheet (2 min)
```
→ Go to sheets.google.com
→ Create new sheet: "Curexhealth Bookings"
→ Add headers in Row 1:
   Timestamp | Patient Name | Mobile | WhatsApp | Email | Service | 
   Age | Gender | Condition | Address | Area | Pincode | 
   Preferred Date | Preferred Time | Notes | Status
```

#### 2️⃣ Deploy Apps Script (3 min)
```
→ Extensions → Apps Script
→ Paste the script from GOOGLE_SHEETS_SETUP.md
→ Deploy → New deployment → Web app
→ Who has access: Anyone
→ Copy the deployment URL
```

#### 3️⃣ Add URL to Project (1 min)
```
→ Create .env file in project root
→ Add: VITE_GOOGLE_SHEETS_URL=your_deployment_url
→ Restart server: npm run dev
```

**Full instructions**: See `GOOGLE_SHEETS_SETUP.md`

---

## 📧 Option 2: Email Notifications

Want to receive bookings via email instead?

### EmailJS Setup (5 min):
```
1. Sign up at emailjs.com (FREE)
2. Add email service (Gmail/Outlook)
3. Create email template
4. Get Service ID, Template ID, Public Key
5. Add to .env file
```

Let me know if you want this option!

---

## 🔍 Option 3: Both (Google Sheets + Email)

You can have:
- ✅ Data saved to Google Sheets
- ✅ Email notification for each booking

Best of both worlds!

---

## 💾 Current Data Flow

Right now, when someone submits the form:

```
User fills form → Clicks Submit → Success message shown

If Google Sheets configured:
→ Data automatically sent to Google Sheets ✅

If not configured yet:
→ Success message still shows ✅
→ User can contact via WhatsApp/Phone ✅
```

The form works either way - data collection is optional but recommended!

---

## 🎯 What Do You Want?

**Tell me your preference:**

1. **Google Sheets only** - Free, simple spreadsheet
2. **Email notifications only** - Receive booking emails
3. **Both** - Spreadsheet + email for each booking
4. **Test without setup** - Form works, collect data later

The booking form is already fully functional - you just need to decide how you want to collect the data!

---

## 🧪 Test Without Setup

You can test the form right now:
```
→ Go to http://localhost:5173/
→ Click any service "Book" button
→ Fill the form
→ Submit

It will show success message!
```

To actually collect data, complete one of the setup options above.

---

## ❓ Need Help?

Let me know which option you want and I'll help you set it up step by step!
