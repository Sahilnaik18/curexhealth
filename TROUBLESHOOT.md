# 🔧 Troubleshooting - Data Not Appearing in Sheet

## Quick Checks:

### 1️⃣ Check Browser Console (Most Important!)
1. Open your browser where you submitted the booking
2. Press **F12** to open Developer Tools
3. Click the **Console** tab
4. Look for any **red error messages**

**What to look for:**
- ❌ Any errors mentioning "fetch", "network", or "Google Sheets"
- ⚠️ Yellow warnings (usually okay with no-cors)
- ✅ Green success messages

**Copy any error messages you see and share them with me!**

---

### 2️⃣ Verify Apps Script Deployment

The most common issue is deployment settings. Let's check:

1. **Go to your Apps Script editor**
   - Open your Google Sheet
   - Extensions → Apps Script

2. **Check Deployment**
   - Click: **Deploy** → **Manage deployments**
   
3. **Verify Settings**:
   - ⚠️ **Execute as**: Must be **"Me (your email)"**
   - ⚠️ **Who has access**: Must be **"Anyone"** (NOT "Anyone with Google Account")

**If settings are wrong:**
1. Click the ⚙️ icon (Edit)
2. Change "Who has access" to **"Anyone"**
3. Click **Deploy**
4. **COPY THE NEW URL** (it might change!)
5. Update `.env` file with new URL
6. Restart server

---

### 3️⃣ Test the Script Directly

Let's test if the Apps Script itself works:

1. **In Apps Script editor**, find the `testDoPost` function
2. Select it from the function dropdown at the top
3. Click the **▶️ Run** button
4. If asked to authorize, click **Review permissions** → **Allow**
5. Check your Google Sheet - a test row should appear!

**If test works but form doesn't:**
- The script is fine
- The problem is with the URL or form submission

**If test fails:**
- Share the error message with me

---

### 4️⃣ Check .env File

Let's verify the URL is correct:

**Open**: `c:\Pain-clinic\curexhealth\.env`

**Should contain exactly:**
```
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/AKfycbxybpdsJqO96gVebg3ViE1aGGjbjY6Etj-nbfM_Md3X-UUENvP0E_l_5lyLjR2HMBah/exec
```

**Check for:**
- ❌ Extra spaces before or after the URL
- ❌ Line breaks in the middle of URL
- ❌ Missing `=` sign
- ❌ Quotes around the URL (shouldn't have any)

---

### 5️⃣ Verify Server Restarted

After creating .env, did you restart the server?

**To restart:**
1. Go to terminal where server is running
2. Press **Ctrl+C**
3. Run: `npm run dev`
4. Wait for "ready in XXXms"

---

## 🔍 Common Issues & Fixes

### Issue 1: "Who has access: Anyone with Google Account"
**Fix:** Change to **"Anyone"** (without "with Google Account")

This is the #1 most common issue!

### Issue 2: Old deployment URL
**Fix:** 
1. Deploy → Manage deployments
2. Create new deployment (not edit existing)
3. Use the new URL

### Issue 3: CORS errors in console
**This is normal!** Due to `mode: 'no-cors'`, you can't read the response.
But data should still reach the sheet.

**Check:** Even with CORS warnings, refresh your sheet - data might be there!

### Issue 4: Authorization not complete
**Fix:**
1. Apps Script → Run → testDoPost
2. Complete all authorization steps
3. Try form submission again

---

## 🧪 Debug Mode

Let me help you add some debug logging. Can you:

1. **Open browser console** (F12)
2. **Submit another test booking**
3. **Copy ALL console messages** (both errors and logs)
4. **Share them with me**

Also share:
- ✅ Did you see the success screen after submitting?
- ✅ What service did you book?
- ✅ Did you click a service card or hero button?

---

## 📊 Verify Google Sheet Setup

Double-check your sheet has:

**Row 1 Headers (exactly 16 columns):**
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

**If headers are different or missing:**
- The data might be going to wrong columns
- Script might fail silently

---

## 🎯 Next Steps

Please do these in order:

1. **Check browser console** for errors (F12 → Console)
2. **Verify deployment settings** (Execute as: Me, Access: Anyone)
3. **Run testDoPost** in Apps Script to test directly
4. **Share console errors** with me

I'll help you fix it! 🔧
