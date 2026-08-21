# 🚀 Deployment Guide for CurexHealth

## Domain: curexhealth.in

This guide covers deploying your React + Vite application to production with your custom domain.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All environment variables are configured in `.env`
- [ ] Firebase config is set up (if using Firebase features)
- [ ] EmailJS is configured for contact forms
- [ ] Google Sheets integration is working
- [ ] Test the build locally: `npm run build && npm run preview`
- [ ] Update contact information (phone numbers, emails)

---

## Option 1: Firebase Hosting (Recommended)

### Why Firebase?
- Free SSL certificate
- Global CDN
- Easy custom domain setup
- Integrated with your Firebase services
- Automatic deployments

### Steps:

#### 1. Install Firebase CLI
```bash
npm install -g firebase-tools
```

#### 2. Login to Firebase
```bash
firebase login
```

#### 3. Initialize Firebase Hosting
```bash
firebase init hosting
```

**Configuration prompts:**
- "What do you want to use as your public directory?" → **dist**
- "Configure as a single-page app?" → **Yes**
- "Set up automatic builds and deploys with GitHub?" → **No** (for now)
- "File dist/index.html already exists. Overwrite?" → **No**

#### 4. Build Your Project
```bash
npm run build
```

#### 5. Deploy to Firebase
```bash
firebase deploy --only hosting
```

#### 6. Add Custom Domain (curexhealth.in)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Hosting** → **Add custom domain**
4. Enter: `curexhealth.in`
5. Firebase will provide DNS records (A and TXT records)
6. Add these records to your domain registrar (where you bought curexhealth.in)
7. Add `www.curexhealth.in` as well (redirects to main domain)

**DNS Records Example:**
```
Type: A
Name: @
Value: [Firebase IP addresses provided]

Type: TXT
Name: @
Value: [Verification code provided by Firebase]
```

#### 7. Wait for SSL Certificate
- Firebase automatically provisions SSL certificates
- Takes 24-48 hours for DNS propagation
- Your site will be live at https://curexhealth.in

---

## Option 2: Vercel (Alternative)

### Why Vercel?
- Extremely fast deployments
- Automatic Git deployments
- Free SSL
- Great performance
- Easy custom domain

### Steps:

#### 1. Install Vercel CLI
```bash
npm install -g vercel
```

#### 2. Login to Vercel
```bash
vercel login
```

#### 3. Deploy
```bash
vercel
```

Follow the prompts:
- "Set up and deploy?" → **Yes**
- "Which scope?" → Select your account
- "Link to existing project?" → **No**
- "What's your project's name?" → **curexhealth**
- "In which directory is your code located?" → **./**
- "Want to modify these settings?" → **No**

#### 4. Deploy to Production
```bash
vercel --prod
```

#### 5. Add Custom Domain

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Domains**
4. Add `curexhealth.in` and `www.curexhealth.in`
5. Update your domain's DNS records:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

6. SSL is automatic and instant

---

## Option 3: Netlify (Alternative)

### Steps:

#### 1. Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### 2. Login
```bash
netlify login
```

#### 3. Build the project
```bash
npm run build
```

#### 4. Deploy
```bash
netlify deploy --prod --dir=dist
```

#### 5. Add Custom Domain

1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Select your site
3. Go to **Domain settings** → **Add custom domain**
4. Enter `curexhealth.in`
5. Update DNS records at your domain registrar

```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [your-site-name].netlify.app
```

---

## 🔧 Environment Variables Setup

### For Firebase Hosting:
Create `firebase.json` (already created) and environment variables are built into the app during build.

### For Vercel:
Add environment variables in Vercel Dashboard:
1. Go to **Settings** → **Environment Variables**
2. Add each variable from `.env` file:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - etc.

### For Netlify:
Add in **Site settings** → **Environment variables**

---

## 🧪 Testing Your Deployment

After deployment:

1. **Test all pages:**
   - Home
   - Services
   - About
   - Contact
   - Service Areas

2. **Test functionality:**
   - Booking form submission
   - Email notifications
   - WhatsApp integration
   - Mobile responsiveness
   - Page load speed

3. **Check SEO:**
   - Meta tags are present
   - Sitemap is accessible
   - Robots.txt is correct

4. **Performance:**
   - Run [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - Run [GTmetrix](https://gtmetrix.com/)

---

## 🔄 Continuous Deployment

### GitHub Integration (Recommended)

#### For Firebase:
1. Push code to GitHub
2. Run `firebase init hosting:github`
3. Automatic deployment on every push to `main` branch

#### For Vercel:
1. Go to Vercel Dashboard
2. **Import Git Repository**
3. Connect to your GitHub repo
4. Auto-deploys on every push

#### For Netlify:
1. Go to Netlify Dashboard
2. **New site from Git**
3. Connect to GitHub
4. Auto-deploys on every push

---

## 📊 Post-Deployment Setup

1. **Google Analytics**
   - Add GA4 tracking code
   - Monitor traffic

2. **Google Search Console**
   - Verify domain ownership
   - Submit sitemap: `https://curexhealth.in/sitemap.xml`

3. **Performance Monitoring**
   - Set up Firebase Performance (if using Firebase)
   - Monitor Core Web Vitals

4. **Backup Strategy**
   - Regular database backups
   - Code backups in Git

---

## 🆘 Troubleshooting

### Issue: Site not loading after deployment
- Check if build was successful: `npm run build`
- Verify DNS records are correct
- Wait 24-48 hours for DNS propagation

### Issue: 404 on page refresh
- Ensure SPA routing is configured
- For Firebase: Check `firebase.json` has `"rewrites"` rule
- For Vercel: Add `vercel.json` with rewrites

### Issue: Environment variables not working
- Make sure variables start with `VITE_`
- Rebuild after adding variables
- Check deployment platform's environment variable settings

### Issue: Custom domain not working
- Verify DNS records are correct
- Check domain propagation: https://dnschecker.org/
- Ensure domain is not locked at registrar

---

## 📞 Support

If you need help:
- Firebase: https://firebase.google.com/support
- Vercel: https://vercel.com/support
- Netlify: https://www.netlify.com/support/

---

## ✅ Quick Deploy Commands

### Firebase
```bash
npm run build
firebase deploy
```

### Vercel
```bash
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

---

**Your site will be live at: https://curexhealth.in** 🎉
