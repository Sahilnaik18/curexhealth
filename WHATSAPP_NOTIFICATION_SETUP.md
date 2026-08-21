# 📱 WhatsApp Notification Setup Guide

Get instant WhatsApp messages for every booking - no backend needed!

---

## 🎯 What This Does

When someone books:
1. ✅ Data saved to Google Sheet
2. ✅ WhatsApp message sent to your phone instantly
3. ✅ Message includes all booking details
4. ✅ No need to check the sheet constantly

---

## 📋 Setup Steps (5 minutes)

### Step 1: Get WhatsApp API Key (2 minutes)

1. **Add this number to your contacts**: `+34 644 31 95 97`
   - Name it: "CallMeBot"

2. **Open WhatsApp** and send a message to CallMeBot:
   ```
   I allow callmebot to send me messages
   ```

3. **Wait for reply** (instant)
   - You'll receive your API key
   - Example: `123456`
   - **Save this key!**

---

### Step 2: Update Apps Script (3 minutes)

1. **Open your Google Sheet**: "Curexhealth Bookings"

2. **Click**: Extensions → Apps Script

3. **Replace ALL the code** with the code from: `APPS_SCRIPT_WITH_WHATSAPP.js`

4. **Update Configuration** (lines 2-3):
   ```javascript
   const WHATSAPP_PHONE = '919480044015'; // YOUR phone (country code + number, no spaces)
   const WHATSAPP_API_KEY = '123456';     // YOUR API key from CallMeBot
   ```

5. **Save** (Ctrl+S)

---

### Step 3: Test WhatsApp (1 minute)

1. **In Apps Script**, select function: `testWhatsApp`
2. **Click Run** ▶️
3. **Check your WhatsApp** - you should receive a test booking message!

**If you got the message**: ✅ Setup complete!

---

### Step 4: Deploy Updated Script

1. **Click**: Deploy → New deployment
2. **Settings icon** → Web app
3. **Execute as**: Me
4. **Who has access**: Anyone
5. **Deploy**
6. **Copy new URL**
7. **Update `.env` file** with new URL
8. **Restart server**

---

## 📱 What the WhatsApp Message Looks Like

```
🏥 NEW BOOKING - CUREXHEALTH

👤 Patient Details:
Name: Sahil Naik
Age: 30 | Gender: Male

📞 Contact:
Mobile: 9876543210
WhatsApp: 9876543210
Email: sahil@example.com

💊 Service:
Home Physiotherapy

🏠 Location:
123 Main Street
Andheri West - 400058

📋 Condition:
Back pain for 2 weeks

📅 Appointment:
Date: 2025-01-25
Time: Morning (8 AM - 12 PM)

📝 Notes:
Please call before arriving

⏰ Booking Time:
21 Aug 2026, 9:44 am

✅ Please confirm this booking!
```

---

## 🔧 Configuration Options

### Multiple Phone Numbers

Want notifications on multiple WhatsApp numbers?

Add this after line 3:
```javascript
const WHATSAPP_PHONES = [
  { phone: '919876543210', apikey: 'key1' }, // Receptionist
  { phone: '918765432109', apikey: 'key2' }, // Manager
];
```

Update `sendWhatsAppNotification`:
```javascript
WHATSAPP_PHONES.forEach(contact => {
  const apiUrl = `https://api.callmebot.com/whatsapp.php?phone=${contact.phone}&text=${encodedMessage}&apikey=${contact.apikey}`;
  UrlFetchApp.fetch(apiUrl);
});
```

### Customize Message Format

Edit the `formatBookingMessage` function to change:
- Message text
- Emoji usage
- Information displayed
- Order of fields

---

## ✅ Testing Checklist

- [ ] Added CallMeBot number to contacts
- [ ] Sent authorization message
- [ ] Received API key
- [ ] Updated script with phone and API key
- [ ] Saved script
- [ ] Ran `testWhatsApp` function
- [ ] Received test message on WhatsApp
- [ ] Created new deployment
- [ ] Updated .env with new URL
- [ ] Restarted server
- [ ] Tested real booking from website
- [ ] Received WhatsApp notification
- [ ] Data appeared in Google Sheet

---

## 🎯 Benefits

### ✅ Instant Notifications
- Know about bookings immediately
- No need to check sheet constantly
- Works even when you're away from computer

### ✅ Mobile-Friendly
- Receive on phone
- Reply to customer directly
- Share with team easily

### ✅ Reliable
- CallMeBot handles delivery
- Free forever
- Works worldwide

### ✅ No Backend Needed
- Runs from Google Apps Script
- Serverless
- Zero cost

---

## 🔄 Alternative: Twilio (More Professional)

If you want a more professional solution:

### Twilio WhatsApp Setup:

1. **Sign up**: https://www.twilio.com
2. **Get WhatsApp-enabled number** ($1/month)
3. **Get API credentials**
4. **Update script** to use Twilio API

**Twilio Code:**
```javascript
function sendWhatsAppTwilio(data) {
  const accountSid = 'YOUR_ACCOUNT_SID';
  const authToken = 'YOUR_AUTH_TOKEN';
  const twilioNumber = 'whatsapp:+14155238886';
  const yourNumber = 'whatsapp:+919480044015';
  
  const message = formatBookingMessage(data);
  
  const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
  
  const payload = {
    'From': twilioNumber,
    'To': yourNumber,
    'Body': message
  };
  
  const options = {
    'method': 'post',
    'payload': payload,
    'headers': {
      'Authorization': 'Basic ' + Utilities.base64Encode(accountSid + ':' + authToken)
    }
  };
  
  UrlFetchApp.fetch(url, options);
}
```

**Twilio Benefits:**
- Official WhatsApp Business API
- More reliable
- Delivery status tracking
- Rich media support (images, PDFs)
- Better for high volume

**Cost**: ~$0.005 per message (very cheap)

---

## 🐛 Troubleshooting

### No WhatsApp message received

**Check:**
1. API key is correct
2. Phone number format: `919876543210` (no +, no spaces)
3. You sent authorization message to CallMeBot
4. Check Apps Script execution log for errors

### Message format broken

**Fix:**
- Remove special characters from message
- Use simple text
- Avoid long messages (WhatsApp has limits)

### Multiple messages received

**Cause:** Script running multiple times
**Fix:** This is normal - each execution sends a message

---

## 📊 Summary

| Feature | CallMeBot | Twilio |
|---------|-----------|--------|
| **Setup Time** | 2 minutes | 15 minutes |
| **Cost** | FREE | ~$0.005/message |
| **Reliability** | Good | Excellent |
| **Official API** | No | Yes |
| **Best For** | Small scale | Professional |

---

## 🎉 You're Done!

Now every booking will:
1. Save to Google Sheet ✅
2. Send WhatsApp notification ✅
3. Keep you instantly informed ✅

**All without a backend server!** 🚀
