# 🔧 Fix Google Sheets on Vercel (Live Site)

**Problem:** Booking form works locally but doesn't save to Google Sheets on live site.

**Reason:** Environment variables from your `.env` file are not automatically deployed to Vercel.

---

## ✅ Solution (2 minutes)

### Step 1: Go to Vercel Project Settings

1. Go to: https://vercel.com/dashboard
2. Click on your **curexhealth** project
3. Click **"Settings"** tab at the top
4. Click **"Environment Variables"** in left sidebar

### Step 2: Add Your Google Sheets URL

**Add this variable:**

**Key (Name):**
```
VITE_GOOGLE_SHEETS_URL
```

**Value:**
```
https://script.google.com/macros/s/AKfycbwiyJH72wOy04T8uigqNeaaHFeYZMDcNGAym7Z26K-UJuWWgDuHxmmfQx96Tj8vNw3K/exec
```

**Environments:** 
- ✅ Check **Production**
- ✅ Check **Preview** (optional)
- ✅ Check **Development** (optional)

**Click "Save"**

### Step 3: Redeploy Your Site

You have 2 options:

**Option A: Automatic (via Git push)**
```powershell
# Make any small change
git commit --allow-empty -m "Trigger redeploy for env vars"
git push origin main
```

Vercel will automatically rebuild and deploy in ~30 seconds.

**Option B: Manual (via Dashboard)**
1. In Vercel Dashboard, go to **"Deployments"** tab
2. Find the latest deployment
3. Click the **"..."** menu
4. Click **"Redeploy"**
5. Click **"Redeploy"** to confirm

---

## 🧪 Test After Redeployment

### Wait for Build to Complete
- Check Deployments tab
- Wait for status: **"Ready"** ✅

### Test Live Site
1. Go to: **https://curexhealth.in** (or your Vercel URL)
2. Fill out the booking form
3. Submit

### Check Google Sheet
1. Open your Google Sheet
2. Refresh the page (F5)
3. **You should see the booking data!** 🎉

---

## ✅ Verify Environment Variable

To confirm it's added correctly:

1. **Go to Settings → Environment Variables**
2. You should see:
   ```
   VITE_GOOGLE_SHEETS_URL
   Production, Preview, Development
   ```
3. The value should start with: `https://script.google.com/macros/s/...`

---

## 🐛 Still Not Working?

### Check Apps Script Permissions

1. **Go to your Google Apps Script:**
   - Open your Google Sheet
   - Extensions → Apps Script

2. **Check Deployment Settings:**
   - Click **Deploy** → **Manage deployments**
   - Click **⚙️ Edit** icon
   - Verify:
     - Execute as: **Me**
     - Who has access: **Anyone** ⚠️

3. **If "Anyone" is not selected:**
   - Change it to **Anyone**
   - Click **Deploy**
   - Copy the NEW URL
   - Update environment variable in Vercel with the new URL
   - Redeploy

### Test Apps Script Directly

1. In Apps Script editor, select `testDoPost` function from dropdown
2. Click **▶️ Run**
3. Check your Google Sheet for test data
4. If it appears, script is working

### Check Browser Console

1. On live site, open DevTools (F12)
2. Go to **Console** tab
3. Submit a booking
4. Look for errors related to Google Sheets

### Common Issues:

**Issue:** "Google Sheets not configured"
- **Fix:** Environment variable not added or misspelled

**Issue:** CORS error
- **Fix:** Apps Script deployment must be "Anyone" access

**Issue:** 403 Forbidden
- **Fix:** Re-authorize Apps Script deployment

---

## 📊 How to Verify It's Working

After fixing:

1. **Submit test booking on live site**
2. **Check Google Sheet immediately**
3. **New row should appear with:**
   - Timestamp
   - All form data
   - Status: "New"

---

## 🎉 Success Checklist

- ✅ Environment variable added in Vercel
- ✅ Variable name: `VITE_GOOGLE_SHEETS_URL`
- ✅ Value is your Apps Script URL
- ✅ Environments: Production ✓
- ✅ Site redeployed
- ✅ Test booking appears in sheet

---

## 🔄 For Future Reference

**When you deploy to ANY hosting platform:**
1. Always add environment variables
2. They're NOT automatically copied from `.env` file
3. Each platform has its own way:
   - **Vercel:** Settings → Environment Variables
   - **Netlify:** Site settings → Environment variables
   - **Firebase:** `.env` file in project

---

**Need help?** Let me know which step you're on!
