# 📱 Meta WhatsApp Cloud API Setup Guide

Official WhatsApp Business API - No backend needed!

---

## 🎯 What You'll Get

- ✅ Official WhatsApp Business API
- ✅ FREE (1,000 messages/month)
- ✅ Professional business presence
- ✅ Template messages, media support
- ✅ Message delivery status
- ✅ Still no backend server!

---

## 📋 Prerequisites

- Meta (Facebook) account
- Phone number for verification
- 15-20 minutes for setup

---

## 🚀 Step-by-Step Setup

### STEP 1: Create Meta Developer Account (3 minutes)

1. **Go to**: https://developers.facebook.com

2. **Click**: "Get Started" or "My Apps"

3. **Login** with your Facebook account

4. **Create App**:
   - Click "Create App"
   - Select: **"Business"**
   - Click "Next"

5. **App Details**:
   - App name: `Curexhealth Bookings`
   - Contact email: Your email
   - Click "Create App"

---

### STEP 2: Add WhatsApp Product (2 minutes)

1. **In your app dashboard**, find "Add products to your app"

2. **Find "WhatsApp"** and click "Set up"

3. **WhatsApp setup page** will open

4. **You'll see**:
   - Phone Number ID
   - WhatsApp Business Account ID
   - Test phone number

---

### STEP 3: Get Your Credentials (5 minutes)

#### 3.1 Get Temporary Access Token

1. **On WhatsApp setup page**, scroll to "Temporary access token"

2. **Click "Generate token"**

3. **Copy the token** (looks like: `EAAxxxxxxxxxxxxxxx`)
   - ⚠️ This token expires in 24 hours (for testing)
   - We'll get permanent token later

4. **Save it somewhere safe**

#### 3.2 Get Phone Number ID

1. **On same page**, find "Phone number ID"

2. **Copy the ID** (looks like: `123456789012345`)

3. **Save it**

#### 3.3 Add Your WhatsApp Number as Recipient

1. **Scroll to "To"** section

2. **Click "Manage phone number list"**

3. **Add your WhatsApp number**:
   - Country code + number (e.g., 919480044015)
   - Click "Add phone number"

4. **Verify** by entering code sent to your WhatsApp

---

### STEP 4: Test API (2 minutes)

1. **In WhatsApp setup page**, find the "Send a test message" section

2. **Your number should be in the "To" field**

3. **Click "Send message"**

4. **Check your WhatsApp** - you should receive: "Hello World"

✅ **If you got the message, API is working!**

---

### STEP 5: Update Apps Script (5 minutes)

1. **Open your Google Sheet**: "Curexhealth Bookings"

2. **Click**: Extensions → Apps Script

3. **Replace ALL code** with this:

```javascript
// ===== META WHATSAPP CLOUD API CONFIGURATION =====
const META_ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN_HERE'; // Paste your token
const META_PHONE_ID = 'YOUR_PHONE_NUMBER_ID_HERE'; // Paste your Phone Number ID
const RECIPIENT_PHONE = '919480044015'; // Your WhatsApp number (no +)

// ===== MAIN FUNCTION =====
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Prepare row data for Google Sheet
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
    
    // Save to Google Sheet
    sheet.appendRow(rowData);
    
    // Send WhatsApp notification via Meta Cloud API
    sendWhatsAppNotification(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ===== SEND WHATSAPP VIA META CLOUD API =====
function sendWhatsAppNotification(data) {
  try {
    const message = formatBookingMessage(data);
    
    // Meta WhatsApp Cloud API endpoint
    const url = `https://graph.facebook.com/v18.0/${META_PHONE_ID}/messages`;
    
    // Request payload
    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: RECIPIENT_PHONE,
      type: 'text',
      text: {
        preview_url: false,
        body: message
      }
    };
    
    // Request options
    const options = {
      method: 'post',
      contentType: 'application/json',
      headers: {
        'Authorization': 'Bearer ' + META_ACCESS_TOKEN
      },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };
    
    // Send request
    const response = UrlFetchApp.fetch(url, options);
    const responseCode = response.getResponseCode();
    const responseText = response.getContentText();
    
    Logger.log('WhatsApp API Response Code: ' + responseCode);
    Logger.log('WhatsApp API Response: ' + responseText);
    
    if (responseCode === 200) {
      Logger.log('✅ WhatsApp notification sent successfully');
    } else {
      Logger.log('⚠️ WhatsApp notification failed: ' + responseText);
    }
    
  } catch (error) {
    Logger.log('❌ WhatsApp notification error: ' + error.toString());
    // Don't throw - we still want booking to be saved
  }
}

// ===== FORMAT MESSAGE =====
function formatBookingMessage(data) {
  // Clean text - Meta API doesn't support all markdown
  const message = `NEW BOOKING - CUREXHEALTH

PATIENT DETAILS
Name: ${data.patientName}
Age: ${data.patientAge} | Gender: ${data.gender}

CONTACT
Mobile: ${data.mobile}
WhatsApp: ${data.whatsapp}
Email: ${data.email || 'Not provided'}

SERVICE
${data.service}

LOCATION
${data.address}
${data.area} - ${data.pincode}

CONDITION
${data.condition}

APPOINTMENT
Date: ${data.preferredDate}
Time: ${data.preferredTime}

NOTES
${data.notes || 'None'}

BOOKING TIME
${data.timestamp}

Please confirm this booking!`;

  return message.trim();
}

// ===== TEST FUNCTIONS =====
function testWhatsApp() {
  const testData = {
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
    notes: 'Please call before coming'
  };
  
  sendWhatsAppNotification(testData);
  Logger.log('Test message sent! Check your WhatsApp and Apps Script logs.');
}

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
        area: 'Andheri West',
        pincode: '400058',
        preferredDate: '2025-01-25',
        preferredTime: 'Morning (8 AM - 12 PM)',
        notes: 'Test booking',
        status: 'New'
      })
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
```

4. **Update the configuration** (lines 2-4):
   - `META_ACCESS_TOKEN`: Paste your access token
   - `META_PHONE_ID`: Paste your Phone Number ID
   - `RECIPIENT_PHONE`: Your WhatsApp number (no + or spaces)

5. **Save** (Ctrl+S)

---

### STEP 6: Test from Apps Script (2 minutes)

1. **Select function**: `testWhatsApp`

2. **Click Run** ▶️

3. **If asked to authorize**:
   - Review permissions → Allow

4. **Check execution log**:
   - View → Logs
   - Should see: "✅ WhatsApp notification sent successfully"

5. **Check your WhatsApp**:
   - You should receive the test booking message!

✅ **If you got the message, it's working!**

---

### STEP 7: Deploy Updated Script (2 minutes)

1. **Click**: Deploy → New deployment

2. **Settings icon** → Web app

3. **Fill in**:
   - Description: `Curexhealth with WhatsApp v1`
   - Execute as: Me
   - Who has access: Anyone

4. **Click Deploy**

5. **Copy the new Web App URL**

6. **Update your `.env` file**:
   ```
   VITE_GOOGLE_SHEETS_URL=paste_new_url_here
   ```

7. **Restart your dev server**:
   ```bash
   # Stop: Ctrl+C
   npm run dev
   ```

---

### STEP 8: Test End-to-End (2 minutes)

1. **Open**: http://localhost:5173/

2. **Submit a test booking**

3. **Check**:
   - ✅ Success screen shows
   - ✅ Data in Google Sheet
   - ✅ WhatsApp message received

🎉 **If all three work, you're done!**

---

## 🔐 Get Permanent Access Token (Optional but Recommended)

The temporary token expires in 24 hours. For production, get a permanent one:

### Option 1: System User Token (Recommended)

1. **Go to**: Meta Business Settings
   - https://business.facebook.com/settings

2. **Users → System Users**

3. **Add System User**:
   - Name: "Curexhealth API"
   - Role: Admin

4. **Generate Token**:
   - Select your app
   - Select permissions: `whatsapp_business_messaging`
   - Generate token
   - **Copy and save** (never expires!)

5. **Update Apps Script** with new token

### Option 2: Access Token Tool

1. **Go to**: https://developers.facebook.com/tools/accesstoken/

2. **Select your app**

3. **Click "Extend Access Token"**

4. **Copy extended token** (valid for 60 days)

---

## 📊 Message Limits

| Account Status | Free Messages/Month | Cost After |
|----------------|---------------------|------------|
| **Test Mode** | 1,000 | N/A |
| **Verified Business** | 1,000 | $0.005-0.02/msg |

### For Production:

1. **Verify your business**:
   - Meta Business Settings → Business Info
   - Submit business documents
   - Takes 1-3 days

2. **Get WhatsApp Business Profile verified**:
   - Green checkmark badge
   - More credibility

---

## 🎨 Advanced Features (Optional)

### Send Template Messages

Meta requires templates for promotional messages:

```javascript
function sendTemplateMessage() {
  const payload = {
    messaging_product: 'whatsapp',
    to: RECIPIENT_PHONE,
    type: 'template',
    template: {
      name: 'hello_world',
      language: {
        code: 'en_US'
      }
    }
  };
  
  // ... send via API
}
```

### Send Images/Documents

```javascript
function sendImage(imageUrl) {
  const payload = {
    messaging_product: 'whatsapp',
    to: RECIPIENT_PHONE,
    type: 'image',
    image: {
      link: imageUrl,
      caption: 'Booking confirmation'
    }
  };
  
  // ... send via API
}
```

### Add Quick Reply Buttons

```javascript
function sendWithButtons() {
  const payload = {
    messaging_product: 'whatsapp',
    to: RECIPIENT_PHONE,
    type: 'interactive',
    interactive: {
      type: 'button',
      body: {
        text: 'New booking received!'
      },
      action: {
        buttons: [
          {
            type: 'reply',
            reply: {
              id: 'confirm',
              title: 'Confirm'
            }
          },
          {
            type: 'reply',
            reply: {
              id: 'reschedule',
              title: 'Reschedule'
            }
          }
        ]
      }
    }
  };
  
  // ... send via API
}
```

---

## 🐛 Troubleshooting

### Error: "Invalid OAuth access token"
**Fix**: Token expired or incorrect
- Generate new token
- Update Apps Script
- Redeploy

### Error: "Unsupported recipient"
**Fix**: Phone number not verified
- Go to Meta dashboard
- Add recipient phone number
- Verify with code

### Error: "Too many requests"
**Fix**: Rate limit exceeded
- Wait a few minutes
- Reduce test frequency

### No message received
**Check**:
1. Phone number format: `919876543210` (no + or spaces)
2. Number is verified in Meta dashboard
3. Token has correct permissions
4. Check Apps Script execution log for errors

---

## 📈 Monitoring

### Check Message Status

1. **Meta Dashboard** → WhatsApp → Insights
2. See: Sent, Delivered, Read counts
3. Monitor API errors

### Apps Script Logs

1. **Apps Script** → Executions
2. View each request
3. Check for errors

---

## ✅ Setup Checklist

- [ ] Created Meta Developer account
- [ ] Created app and added WhatsApp
- [ ] Got Access Token
- [ ] Got Phone Number ID
- [ ] Added and verified recipient number
- [ ] Tested "Hello World" from Meta dashboard
- [ ] Updated Apps Script with credentials
- [ ] Ran `testWhatsApp` function successfully
- [ ] Received test message on WhatsApp
- [ ] Created new deployment
- [ ] Updated .env file
- [ ] Restarted server
- [ ] Tested real booking from website
- [ ] Received WhatsApp notification
- [ ] Data saved in Google Sheet

---

## 🎯 Production Checklist

Before going live:

- [ ] Get permanent access token (System User)
- [ ] Verify business (for 1000 free messages/month)
- [ ] Test error handling
- [ ] Set up monitoring
- [ ] Add multiple recipient numbers if needed
- [ ] Create message templates (optional)
- [ ] Test with real customer data

---

## 💡 Tips

### Multiple Recipients

Add multiple numbers:

```javascript
const RECIPIENT_PHONES = [
  '919876543210', // Receptionist
  '918765432109', // Manager
  '917654321098'  // Doctor
];

function sendToMultiple(data) {
  const message = formatBookingMessage(data);
  
  RECIPIENT_PHONES.forEach(phone => {
    const payload = {
      messaging_product: 'whatsapp',
      to: phone,
      type: 'text',
      text: { body: message }
    };
    
    // Send to each number
    const options = {
      method: 'post',
      contentType: 'application/json',
      headers: {
        'Authorization': 'Bearer ' + META_ACCESS_TOKEN
      },
      payload: JSON.stringify(payload)
    };
    
    UrlFetchApp.fetch(
      `https://graph.facebook.com/v18.0/${META_PHONE_ID}/messages`,
      options
    );
  });
}
```

### Different Messages for Different Services

```javascript
function formatByService(data) {
  const baseMessage = formatBookingMessage(data);
  
  if (data.service === 'Emergency') {
    return '🚨 URGENT BOOKING 🚨\n\n' + baseMessage;
  }
  
  return baseMessage;
}
```

---

## 🎉 You're Done!

Your booking system now:
- ✅ Collects data in Google Sheets
- ✅ Sends WhatsApp notifications via official Meta API
- ✅ Works without backend server
- ✅ Professional and scalable
- ✅ FREE (1000 messages/month)

**All without writing a single line of backend code!** 🚀

---

## 📚 Resources

- **Meta WhatsApp Docs**: https://developers.facebook.com/docs/whatsapp
- **Cloud API Reference**: https://developers.facebook.com/docs/whatsapp/cloud-api
- **Get Started Guide**: https://developers.facebook.com/docs/whatsapp/cloud-api/get-started

---

## 🆘 Need Help?

If you get stuck:
1. Check Apps Script execution logs
2. Check Meta Developer Dashboard for errors
3. Verify all tokens and IDs are correct
4. Make sure phone number is verified
5. Let me know what step you're on!
