# 🚀 Deploy CurexHealth NOW!

Your project is **BUILD READY** ✓

---

## 🎯 Quick Deploy (5 minutes)

### Step 1: Login to Firebase
```powershell
firebase login
```

### Step 2: Initialize Firebase Hosting
```powershell
firebase init hosting
```

**Important answers:**
- Public directory: `dist`
- Single-page app: `Yes`
- GitHub deploys: `No`
- Overwrite index.html: `No`

### Step 3: Deploy!
```powershell
firebase deploy
```

**That's it!** Your site will be live at a Firebase URL.

---

## 🌐 Add Your Domain (curexhealth.in)

### Step 1: Go to Firebase Console
https://console.firebase.google.com/

### Step 2: Add Custom Domain
1. Select your project
2. Click **Hosting** in sidebar
3. Click **Add custom domain**
4. Enter: `curexhealth.in`
5. Firebase shows DNS records

### Step 3: Update DNS at Your Domain Registrar

**Where did you buy curexhealth.in?**

#### For GoDaddy:
1. Go to https://dcc.godaddy.com/manage/
2. Find curexhealth.in → Click DNS
3. Add the A records shown by Firebase
4. Add the TXT record for verification

#### For Namecheap:
1. Go to https://ap.www.namecheap.com/domains/list/
2. Click Manage next to curexhealth.in
3. Advanced DNS tab
4. Add A and TXT records

#### For Other Registrars:
1. Login to where you bought the domain
2. Find DNS Management/DNS Settings
3. Add the A and TXT records shown by Firebase

### Step 4: Add WWW Subdomain (Optional)
1. Back in Firebase Console → Add custom domain
2. Enter: `www.curexhealth.in`
3. Add CNAME record to your DNS

### Step 5: Wait for Verification
- DNS propagation: 1-24 hours (usually fast)
- SSL certificate: Automatic
- Check status in Firebase Console

---

## ⚡ Alternative: Vercel (Even Faster!)

If Firebase seems complex, try Vercel:

```powershell
# Install Vercel
npm install -g vercel

# Login (opens browser)
vercel login

# Deploy
vercel --prod
```

Then add domain in Vercel dashboard.

---

## 📋 DNS Records Reference

Firebase typically provides:

```
Type: A
Host: @
Value: 151.101.1.195

Type: A  
Host: @
Value: 151.101.65.195

Type: TXT
Host: @
Value: [verification code from Firebase]
```

**For www subdomain:**
```
Type: CNAME
Host: www
Value: [your-site].web.app
```

---

## ✅ Verification

Once DNS propagates, check:

1. **Your domain:**
   - https://curexhealth.in
   - https://www.curexhealth.in

2. **SSL Certificate:**
   - Should show 🔒 in browser

3. **All pages work:**
   - Home, Services, About, Contact, etc.

4. **Booking form:**
   - Test a submission
   - Check emails arrive

---

## 🔄 Future Updates

After initial setup, updating is easy:

```powershell
# Make your code changes

# Build
npm run build

# Deploy
firebase deploy
```

Or use the PowerShell script:
```powershell
.\deploy.ps1
```

---

## 🆘 Need Help?

### Firebase not working?
```powershell
# Check login
firebase login --reauth

# Check project
firebase projects:list

# Select project
firebase use --add
```

### Domain not connecting?
- Check DNS records are exact matches
- Wait 24 hours for DNS propagation
- Check propagation: https://dnschecker.org/

### Build errors?
```powershell
# Clean and rebuild
rm -r dist
npm run build
```

---

## 📚 More Resources

- **Detailed Guide:** See `DEPLOYMENT_GUIDE.md`
- **Checklist:** See `PRE_DEPLOYMENT_CHECKLIST.md`
- **Quick Reference:** See `QUICK_DEPLOY.md`

---

## 🎉 You're Ready!

Your build is successful. Just run:

```powershell
firebase login
firebase init hosting
firebase deploy
```

Then add your domain in Firebase Console.

**Your site will be live at:** https://curexhealth.in

Good luck! 🚀

---

## 💡 Pro Tips

1. **Test locally first:**
   ```powershell
   npm run preview
   ```

2. **Use the deploy script:**
   ```powershell
   .\deploy.ps1
   ```

3. **Check before deploy:**
   - Review `PRE_DEPLOYMENT_CHECKLIST.md`
   - Update phone numbers
   - Test all forms

4. **After deploy:**
   - Test on mobile
   - Check Google PageSpeed
   - Set up Google Analytics
   - Add to Search Console

---

**Questions?** Check the guides or Firebase documentation:
https://firebase.google.com/docs/hosting
