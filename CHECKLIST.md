# ✅ Google Sheets Setup Checklist

Use this checklist while following `SETUP_GOOGLE_SHEETS_NOW.md`

---

## 📊 Step 1: Create Google Sheet
- [ ] Go to sheets.google.com
- [ ] Create new blank spreadsheet
- [ ] Rename to "Curexhealth Bookings"
- [ ] Add 16 column headers in Row 1:
  - [ ] A1: Timestamp
  - [ ] B1: Patient Name
  - [ ] C1: Mobile
  - [ ] D1: WhatsApp
  - [ ] E1: Email
  - [ ] F1: Service
  - [ ] G1: Age
  - [ ] H1: Gender
  - [ ] I1: Condition
  - [ ] J1: Address
  - [ ] K1: Area
  - [ ] L1: Pincode
  - [ ] M1: Preferred Date
  - [ ] N1: Preferred Time
  - [ ] O1: Notes
  - [ ] P1: Status
- [ ] Format headers (bold, color)
- [ ] Freeze Row 1

---

## 💻 Step 2: Create Apps Script
- [ ] Click: Extensions → Apps Script
- [ ] Delete default code
- [ ] Paste the script from SETUP_GOOGLE_SHEETS_NOW.md
- [ ] Save (Ctrl+S)
- [ ] Name it: "Booking Form Handler"

---

## 🚀 Step 3: Deploy Web App
- [ ] Click: Deploy → New deployment
- [ ] Click ⚙️ icon → Select "Web app"
- [ ] Description: "Curexhealth Booking Form"
- [ ] Execute as: **Me** ✅
- [ ] Who has access: **Anyone** ✅ (IMPORTANT!)
- [ ] Click Deploy
- [ ] Click "Authorize access"
- [ ] Choose your Google account
- [ ] Click "Advanced"
- [ ] Click "Go to Booking Form Handler (unsafe)"
- [ ] Click "Allow"
- [ ] **COPY THE WEB APP URL** (looks like: https://script.google.com/macros/s/...)

---

## 🔧 Step 4: Configure Your Project
- [ ] Open project folder: `c:\Pain-clinic\curexhealth`
- [ ] Create new file: `.env`
- [ ] Add line: `VITE_GOOGLE_SHEETS_URL=paste_your_url_here`
- [ ] Replace with your actual URL
- [ ] Save the file
- [ ] Verify file is in root folder (not inside src)

---

## 🔄 Step 5: Restart Server
- [ ] Stop server (Ctrl+C in terminal)
- [ ] Run: `npm run dev`
- [ ] Wait for server to start
- [ ] Confirm: http://localhost:5173/ is running

---

## 🧪 Step 6: Test
- [ ] Open http://localhost:5173/
- [ ] Click "Book" on any service
- [ ] Fill test data:
  - [ ] Patient Name: Test Patient
  - [ ] Mobile: 9876543210
  - [ ] Age: 30
  - [ ] Gender: Male
  - [ ] Condition: Testing
  - [ ] Address: 123 Test Street
  - [ ] Area: Andheri
  - [ ] Pincode: 400058
  - [ ] Date: Any future date
  - [ ] Time: Any time slot
- [ ] Click through all steps
- [ ] Submit the form
- [ ] See success message
- [ ] Go back to Google Sheet
- [ ] Refresh (F5)
- [ ] **Verify test data appears in Row 2** 🎉

---

## ✅ Success Indicators

You know it's working when:
1. ✅ Form submits without errors
2. ✅ Success screen appears
3. ✅ Data appears in Google Sheet immediately
4. ✅ All fields are populated correctly

---

## 🐛 Quick Troubleshooting

**Problem: "Google Sheets not configured"**
→ Check .env file exists and has correct URL

**Problem: No data in sheet**
→ Check deployment: "Execute as: Me" and "Who has access: Anyone"

**Problem: Authorization error**
→ Re-authorize: Deploy → Manage deployments → Authorize

**Problem: Still stuck?**
→ Open browser console (F12) to see error details

---

## 📞 Support

If you need help with any step, just let me know the step number and what's happening!

---

## 🎉 When Complete

Once all checkboxes are checked:
- ✅ Your form is collecting data to Google Sheets
- ✅ You can view all bookings in real-time
- ✅ You can export, filter, and manage bookings
- ✅ Ready for production deployment!
