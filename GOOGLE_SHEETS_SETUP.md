# 📊 Google Sheets Integration Setup Guide

This guide will help you connect your booking form to Google Sheets in **15 minutes**.

---

## 🎯 What You'll Get

- All booking form submissions automatically saved to Google Sheets
- View, edit, and manage bookings in a spreadsheet
- Export to Excel anytime
- **100% FREE - No backend needed!**

---

## 📋 Setup Steps

### **Step 1: Create Your Google Sheet** (2 minutes)

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"+ Blank"** to create a new spreadsheet
3. Rename it to: **"Curexhealth Bookings"**

4. **Add Column Headers** in Row 1:
   ```
   A1: Timestamp
   B1: Patient Name
   C1: Mobile
   D1: WhatsApp
   E1: Email
   F1: Service
   G1: Age
   H1: Gender
   I1: Condition
   J1: Address
   K1: Area
   L1: Pincode
   M1: Preferred Date
   N1: Preferred Time
   O1: Notes
   P1: Status
   ```

5. **Format the headers** (optional but looks nice):
   - Select Row 1
   - Make it **Bold**
   - Add background color (light blue/green)
   - Freeze the row: View → Freeze → 1 row

---

### **Step 2: Create Google Apps Script** (5 minutes)

1. In your Google Sheet, click: **Extensions → Apps Script**

2. **Delete** the default code in the editor

3. **Paste this script**:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Prepare row data
    const rowData = [
      data.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      data.patientName || '',
      data.mobile || '',
      data.whatsapp || '',
      data.email || '',
      data.service || '',
      data.patientAge || '',
      data.gender || '',
      data.condition || '',
      data.address || '',
      data.area || '',
      data.pincode || '',
      data.preferredDate || '',
      data.preferredTime || '',
      data.notes || '',
      data.status || 'New'
    ];
    
    // Append the data as a new row
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional - for testing in Apps Script editor)
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toLocaleString('en-IN'),
        patientName: 'Test Patient',
        mobile: '9876543210',
        whatsapp: '9876543210',
        email: 'test@example.com',
        service: 'Home Physiotherapy',
        patientAge: '45',
        gender: 'Male',
        condition: 'Back pain',
        address: '123 Test Street',
        area: 'Andheri',
        pincode: '400058',
        preferredDate: '2025-01-25',
        preferredTime: 'Morning (8 AM - 12 PM)',
        notes: 'This is a test booking',
        status: 'New'
      })
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
```

4. **Save the script**:
   - Click the **💾 Save** icon (or Ctrl+S)
   - Give it a name: **"Booking Form Handler"**

---

### **Step 3: Deploy as Web App** (3 minutes)

1. In Apps Script editor, click: **Deploy → New deployment**

2. Click the **⚙️ gear icon** next to "Select type"
   - Choose: **Web app**

3. **Configure settings**:
   - **Description**: Curexhealth Booking Form
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone ⚠️ Important!

4. Click **Deploy**

5. **Authorize the app**:
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" → "Go to Booking Form Handler (unsafe)"
   - Click "Allow"

6. **Copy the Web App URL**:
   - You'll see a URL like:
     ```
     https://script.google.com/macros/s/AKfycbx.../exec
     ```
   - **COPY THIS URL** - You'll need it!

---

### **Step 4: Add URL to Your Website** (2 minutes)

1. Create a file named `.env` in your project root:

```env
VITE_GOOGLE_SHEETS_URL=paste_your_url_here
```

2. Replace `paste_your_url_here` with the URL you copied

Example:
```env
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXX/exec
```

3. **Save the file**

---

### **Step 5: Test It!** (3 minutes)

1. **Restart your development server**:
   ```bash
   npm run dev
   ```

2. **Open your website** and test the booking form:
   - Fill in all fields
   - Click "Confirm Booking"
   - You should see success message

3. **Check your Google Sheet**:
   - Refresh the sheet
   - You should see the booking data in a new row! 🎉

---

## ✅ Verification Checklist

- [ ] Google Sheet created with column headers
- [ ] Apps Script deployed as Web App
- [ ] Web App URL copied
- [ ] `.env` file created with URL
- [ ] Development server restarted
- [ ] Test booking submitted successfully
- [ ] Data appears in Google Sheet

---

## 🔧 Troubleshooting

### **"Google Sheets not configured yet" in console**
- Make sure `.env` file exists
- Check the URL starts with `VITE_GOOGLE_SHEETS_URL=`
- Restart development server

### **Data not appearing in sheet**
- Check Apps Script deployment: "Execute as: Me"
- Check access: "Who has access: Anyone"
- Try re-deploying the Web App

### **Authorization issues**
- Go to Apps Script → Deploy → Manage deployments
- Click "Authorize access" again
- Follow the authorization steps

---

## 📊 Managing Your Bookings

### **View Bookings**
- Open your Google Sheet anytime
- All bookings are listed with timestamp
- Sort, filter, or search as needed

### **Update Status**
- Change "Status" column: New → Contacted → Scheduled → Completed

### **Export Data**
- File → Download → Microsoft Excel (.xlsx)
- File → Download → CSV

### **Add More Sheets**
- Create tabs for: Active Bookings, Completed, Cancelled

---

## 🚀 Going Live

When deploying to production (Netlify/Vercel):

1. Add environment variable in hosting platform:
   - Variable name: `VITE_GOOGLE_SHEETS_URL`
   - Value: Your Web App URL

2. Redeploy your website

3. Test a booking on live site

---

## 💡 Tips

- **Backup**: Google Sheets auto-saves (no backup needed!)
- **Sharing**: Share sheet with team members for collaboration
- **Notifications**: Set up Google Sheets email notifications
- **Mobile**: Access bookings from Google Sheets mobile app

---

## 🆘 Need Help?

If you encounter issues:
1. Check the browser console for errors (F12 → Console)
2. Verify all URLs are correct
3. Ensure `.env` file is in the project root
4. Restart the development server

---

## 🎉 You're All Set!

Your booking form now saves directly to Google Sheets. No backend, no database costs - just simple and effective!
