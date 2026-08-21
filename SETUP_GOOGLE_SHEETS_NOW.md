# 🚀 Google Sheets Setup - Step by Step

Follow these exact steps to connect your booking form to Google Sheets in **5 minutes**.

---

## 📊 STEP 1: Create Your Google Sheet (2 minutes)

### 1.1 Create New Sheet
1. Open your browser
2. Go to: **https://sheets.google.com**
3. Click the **"+ Blank"** button (or **"+"** icon)
4. A new blank spreadsheet will open

### 1.2 Rename the Sheet
1. Click on "Untitled spreadsheet" at the top
2. Rename it to: **Curexhealth Bookings**
3. Press Enter

### 1.3 Add Column Headers
Copy these headers and paste them in **Row 1** (cells A1 to P1):

```
Timestamp
Patient Name
Mobile
WhatsApp
Email
Service
Age
Gender
Condition
Address
Area
Pincode
Preferred Date
Preferred Time
Notes
Status
```

**Or manually type in each cell:**
- A1: `Timestamp`
- B1: `Patient Name`
- C1: `Mobile`
- D1: `WhatsApp`
- E1: `Email`
- F1: `Service`
- G1: `Age`
- H1: `Gender`
- I1: `Condition`
- J1: `Address`
- K1: `Area`
- L1: `Pincode`
- M1: `Preferred Date`
- N1: `Preferred Time`
- O1: `Notes`
- P1: `Status`

### 1.4 Format Headers (Optional but nice)
1. Select entire Row 1 (click the "1" on the left)
2. Make it **Bold** (Ctrl+B)
3. Add background color (click paint bucket icon → choose light green)
4. Freeze the row: **View → Freeze → 1 row**

✅ **Your sheet is ready!** Keep this tab open.

---

## 💻 STEP 2: Create Apps Script (3 minutes)

### 2.1 Open Apps Script Editor
1. In your Google Sheet, click: **Extensions** (in the menu bar)
2. Click: **Apps Script**
3. A new tab will open with a code editor

### 2.2 Delete Default Code
1. You'll see some default code starting with `function myFunction()`
2. **Select all** (Ctrl+A)
3. **Delete** (Delete key)

### 2.3 Paste This Script
Copy and paste this ENTIRE code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Prepare row data (matching your column headers)
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
      .createTextOutput(JSON.stringify({ 
        result: 'success',
        message: 'Booking received successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        result: 'error', 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Test function to verify it works
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
        condition: 'Back pain for 2 weeks',
        address: '123 Test Street, Building A',
        area: 'Andheri West',
        pincode: '400058',
        preferredDate: '2025-01-25',
        preferredTime: 'Morning (8 AM - 12 PM)',
        notes: 'Please call before coming',
        status: 'New'
      })
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
```

### 2.4 Save the Script
1. Click the **💾 Save** icon (disk icon at the top)
2. Or press **Ctrl+S**
3. If asked for a project name, enter: **Booking Form Handler**

✅ **Script is saved!**

---

## 🚀 STEP 3: Deploy as Web App (3 minutes)

### 3.1 Start Deployment
1. In the Apps Script editor, click: **Deploy** (top right)
2. Click: **New deployment**

### 3.2 Configure Deployment Type
1. Click the **⚙️ Settings icon** next to "Select type"
2. Select: **Web app**

### 3.3 Configure Settings
Fill in these details:

- **Description**: `Curexhealth Booking Form`
- **Execute as**: **Me** (your email address)
- **Who has access**: **Anyone** ⚠️ **IMPORTANT - Select "Anyone"**

### 3.4 Deploy
1. Click **Deploy** button
2. A popup will appear asking for authorization

### 3.5 Authorize the App
1. Click **Authorize access**
2. Choose your Google account
3. You'll see a warning: "Google hasn't verified this app"
4. Click **Advanced** (at the bottom left)
5. Click **Go to Booking Form Handler (unsafe)**
6. Click **Allow**

### 3.6 Copy the Web App URL
1. After authorization, you'll see: **"Deployment successfully created"**
2. You'll see a **Web app URL** that looks like:
   ```
   https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXX/exec
   ```
3. **COPY THIS ENTIRE URL** (click the copy icon)

✅ **Write this URL down - you'll need it in the next step!**

---

## 🔧 STEP 4: Add URL to Your Project (1 minute)

### 4.1 Create .env File
1. Open your project folder: `c:\Pain-clinic\curexhealth`
2. Create a new file named: `.env` (exactly, with the dot at the beginning)

### 4.2 Add the URL
Open the `.env` file and add this line:

```
VITE_GOOGLE_SHEETS_URL=paste_your_copied_url_here
```

**Replace** `paste_your_copied_url_here` with the URL you copied.

**Example:**
```
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXX/exec
```

### 4.3 Save the File
- Save the `.env` file
- **Important**: The file should be in the root folder, not inside `src`

✅ **Configuration complete!**

---

## 🔄 STEP 5: Restart Your Server (1 minute)

### 5.1 Stop Current Server
1. Go to your terminal/command prompt where the server is running
2. Press **Ctrl+C** to stop it

### 5.2 Start Server Again
Run this command:
```bash
npm run dev
```

Wait for the server to start (you'll see: `Local: http://localhost:5173/`)

✅ **Server restarted with new configuration!**

---

## 🧪 STEP 6: Test Your Setup (2 minutes)

### 6.1 Open Your Website
1. Go to: **http://localhost:5173/**

### 6.2 Fill a Test Booking
1. Click **"Book Home Visit"** or click **"Book"** on any service card
2. Fill in the form with test data:
   - Patient Name: `Test Patient`
   - Mobile: `9876543210`
   - Age: `30`
   - Gender: `Male`
   - Select any service (if not pre-selected)
   - Condition: `Testing the booking system`
   - Address: `123 Test Street`
   - Area: `Andheri`
   - Pincode: `400058`
   - Select any date and time

3. Click **Continue** through all steps
4. Click **Submit Request**

### 6.3 Check Success Message
- You should see a success screen!
- Check the browser console (F12) for any errors

### 6.4 Check Your Google Sheet
1. Go back to your Google Sheet
2. **Refresh the page** (F5)
3. **You should see a new row with your test data!** 🎉

---

## ✅ SUCCESS! Your Setup is Complete!

If you see the test data in your Google Sheet, everything is working perfectly!

### 🎯 What Happens Now:

Every time someone submits the booking form:
- ✅ Data is automatically sent to your Google Sheet
- ✅ A new row is added with all the information
- ✅ You can view/manage bookings in real-time
- ✅ You can export to Excel anytime

---

## 📊 Managing Your Bookings

### View Bookings
- Open your Google Sheet anytime to see all bookings
- Sort by date, filter by service, search by name

### Update Status
- Change the "Status" column for each booking:
  - `New` → `Contacted` → `Scheduled` → `Completed` → `Cancelled`

### Export Data
- **File → Download → Microsoft Excel (.xlsx)**
- **File → Download → CSV**

### Share with Team
- Click **Share** button (top right)
- Add team member emails
- Choose permission level (Viewer/Editor)

---

## 🐛 Troubleshooting

### ❌ "Google Sheets not configured" error
**Solution:**
- Check `.env` file exists in root folder
- Verify URL starts with `VITE_GOOGLE_SHEETS_URL=`
- Make sure there's no space before or after the URL
- Restart the development server

### ❌ Data not appearing in sheet
**Solution:**
- Check Apps Script deployment settings:
  - "Execute as: Me" ✓
  - "Who has access: Anyone" ✓
- Try re-deploying:
  - Apps Script → Deploy → Manage deployments
  - Click ⚙️ → Edit
  - Change version → Deploy

### ❌ Authorization error
**Solution:**
- Go to Apps Script
- Deploy → Manage deployments
- Click "Authorize access" again
- Follow authorization steps

### ❌ Still not working?
1. Check browser console (F12) for errors
2. Test the script directly:
   - In Apps Script editor: Select `testDoPost` function
   - Click ▶️ Run
   - Check your sheet for test data

---

## 📱 Deployment to Production

When you deploy your website to Netlify/Vercel:

1. Add environment variable in hosting dashboard:
   - **Name**: `VITE_GOOGLE_SHEETS_URL`
   - **Value**: Your Web App URL

2. Redeploy your site

3. Test a booking on the live site

---

## 🎉 You're All Set!

Your booking form now automatically saves all submissions to Google Sheets!

**Questions?** Let me know if you need help with any step!
