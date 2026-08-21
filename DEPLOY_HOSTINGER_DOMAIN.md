# 🚀 Deploy CurexHealth with Hostinger Domain

**Your Setup:** Domain from Hostinger (curexhealth.in) + FREE Firebase Hosting

---

## 📋 Step-by-Step Deployment (10 minutes)

### ✅ Step 1: Deploy to Firebase

#### 1.1 Login to Firebase
```powershell
firebase login
```
- Browser opens automatically
- Login with your Google account
- Click "Allow"

#### 1.2 Initialize Firebase Hosting
```powershell
firebase init hosting
```

**Answer these questions EXACTLY:**
```
? Are you ready to proceed? → Yes

? Please select an option: → Create a new project

? Please specify a unique project id: → curexhealth-in
  (or any unique name like curexhealth-website)

? What would you like to call your project? → CurexHealth

? Please select a default Firebase project: → curexhealth-in

? What do you want to use as your public directory? → dist

? Configure as a single-page app (rewrite all urls to /index.html)? → Yes

? Set up automatic builds and deploys with GitHub? → No

? File dist/index.html already exists. Overwrite? → No
```

#### 1.3 Build Your Project
```powershell
npm run build
```

Wait for build to complete (~10 seconds)

#### 1.4 Deploy to Firebase
```powershell
firebase deploy
```

**You'll get a URL like:**
```
✔  Deploy complete!

Hosting URL: https://curexhealth-in.web.app
```

**Test this URL** - Your site is now live on Firebase!

---

## 🌐 Step 2: Connect Hostinger Domain to Firebase

### 2.1 Add Custom Domain in Firebase

1. **Go to Firebase Console:**
   https://console.firebase.google.com/

2. **Select your project** (curexhealth-in)

3. **Go to Hosting:**
   - Click "Hosting" in left sidebar
   - You'll see your deployed site

4. **Add custom domain:**
   - Click "Add custom domain" button
   - Enter: `curexhealth.in`
   - Click "Continue"

5. **Firebase shows DNS records like this:**
   ```
   To verify domain ownership, add these DNS records:
   
   Type: A
   Name: @
   Value: 151.101.1.195
   
   Type: A
   Name: @
   Value: 151.101.65.195
   
   Type: TXT
   Name: @
   Value: [some long verification code]
   ```

6. **Keep this page open** - You'll need these values

---

### 2.2 Update DNS in Hostinger

1. **Login to Hostinger:**
   https://hpanel.hostinger.com/

2. **Go to Domains:**
   - Click "Domains" in left sidebar
   - Find "curexhealth.in"
   - Click "Manage"

3. **Go to DNS / Name Servers:**
   - Click "DNS / Name Servers" tab
   - Click "Manage" button

4. **Delete old A records:**
   - Find existing A records (if any)
   - Delete them (click trash icon)

5. **Add Firebase A records:**
   
   **Record 1:**
   - Type: `A`
   - Name: `@`
   - Points to: `151.101.1.195`
   - TTL: `14400` (or leave default)
   - Click "Add Record"
   
   **Record 2:**
   - Type: `A`
   - Name: `@`
   - Points to: `151.101.65.195`
   - TTL: `14400`
   - Click "Add Record"

6. **Add TXT record (for verification):**
   - Type: `TXT`
   - Name: `@`
   - Points to: `[paste verification code from Firebase]`
   - TTL: `14400`
   - Click "Add Record"

7. **Save all changes**

---

### 2.3 Add WWW Subdomain (Optional but Recommended)

Back in **Firebase Console:**

1. Click "Add another domain"
2. Enter: `www.curexhealth.in`
3. Firebase shows a CNAME record

Back in **Hostinger DNS:**

1. Add new record:
   - Type: `CNAME`
   - Name: `www`
   - Points to: `curexhealth-in.web.app` (or whatever Firebase shows)
   - TTL: `14400`
   - Click "Add Record"

---

## ⏰ Step 3: Wait for DNS Propagation

### What happens now?
- DNS changes take time to spread worldwide
- **Typical time:** 1-4 hours
- **Maximum time:** 24-48 hours

### How to check status?

1. **Check DNS propagation:**
   https://dnschecker.org/
   - Enter: `curexhealth.in`
   - Should show Firebase IPs globally

2. **Check in Firebase Console:**
   - Go to Hosting → Domains
   - Status will show:
     - "Pending" → Still waiting
     - "Connected" → Domain is live! ✅

### What to expect:
- **After 10 minutes:** TXT verification usually completes
- **After 1-4 hours:** A records propagate, site goes live
- **Automatic SSL:** Firebase installs FREE SSL certificate automatically

---

## ✅ Step 4: Verify Your Site is Live

Once DNS propagates, test:

1. **Visit your domain:**
   - https://curexhealth.in
   - Should load your site with 🔒 (SSL)

2. **Test all functionality:**
   - Navigate all pages
   - Test booking form
   - Check mobile view
   - Test in different browsers

3. **Check SSL certificate:**
   - Click 🔒 in browser address bar
   - Should show "Certificate is valid"
   - Issued by: Google Trust Services

---

## 🔄 Future Deployments (After Initial Setup)

Deploying updates is super easy:

```powershell
# 1. Make your code changes

# 2. Build
npm run build

# 3. Deploy
firebase deploy

# Done! Live in ~30 seconds
```

Or use the PowerShell script:
```powershell
.\deploy.ps1
```

---

## 🆘 Troubleshooting

### Issue: "Firebase command not found"
```powershell
npm install -g firebase-tools
```

### Issue: "Firebase login fails"
```powershell
firebase login --reauth
```

### Issue: Domain not connecting after 24 hours
1. Check DNS records in Hostinger match Firebase exactly
2. Check for typos in IP addresses
3. Make sure old A records are deleted
4. Contact Hostinger support if needed

### Issue: "Build fails"
```powershell
# Clean and rebuild
rm -r dist, node_modules
npm install
npm run build
```

### Issue: SSL certificate not working
- Wait for DNS to fully propagate
- Firebase auto-provisions SSL once DNS is verified
- Can take up to 24 hours after domain connects

---

## 📊 Expected Timeline

| Time | What Happens |
|------|--------------|
| **Now** | Deploy to Firebase (2 min) |
| **Now + 2 min** | Add DNS records in Hostinger (5 min) |
| **Now + 10 min** | TXT verification completes |
| **Now + 1-4 hours** | DNS propagates globally |
| **Now + 1-4 hours** | Site live at curexhealth.in |
| **Now + 4-24 hours** | SSL certificate activates |

---

## 🎯 Quick Command Summary

```powershell
# Deploy to Firebase
firebase login
firebase init hosting
npm run build
firebase deploy

# Future deployments
npm run build
firebase deploy
```

---

## 💰 Cost Breakdown

- **Domain (Hostinger):** Already paid (~₹699/year)
- **Firebase Hosting:** FREE (within generous limits)
- **SSL Certificate:** FREE (automatic)
- **CDN:** FREE (included)
- **Bandwidth:** FREE (up to 360 MB/day = ~10 GB/month)

**Total monthly cost: ₹0** ✅

---

## 🎉 Final Notes

Your site will be:
- ✅ Live at https://curexhealth.in
- ✅ Secured with FREE SSL
- ✅ Hosted on Google's fast CDN
- ✅ Easy to update (just `firebase deploy`)
- ✅ Completely FREE hosting

---

## 📞 Need Help?

- **Firebase Issues:** https://firebase.google.com/support
- **Hostinger DNS Help:** Contact Hostinger 24/7 chat support
- **Check DNS Propagation:** https://dnschecker.org/

---

**Ready?** Start with Step 1! 🚀

```powershell
firebase login
```
