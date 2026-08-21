# 📱 Send WhatsApp Messages from Google Sheets

Send WhatsApp messages to customers directly from your booking sheet with one click!

---

## 🎯 Option 1: Simple WhatsApp Link (5 minutes)

This adds a clickable link in each row that opens WhatsApp Web with a pre-filled message.

### Step 1: Add WhatsApp Column

1. Open your **Curexhealth Bookings** Google Sheet
2. Add a new column header after "Status" (column Q):
   - Cell Q1: `Send WhatsApp`

### Step 2: Add Formula

In cell **Q2**, paste this formula:

```
=IF(C2<>"", HYPERLINK("https://wa.me/91"&C2&"?text="&ENCODEURL("Hello "&B2&", thank you for booking "&F2&" with CurexHealth! 🏥

We received your booking request for "&M2&" at "&N2&".

Our care coordinator will call you shortly to:
✅ Confirm availability
✅ Assign the best professional
✅ Finalize appointment details

Need immediate assistance? Call us at +91 98765 43210

Best regards,
CurexHealth Team"), "📱 Send WhatsApp"), "")
```

### Step 3: Copy Formula Down

1. Click on cell **Q2**
2. Copy the formula (Ctrl+C)
3. Select from **Q2 to Q100** (or more rows)
4. Paste (Ctrl+V)

### Step 4: Use It!

Now for each booking:
1. Click the **"📱 Send WhatsApp"** link
2. WhatsApp Web opens with pre-filled message
3. Review the message
4. Click Send! ✅

---

## 🚀 Option 2: Advanced - Send from Sheet (No Phone Needed!)

Use Google Apps Script to send WhatsApp messages automatically using WhatsApp Business API.

### Requirements:
- WhatsApp Business Account
- Meta Business Account
- WhatsApp Cloud API access

### Step 1: Get WhatsApp Business API

1. Go to: https://developers.facebook.com/
2. Create a Meta Business account
3. Set up WhatsApp Business API
4. Get:
   - Phone Number ID
   - Access Token
   - Business Account ID

### Step 2: Add Script to Google Sheet

1. In your sheet: **Extensions → Apps Script**
2. Click **"+" → Script**
3. Name it: **WhatsAppSender**
4. Paste this code:

```javascript
// WhatsApp Business Cloud API Configuration
const WHATSAPP_TOKEN = 'YOUR_ACCESS_TOKEN_HERE'; // From Meta Business
const PHONE_NUMBER_ID = 'YOUR_PHONE_NUMBER_ID'; // From Meta Business
const API_URL = `https://graph.facebook.com/v18.0/${PHONE_NUMBER_ID}/messages`;

/**
 * Send WhatsApp message to customer
 */
function sendWhatsAppMessage(row) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getRange(row, 1, 1, 16).getValues()[0];
  
  // Extract data
  const customerName = data[1]; // Column B
  const mobile = data[2]; // Column C - must be in format: 919876543210
  const service = data[5]; // Column F
  const preferredDate = data[12]; // Column M
  const preferredTime = data[13]; // Column N
  
  // Format mobile number (remove spaces, add 91 if needed)
  let formattedMobile = mobile.replace(/\s/g, '');
  if (!formattedMobile.startsWith('91')) {
    formattedMobile = '91' + formattedMobile;
  }
  
  // Message template
  const message = `Hello ${customerName}, thank you for booking ${service} with CurexHealth! 🏥

We received your booking request for ${preferredDate} at ${preferredTime}.

Our care coordinator will call you shortly to:
✅ Confirm availability
✅ Assign the best professional
✅ Finalize appointment details

Need immediate assistance? Call us at +91 98765 43210

Best regards,
CurexHealth Team`;
  
  // WhatsApp API payload
  const payload = {
    messaging_product: 'whatsapp',
    to: formattedMobile,
    type: 'text',
    text: {
      body: message
    }
  };
  
  // Send request
  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      'Authorization': 'Bearer ' + WHATSAPP_TOKEN
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };
  
  try {
    const response = UrlFetchApp.fetch(API_URL, options);
    const result = JSON.parse(response.getContentText());
    
    if (response.getResponseCode() === 200) {
      // Success - mark in sheet
      sheet.getRange(row, 17).setValue('✅ Sent ' + new Date().toLocaleString());
      return true;
    } else {
      // Error
      sheet.getRange(row, 17).setValue('❌ Failed: ' + result.error.message);
      return false;
    }
  } catch (error) {
    sheet.getRange(row, 17).setValue('❌ Error: ' + error.toString());
    return false;
  }
}

/**
 * Send to selected row
 * Usage: Select a row, then run this function
 */
function sendToSelectedRow() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const row = sheet.getActiveRange().getRow();
  
  if (row < 2) {
    SpreadsheetApp.getUi().alert('Please select a data row (not the header)');
    return;
  }
  
  sendWhatsAppMessage(row);
  SpreadsheetApp.getUi().alert('WhatsApp message sent!');
}

/**
 * Send to all "New" bookings
 */
function sendToAllNew() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const lastRow = sheet.getLastRow();
  let count = 0;
  
  for (let i = 2; i <= lastRow; i++) {
    const status = sheet.getRange(i, 16).getValue(); // Column P (Status)
    const whatsappSent = sheet.getRange(i, 17).getValue(); // Column Q
    
    // Send only if status is "New" and not already sent
    if (status === 'New' && !whatsappSent.includes('✅')) {
      sendWhatsAppMessage(i);
      count++;
      Utilities.sleep(1000); // Wait 1 second between messages
    }
  }
  
  SpreadsheetApp.getUi().alert(`Sent ${count} WhatsApp messages!`);
}
```

### Step 3: Configure API Credentials

In the script, replace:
- `YOUR_ACCESS_TOKEN_HERE` - with your Meta WhatsApp token
- `YOUR_PHONE_NUMBER_ID` - with your WhatsApp phone number ID

### Step 4: Add Menu Button

Add this to your existing `doPost` script or create new:

```javascript
/**
 * Add custom menu when sheet opens
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('📱 WhatsApp')
    .addItem('Send to Selected Row', 'sendToSelectedRow')
    .addItem('Send to All New Bookings', 'sendToAllNew')
    .addToUi();
}
```

### Step 5: Add WhatsApp Status Column

1. Add column header Q1: `WhatsApp Status`
2. This will show when messages were sent

### Step 6: Use It!

**Option A: Send to Single Customer**
1. Click on the row number to select entire row
2. Click **📱 WhatsApp → Send to Selected Row**
3. Message sent! ✅

**Option B: Send to All New Bookings**
1. Click **📱 WhatsApp → Send to All New Bookings**
2. Sends to all rows with Status = "New"
3. Skips already sent messages

---

## 🎯 Option 3: CallMeBot (Easiest - No API Setup!)

Free WhatsApp messages without any API setup.

### Step 1: Get CallMeBot API Key

1. **Add CallMeBot to WhatsApp:**
   - Save this number in your phone: **+34 644 24 44 77**
   - Send WhatsApp message: `I allow callmebot to send me messages`
   - You'll receive your API key

2. **For each team member:**
   - Have them send the same message
   - Get their API key

### Step 2: Add Script

```javascript
/**
 * Send WhatsApp using CallMeBot (Free, No API setup needed)
 */
function sendWhatsAppCallMeBot(row) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getRange(row, 1, 1, 16).getValues()[0];
  
  // Your CallMeBot API Key (get from WhatsApp bot)
  const YOUR_PHONE = '919876543210'; // Your phone with country code
  const YOUR_API_KEY = 'YOUR_CALLMEBOT_API_KEY'; // From bot
  
  // Extract data
  const customerName = data[1];
  const customerMobile = data[2];
  const service = data[5];
  const preferredDate = data[12];
  const preferredTime = data[13];
  
  // Message to YOU (notification about new booking)
  const message = `🔔 New Booking Alert!

Customer: ${customerName}
Mobile: ${customerMobile}
Service: ${service}
Date: ${preferredDate}
Time: ${preferredTime}

Call customer to confirm appointment.`;
  
  // CallMeBot API URL
  const url = `https://api.callmebot.com/whatsapp.php?phone=${YOUR_PHONE}&text=${encodeURIComponent(message)}&apikey=${YOUR_API_KEY}`;
  
  try {
    const response = UrlFetchApp.fetch(url);
    sheet.getRange(row, 17).setValue('✅ Notified ' + new Date().toLocaleTimeString());
    return true;
  } catch (error) {
    sheet.getRange(row, 17).setValue('❌ Failed');
    return false;
  }
}

/**
 * Custom menu for CallMeBot
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('📱 Notifications')
    .addItem('Send to Me (CallMeBot)', 'sendCallMeBotToSelected')
    .addToUi();
}

function sendCallMeBotToSelected() {
  const row = SpreadsheetApp.getActiveSheet().getActiveRange().getRow();
  if (row < 2) {
    SpreadsheetApp.getUi().alert('Select a booking row first');
    return;
  }
  sendWhatsAppCallMeBot(row);
}
```

---

## 📊 Comparison

| Method | Setup Time | Cost | Messages | Automation |
|--------|-----------|------|----------|------------|
| **WhatsApp Links** | 5 min | FREE | Manual | ❌ |
| **WhatsApp Business API** | 2 hours | FREE* | Automated | ✅ |
| **CallMeBot** | 10 min | FREE | To you only | ✅ |

*WhatsApp Business API: Free for first 1000 conversations/month

---

## 🎯 Recommended Setup

**For Small Business (Start Here):**
1. Use **Option 1 (WhatsApp Links)** - Simple, works immediately
2. Click link → Message opens → Send manually

**For Growing Business:**
1. Use **Option 3 (CallMeBot)** - Get notified instantly
2. Then use **Option 1** to reply to customers

**For Scale:**
1. Set up **Option 2 (WhatsApp Business API)**
2. Automate everything
3. Send to 100s of customers automatically

---

## 💡 Message Templates

### Booking Confirmation
```
Hello [Name], thank you for booking [Service] with CurexHealth! 🏥

Your request for [Date] at [Time] has been received.

We'll call you shortly to confirm. 

Need help? Call: +91 98765 43210
```

### Appointment Reminder (Day Before)
```
Reminder: Your [Service] appointment is tomorrow at [Time]. 

Professional: [Name]
Address: [Customer Address]

Arrive 5 minutes early. See you soon! 🏥
```

### Follow-up After Service
```
Hi [Name], 

How was your experience with our [Service]? 

We'd love your feedback!

Reply with: 
⭐⭐⭐⭐⭐ (1-5 stars)
```

---

## 🆘 Troubleshooting

### WhatsApp Business API
- **Issue:** 403 Error
- **Fix:** Check access token is valid

### CallMeBot
- **Issue:** Message not received
- **Fix:** Re-register by messaging bot again

### Links Not Working
- **Issue:** Invalid number
- **Fix:** Mobile column must have 10 digits only

---

## 🎉 You're Set!

Now you can send WhatsApp messages directly from your booking sheet!

**Questions?** Let me know which option you want to set up!
