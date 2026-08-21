# 📱 CallMeBot WhatsApp Setup - 2 Minutes!

Get instant WhatsApp notifications for bookings - super quick!

---

## 🚀 Step 1: Get API Key (1 minute)

### 1.1 Add CallMeBot to Contacts
**Save this number in your phone:**
```
+34 644 31 95 97
```
**Contact name:** CallMeBot

### 1.2 Send Authorization Message
1. **Open WhatsApp**
2. **Find "CallMeBot"** in your contacts
3. **Send this exact message:**
   ```
   I allow callmebot to send me messages
   ```

### 1.3 Get Your API Key
- **Wait a few seconds**
- **You'll receive a reply** with your API key
- **Example reply:**
  ```
  Your API key is: 123456
  ```
- **SAVE THIS KEY!** (write it down or screenshot)

✅ **Done! You have your API key!**

---

## 🚀 Step 2: Update Apps Script (3 minutes)

### 2.1 Open Apps Script
1. **Open your Google Sheet**: "Curexhealth Bookings"
2. **Click**: Extensions → Apps Script

### 2.2 Replace Code
1. **Select ALL existing code** (Ctrl+A)
2. **Delete it**
3. **Open this file**: `APPS_SCRIPT_CALLMEBOT.js`
4. **Copy ALL the code**
5. **Paste it** into Apps Script

### 2.3 Update Configuration
**Find lines 2-3** and update:

```javascript
const WHATSAPP_PHONE = '919480044015'; // YOUR phone (no + or spaces)
const WHATSAPP_API_KEY = '123456';     // YOUR API key from CallMeBot
```

**Replace:**
- `919480044015` with YOUR phone number (country code + number, no + or spaces)
- `123456` with YOUR API key from CallMeBot

### 2.4 Save
- **Press Ctrl+S** or click the Save icon 💾

✅ **Done! Script updated!**

---

## 🚀 Step 3: Test WhatsApp (1 minute)

### 3.1 Run Test Function
1. **In Apps Script**, find the function dropdown at top
2. **Select**: `testWhatsApp`
3. **Click**: Run ▶️

### 3.2 Authorize if Asked
- Click "Review permissions"
- Choose your account
- Click "Advanced" → "Go to Booking Form Handler (unsafe)"
- Click "Allow"

### 3.3 Check Your WhatsApp
- **Wait 5-10 seconds**
- **Check WhatsApp on your phone**
- **You should receive a test booking message!**

✅ **If you got the message, it's working!**

---

## 🚀 Step 4: Deploy New Version (2 minutes)

### 4.1 Create New Deployment
1. **Click**: Deploy → New deployment
2. **Click**: ⚙️ Settings icon → Web app
3. **Fill in**:
   - Description: `Curexhealth with WhatsApp`
   - Execute as: Me
   - Who has access: Anyone
4. **Click**: Deploy

### 4.2 Copy URL
- **Copy the Web App URL** that appears
- Should look like: `https://script.google.com/macros/s/AKfyc...`

### 4.3 Update .env File
Tell me the new URL or update it yourself:

**Open**: `c:\Pain-clinic\curexhealth\.env`

**Update the line:**
```
VITE_GOOGLE_SHEETS_URL=paste_your_new_url_here
```

### 4.4 Restart Server
```bash
# Stop server: Ctrl+C in terminal
npm run dev
```

✅ **Done! Deployment complete!**

---

## 🚀 Step 5: Test Live (1 minute)

### 5.1 Submit Test Booking
1. **Open**: http://localhost:5173/
2. **Click "Book"** on any service
3. **Fill and submit** the form

### 5.2 Verify
Check for:
- ✅ Success screen shows
- ✅ Data appears in Google Sheet
- ✅ **WhatsApp message received on your phone!**

🎉 **If all three work, you're done!**

---

## 📱 What the WhatsApp Message Looks Like

```
🏥 *NEW BOOKING*

👤 *Patient:* Sahil Naik
📱 *Mobile:* 9876543210
📧 *Email:* sahil@example.com

💊 *Service:* Home Physiotherapy
👤 *Age:* 30 | Male

🏠 *Address:*
123 Main Street
Andheri West - 400058

📋 *Condition:* Back pain

📅 *Date:* 2025-01-25
🕐 *Time:* Morning (8 AM - 12 PM)

📝 *Notes:* None

⏰ *Booked at:* 21 Aug 2026, 10:15 am
```

---

## ✅ Success Checklist

- [ ] Saved CallMeBot number in phone
- [ ] Sent authorization message
- [ ] Received API key
- [ ] Updated Apps Script (lines 2-3)
- [ ] Saved script
- [ ] Ran `testWhatsApp` function
- [ ] Received test message on WhatsApp
- [ ] Created new deployment
- [ ] Copied new URL
- [ ] Updated .env file
- [ ] Restarted server
- [ ] Tested real booking
- [ ] Received WhatsApp notification
- [ ] Data saved in Google Sheet

---

## 🐛 Troubleshooting

### No API key received
**Wait**: Can take up to 1 minute
**Check**: Message was exact: "I allow callmebot to send me messages"
**Try**: Send again

### No WhatsApp message received
**Check**:
1. API key is correct in script (line 3)
2. Phone number format: `919876543210` (no + or spaces)
3. You sent authorization message to CallMeBot

### Script error
**Check**: 
1. Code was pasted completely
2. No extra characters
3. Quotation marks are correct

---

## 💰 Cost

**100% FREE forever!**
- No signup
- No credit card
- No limits
- No backend server

---

## 🎯 Summary

Total time: **5-7 minutes**

What you get:
- ✅ Instant WhatsApp notifications
- ✅ Every booking details sent to your phone
- ✅ No need to check Google Sheet constantly
- ✅ Still no backend needed!

---

## 🎉 You're Done!

Your booking system now:
1. ✅ Saves to Google Sheet
2. ✅ Sends WhatsApp notification instantly
3. ✅ Works without backend
4. ✅ Completely free!

Start accepting bookings! 🚀

---

## 🔄 Later: Upgrade to Meta API

When you're ready for more professional features:
- Open `META_WHATSAPP_SETUP.md`
- Follow the guide (15 minutes)
- Get official WhatsApp Business badge
- More features (templates, buttons, media)

But CallMeBot works great for now! ✨
