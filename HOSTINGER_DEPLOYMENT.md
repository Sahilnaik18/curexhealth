# 🚀 Deploy to Hostinger

You bought your domain from Hostinger. Here's how to deploy.

---

## 🎯 Check Your Hostinger Plan First

### Login to Hostinger:
https://hpanel.hostinger.com/

### Check what you have:
1. **Domain Only** - You bought just curexhealth.in (no hosting)
2. **Domain + Hosting** - You have a hosting plan (Premium/Business/etc.)

---

## Option A: If You Have Hostinger Hosting

### ✅ You Can Use Hostinger to Host Your Site

#### Step 1: Build Your Project
```powershell
npm run build
```

This creates the `dist` folder with all your files.

#### Step 2: Upload to Hostinger

**Method 1: File Manager (Easy)**
1. Login to Hostinger hPanel: https://hpanel.hostinger.com/
2. Go to **Websites** → Select your domain
3. Click **File Manager**
4. Navigate to `public_html` folder
5. Delete everything in `public_html`
6. Upload ALL files from your `dist` folder:
   - Upload `index.html`
   - Upload `assets` folder
   - Upload all other files

**Method 2: FTP (Recommended for large files)**
1. In hPanel, go to **Files** → **FTP Accounts**
2. Create FTP account or use existing credentials
3. Use FileZilla or WinSCP to connect:
   - Host: ftp.curexhealth.in (or provided by Hostinger)
   - Username: [from hPanel]
   - Password: [from hPanel]
   - Port: 21
4. Upload contents of `dist` folder to `public_html`

#### Step 3: Configure for Single Page App
1. In File Manager, create `.htaccess` file in `public_html`
2. Add this content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

#### Step 4: SSL Certificate (FREE with Hostinger)
1. In hPanel, go to **Security** → **SSL**
2. Enable FREE SSL certificate
3. Wait 5-10 minutes for activation
4. Force HTTPS (recommended)

#### Step 5: Test Your Site
Visit: https://curexhealth.in

**Done!** Your site is live on Hostinger.

---

## Option B: If You Have ONLY Domain (No Hosting)

### Use FREE Firebase/Vercel Hosting + Point Domain to It

This is **BETTER and FREE**!

#### Why This is Better:
- ✅ FREE hosting (no Hostinger hosting fees)
- ✅ Faster (global CDN)
- ✅ Easier deployments
- ✅ Automatic SSL
- ✅ Better performance

#### Step 1: Deploy to Firebase (FREE)
```powershell
firebase login
firebase init hosting
firebase deploy
```

You'll get a URL like: `https://curexhealth.web.app`

#### Step 2: Point Hostinger Domain to Firebase

1. **Get DNS Records from Firebase:**
   - Go to Firebase Console → Hosting
   - Click "Add custom domain"
   - Enter: curexhealth.in
   - Firebase shows DNS records (A and TXT records)

2. **Update DNS in Hostinger:**
   - Login to Hostinger hPanel
   - Go to **Domains** → Select curexhealth.in
   - Click **DNS / Nameservers**
   - Click **Manage**
   - Delete existing A records
   - Add Firebase A records:
   ```
   Type: A
   Name: @
   Value: 151.101.1.195
   
   Type: A
   Name: @
   Value: 151.101.65.195
   
   Type: TXT
   Name: @
   Value: [verification code from Firebase]
   ```

3. **Wait for DNS Propagation:**
   - Usually 1-4 hours
   - Can take up to 24 hours
   - Check status: https://dnschecker.org/

4. **SSL Certificate:**
   - Firebase automatically provides FREE SSL
   - Activates once DNS propagates

**Done!** Your site is live at https://curexhealth.in (hosted on Firebase for FREE)

---

## 📊 Cost Comparison

### Hostinger Hosting:
- Premium Plan: ~₹149-249/month
- Business Plan: ~₹329-499/month
- **Total: ₹1,788-5,988/year**

### Firebase + Hostinger Domain:
- Firebase Hosting: **FREE**
- Domain from Hostinger: Already paid
- **Total: ₹0/year** (just domain renewal)

### 💡 Recommendation:
**Use Firebase hosting (Option B)** - It's FREE and better performance!

---

## 🎯 Which Option Should You Choose?

### Choose Hostinger Hosting (Option A) if:
- ❌ You already paid for Hostinger hosting
- ❌ You want everything in one place

### Choose Firebase Hosting (Option B) if:
- ✅ You want FREE hosting
- ✅ You want better performance
- ✅ You want easier deployments
- ✅ You only bought the domain (no hosting)

**My recommendation: Option B (Firebase)** - FREE and better!

---

## 🔧 Quick Setup Script for Hostinger FTP

If you choose Hostinger hosting, I can create a script to automatically upload via FTP.

---

## 🆘 Need Help?

### Check Hostinger Plan:
1. Login: https://hpanel.hostinger.com/
2. Check **Websites** or **Hosting** section
3. See if you have active hosting or just domain

### Hostinger Support:
- 24/7 Live chat in hPanel
- Help with FTP setup
- Help with SSL setup

---

## 📝 Next Steps

1. **Check your Hostinger plan** - Domain only or Domain + Hosting?
2. **Choose Option A or B** above
3. **Follow the steps** for your chosen option
4. **Test your site** at https://curexhealth.in

---

**Questions?** Let me know which option you prefer!
