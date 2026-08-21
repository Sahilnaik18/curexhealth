# 🧪 Test Your Google Sheets Integration

## ✅ Configuration Complete!

Your Google Sheets URL has been added and the server is restarted.

**Server running at**: http://localhost:5173/

---

## 🧪 Step-by-Step Testing

### 1. Open Your Website
```
→ Go to: http://localhost:5173/
```

### 2. Start a Booking
Choose ONE of these options:

**Option A: General Booking**
- Click **"Book Home Visit"** button in hero section

**Option B: Service-Specific Booking**
- Scroll to "What We Offer"
- Click **"Book"** on any service card (e.g., Home Physiotherapy)

### 3. Fill Step 1: Personal Info
```
Patient Name: Test Patient
Mobile: 9876543210
WhatsApp: ✓ Same as mobile number
Email: test@example.com (optional)
Age: 30
Gender: Male
```
**Click: Continue**

### 4. Step 2: Service (if not skipped)
If you clicked the hero button, select a service.
If you clicked a service card, this step is automatically skipped! ✨

**Click: Continue**

### 5. Fill Step 3: Details
```
Medical Condition: Testing the Google Sheets integration
Address: 123 Test Street, Building A, Flat 101
Area: Andheri West
Pincode: 400058
Preferred Date: Select any future date
Preferred Time: Morning (8 AM - 12 PM)
Notes: This is a test booking to verify Google Sheets integration
```
**Click: Continue**

### 6. Step 4: Review
- Review all the information
- **Click: Submit Request**

### 7. Success Screen
✅ You should see a success message!
✅ Check browser console (F12) for any errors

---

## 📊 Verify Data in Google Sheets

### 1. Open Your Google Sheet
```
→ Go to: sheets.google.com
→ Open: "Curexhealth Bookings"
```

### 2. Refresh the Sheet
- Press **F5** or click the refresh button

### 3. Check for New Row
Look for a new row (Row 2) with your test data:

```
Column A (Timestamp): Current date/time
Column B (Patient Name): Test Patient
Column C (Mobile): 9876543210
Column D (WhatsApp): 9876543210
Column E (Email): test@example.com
Column F (Service): Home Physiotherapy (or selected service)
Column G (Age): 30
Column H (Gender): Male
Column I (Condition): Testing the Google Sheets integration
Column J (Address): 123 Test Street, Building A, Flat 101
Column K (Area): Andheri West
Column L (Pincode): 400058
Column M (Preferred Date): Selected date
Column N (Preferred Time): Morning (8 AM - 12 PM)
Column O (Notes): This is a test booking...
Column P (Status): New
```

---

## 🎉 If You See the Data...

**CONGRATULATIONS!** 🎊

Your booking form is now connected to Google Sheets!

Every new booking will automatically:
- ✅ Save to your Google Sheet
- ✅ Add a new row with all details
- ✅ Include timestamp in Indian time
- ✅ Set status as "New"

---

## 📊 What You Can Do Now

### Manage Bookings
- View all bookings in your Google Sheet
- Sort by date, filter by service
- Search for specific patients
- Update status column (New → Contacted → Scheduled → Completed)

### Export Data
- File → Download → Microsoft Excel
- File → Download → CSV
- File → Download → PDF

### Share with Team
- Click "Share" button
- Add team member emails
- Set permissions (Viewer/Editor)

### Set Up Notifications
- Tools → Notification rules
- Get email when form is submitted

---

## 🔧 Test Multiple Scenarios

Try these different bookings:

### Test 1: Hero Button (No Pre-selection)
- Click "Book Home Visit"
- Choose service manually
- Verify 4 steps total

### Test 2: Service Card (Pre-selection)
- Click "Book" on "Home Physiotherapy" card
- Service should be pre-selected
- Step 2 should be skipped (3 steps total)

### Test 3: Different Services
Test each service card:
- Home Physiotherapy
- Nursing Care
- Elder Care
- Post Surgery Rehab
- Stroke Rehabilitation
- Sports Injury Rehab
- Orthopedic Rehab
- Women's Health Care

### Test 4: WhatsApp Different Number
- Enter different WhatsApp number (not same as mobile)
- Verify both numbers appear in sheet

### Test 5: Empty Optional Fields
- Leave email and notes empty
- Verify booking still works

---

## 🐛 Troubleshooting

### ❌ "Google Sheets not configured" in console
**Check:**
- `.env` file exists in root folder: `c:\Pain-clinic\curexhealth\.env`
- Contains: `VITE_GOOGLE_SHEETS_URL=https://script.google.com/...`
- No extra spaces
- Server was restarted after creating .env

**Fix:** Already done! ✅

### ❌ Form submits but no data in sheet
**Check:**
1. Apps Script deployment settings:
   - Execute as: **Me**
   - Who has access: **Anyone**

2. Re-deploy if needed:
   - Apps Script → Deploy → Manage deployments
   - Click ⚙️ → Edit
   - New version → Deploy

### ❌ CORS or network errors
**This is normal!** The code uses `mode: 'no-cors'` which means:
- Request is sent successfully
- Response cannot be read (browser security)
- Data still reaches Google Sheets ✅

Check your sheet - the data should be there!

### ❌ Still not working?
1. Open browser console (F12 → Console tab)
2. Look for any red error messages
3. Share the error message with me

---

## 📱 Ready for Production?

When deploying to Netlify/Vercel/Firebase:

1. Add environment variable:
   ```
   Name: VITE_GOOGLE_SHEETS_URL
   Value: https://script.google.com/macros/s/AKfycbxybpdsJqO96gVebg3ViE1aGGjbjY6Etj-nbfM_Md3X-UUENvP0E_l_5lyLjR2HMBah/exec
   ```

2. Redeploy the site

3. Test a booking on the live URL

---

## 🎯 Your Setup Summary

✅ Google Sheet created with headers
✅ Apps Script deployed as Web App
✅ Web App URL added to .env file
✅ Development server restarted
✅ Configuration loaded successfully

**Server**: http://localhost:5173/
**Google Sheet**: Curexhealth Bookings
**Status**: Ready to test!

---

## 💬 Next Steps

1. **Test now** - Submit a test booking
2. **Verify** - Check Google Sheet for data
3. **Celebrate** - It's working! 🎉
4. **Use it** - Start accepting real bookings

Need help? Just let me know! 😊
