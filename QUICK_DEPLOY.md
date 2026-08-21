# 🚀 Quick Deploy to curexhealth.in

Your build is ready! Follow these simple steps to deploy.

---

## ✅ Build Status: SUCCESSFUL ✓

Your project has been built successfully. The `dist` folder is ready for deployment.

---

## 🎯 Recommended: Firebase Hosting (5 minutes)

### Step 1: Install Firebase CLI (One-time)
```powershell
npm install -g firebase-tools
```

### Step 2: Login to Firebase
```powershell
firebase login
```
- Opens browser for Google login
- Select your Google account

### Step 3: Initialize Firebase (One-time)
```powershell
firebase init hosting
```

**Answer these prompts:**
```
? What do you want to use as your public directory? → dist
? Configure as a single-page app (rewrite all urls to /index.html)? → Yes
? Set up automatic builds and deploys with GitHub? → No
? File dist/index.html already exists. Overwrite? → No
```

### Step 4: Create Firebase Project (if needed)
If you don't have a Firebase project:
1. Go to https://console.firebase.google.com/
2. Click "Add project"
3. Name it: **curexhealth**
4. Disable Google Analytics (optional)
5. Create project

Then run:
```powershell
firebase use --add
```
- Select the project you just created
- Alias: **default**

### Step 5: Deploy! 🚀
```powershell
firebase deploy
```

You'll get a URL like: `https://curexhealth.web.app`

### Step 6: Add Your Custom Domain (curexhealth.in)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select **curexhealth** project
3. Go to **Hosting** in sidebar
4. Click **Add custom domain**
5. Enter: `curexhealth.in`
6. Firebase will show you DNS records

**Copy these DNS records to your domain registrar:**

Firebase will provide something like:
```
Type: A
Name: @
Value: 151.101.1.195

Type: A
Name: @
Value: 151.101.65.195

Type: TXT (for verification)
Name: @
Value: [verification code from Firebase]
```

7. Go to where you bought **curexhealth.in** (GoDaddy, Namecheap, etc.)
8. Find **DNS Management** or **DNS Settings**
9. Add the A and TXT records shown by Firebase
10. Save changes

**Also add www subdomain:**
- Click "Add another domain"
- Enter: `www.curexhealth.in`
- Add the DNS records

### Step 7: Wait for SSL Certificate
- DNS propagation: 1-24 hours (usually 1-2 hours)
- SSL certificate: Automatic once DNS propagates
- Check status in Firebase Console

### ✅ Done! Your site will be live at:
- https://curexhealth.in
- https://www.curexhealth.in

---

## ⚡ Alternative: Vercel (3 minutes)

### Quick Deploy:
```powershell
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Add Custom Domain:
1. Go to https://vercel.com/dashboard
2. Select your project
3. Settings → Domains
4. Add `curexhealth.in`
5. Update DNS at your domain registrar:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🔄 Future Deployments (After Initial Setup)

Once set up, deploying updates is just:

### Firebase:
```powershell
npm run build
firebase deploy
```

### Vercel:
```powershell
vercel --prod
```

### Or use the PowerShell script:
```powershell
.\deploy.ps1
```

---

## 🧪 Test Before Going Live

Preview your build locally:
```powershell
npm run preview
```
Opens: http://localhost:4173

Test:
- ✓ All pages load
- ✓ Booking form works
- ✓ Links work
- ✓ Mobile responsive
- ✓ Images load

---

## 📞 Common DNS Registrars Setup

### GoDaddy:
1. Login to GoDaddy
2. My Products → Domains → DNS
3. Add records (A and TXT)

### Namecheap:
1. Login to Namecheap
2. Domain List → Manage → Advanced DNS
3. Add records

### Cloudflare:
1. Login to Cloudflare
2. Select domain → DNS → Records
3. Add records

### Google Domains:
1. Login to Google Domains
2. My domains → Manage → DNS
3. Add records

---

## 🆘 Troubleshooting

### Build fails?
```powershell
# Clear cache and rebuild
rm -r node_modules
rm package-lock.json
npm install
npm run build
```

### Firebase command not found?
```powershell
# Reinstall Firebase CLI
npm install -g firebase-tools
```

### Domain not connecting?
- Check DNS records are correct
- Wait 24-48 hours for propagation
- Check: https://dnschecker.org/

### Need help?
Check the detailed guide: `DEPLOYMENT_GUIDE.md`

---

## 📊 After Deployment

1. **Test your live site:**
   - https://curexhealth.in
   - Test booking form
   - Check all pages

2. **Add to Google Search Console:**
   - https://search.google.com/search-console/
   - Verify ownership
   - Submit sitemap

3. **Monitor Performance:**
   - https://pagespeed.web.dev/
   - Test mobile and desktop

4. **Set up Analytics:**
   - Google Analytics
   - Firebase Analytics

---

## 🎉 Ready to Deploy!

Your project is built and ready. Just run:

```powershell
firebase deploy
```

**Need help?** See `DEPLOYMENT_GUIDE.md` for detailed instructions.

---

Good luck with your deployment! 🚀
