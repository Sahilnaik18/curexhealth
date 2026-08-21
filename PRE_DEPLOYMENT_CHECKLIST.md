# ✅ Pre-Deployment Checklist

Complete this checklist before deploying to production.

---

## 🔧 Configuration

- [ ] **Environment Variables (.env)**
  - [ ] Firebase configuration (if using Firebase features)
  - [ ] EmailJS credentials configured
  - [ ] Google Sheets API credentials
  - [ ] All API keys are valid

- [ ] **Contact Information**
  - [ ] Update phone number in SuccessScreen.jsx: Currently `+91 98765 43210`
  - [ ] Update email addresses
  - [ ] Update WhatsApp number (if applicable)
  - [ ] Check all contact forms have correct recipient

- [ ] **Content Review**
  - [ ] All text is correct and professional
  - [ ] No placeholder text (Lorem ipsum, etc.)
  - [ ] All images load correctly
  - [ ] Service descriptions are accurate
  - [ ] Pricing is up to date (if displayed)

---

## 🧪 Testing

- [ ] **Functionality**
  - [ ] Booking form submission works
  - [ ] Email notifications are received
  - [ ] Google Sheets integration working
  - [ ] WhatsApp integration works
  - [ ] All navigation links work
  - [ ] Contact form works

- [ ] **Pages Check**
  - [ ] Home page loads
  - [ ] Services page loads
  - [ ] About page loads
  - [ ] Contact page loads
  - [ ] Service Areas page loads
  - [ ] All individual service pages load
  - [ ] FAQ page loads
  - [ ] Terms & Conditions page loads
  - [ ] Privacy Policy page loads
  - [ ] Cancellation Policy page loads

- [ ] **Responsive Design**
  - [ ] Mobile view (< 640px)
  - [ ] Tablet view (640px - 1024px)
  - [ ] Desktop view (> 1024px)
  - [ ] Large screen (> 1920px)

- [ ] **Browser Compatibility**
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
  - [ ] Mobile browsers

---

## 🔒 Security

- [ ] **Environment Variables**
  - [ ] No sensitive data in source code
  - [ ] API keys are restricted (Firebase, EmailJS)
  - [ ] `.env` file is in `.gitignore`

- [ ] **Firebase Security**
  - [ ] Firestore security rules configured
  - [ ] Authentication rules (if using auth)

---

## 🎨 SEO & Performance

- [ ] **SEO**
  - [ ] Meta titles are descriptive
  - [ ] Meta descriptions are present
  - [ ] Open Graph tags for social sharing
  - [ ] Favicon is set
  - [ ] Sitemap.xml exists
  - [ ] Robots.txt is configured

- [ ] **Performance**
  - [ ] Images are optimized
  - [ ] Build completes without warnings
  - [ ] No console errors
  - [ ] Lighthouse score > 90

---

## 🚀 Deployment

- [ ] **Pre-Deploy**
  - [ ] Git repository is up to date
  - [ ] `npm run build` succeeds
  - [ ] `npm run preview` works locally
  - [ ] No TypeScript/ESLint errors

- [ ] **Domain**
  - [ ] Domain registrar credentials ready
  - [ ] DNS management access confirmed
  - [ ] Understand DNS propagation may take 24-48 hours

- [ ] **Hosting Platform**
  - [ ] Firebase/Vercel/Netlify account created
  - [ ] CLI tool installed
  - [ ] Logged in to CLI

---

## 📋 Post-Deployment

- [ ] **Verification**
  - [ ] Site loads at https://curexhealth.in
  - [ ] SSL certificate is active (HTTPS)
  - [ ] All pages accessible
  - [ ] Forms work in production
  - [ ] Mobile version works

- [ ] **Setup Services**
  - [ ] Google Search Console verification
  - [ ] Google Analytics setup
  - [ ] Submit sitemap to Google
  - [ ] Set up uptime monitoring

- [ ] **Backup**
  - [ ] Database backup strategy in place
  - [ ] Code pushed to Git
  - [ ] Documentation saved

---

## 📞 Important Phone Numbers to Update

Search and replace these if needed:

Current numbers in code:
- `+91 98765 43210` - Main call button in SuccessScreen
- Check all other components for phone numbers
- Update WhatsApp numbers

### Where to check:
```powershell
# Search for phone numbers in your project
grep -r "98765" src/
grep -r "876269" src/
grep -r "tel:" src/
```

---

## 🔍 Final Check Commands

```powershell
# Build the project
npm run build

# Preview locally
npm run preview

# Check for console errors
# Open browser DevTools → Console

# Check mobile view
# Browser DevTools → Toggle device toolbar
```

---

## ✅ Ready to Deploy?

If all items are checked:

```powershell
# Firebase
firebase deploy

# OR Vercel
vercel --prod

# OR use the script
.\deploy.ps1
```

---

## 📝 Notes

Add any deployment-specific notes here:

- Domain registrar: ____________________
- Hosting platform: ____________________
- Firebase project: ____________________
- Deployment date: ____________________
- Deployed by: ____________________

---

**Once complete, your site will be live at https://curexhealth.in** 🎉
