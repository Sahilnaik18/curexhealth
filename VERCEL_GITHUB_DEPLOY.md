# ⚡ Deploy to Vercel via GitHub (Easiest Way!)

Since CLI upload failed, use Vercel's GitHub integration - it's actually better!

---

## 🎯 Deploy via Vercel Dashboard (2 minutes)

### Step 1: Go to Vercel Dashboard
https://vercel.com/dashboard

### Step 2: Import Your GitHub Project

1. Click **"Add New..."** button
2. Click **"Project"**
3. Click **"Import Git Repository"**
4. Find your repository: **Sahilnaik18/curexhealth**
5. Click **"Import"**

### Step 3: Configure Project

Vercel auto-detects everything, but verify:

**Project Name:** `curexhealth`

**Framework Preset:** Vite ✓ (auto-detected)

**Build Settings:**
- Build Command: `npm run build` ✓
- Output Directory: `dist` ✓
- Install Command: `npm install` ✓

**Root Directory:** `./` ✓

Click **"Deploy"**

### Step 4: Wait for Build (1-2 minutes)

Vercel will:
- ✅ Clone your GitHub repo
- ✅ Install dependencies
- ✅ Build your project
- ✅ Deploy to production

You'll see a success screen with your live URL!

---

## 🌐 Add Your Domain (curexhealth.in)

### Step 1: In Vercel Dashboard

1. Your project is now deployed
2. Click on your project name
3. Click **"Settings"** tab
4. Click **"Domains"** in sidebar
5. Click **"Add"** button
6. Enter: `curexhealth.in`
7. Click **"Add"**

Vercel shows:
```
Configuration Required:
Type: A
Name: @
Value: 76.76.21.21
```

### Step 2: Add www Subdomain

1. Click **"Add"** again
2. Enter: `www.curexhealth.in`
3. Click **"Add"**

Vercel shows:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: Update DNS in Hostinger

1. Login to **Hostinger:** https://hpanel.hostinger.com/
2. Go to **Domains** → **curexhealth.in** → **Manage**
3. Click **DNS / Name Servers** → **Manage**

**Delete old A records** (if any)

**Add Vercel records:**

**For main domain:**
- Type: `A`
- Name: `@`
- Points to: `76.76.21.21`
- TTL: `14400`
- Click "Add Record"

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Points to: `cname.vercel-dns.com`
- TTL: `14400`
- Click "Add Record"

**Save changes**

---

## ⏰ Wait for DNS (30 min - 4 hours)

Check status in Vercel Dashboard → Settings → Domains

Once connected, your site is live at:
- https://curexhealth.in ✅
- https://www.curexhealth.in ✅

---

## 🚀 Auto-Deploy Setup (Bonus!)

**Already configured!** Every time you push to GitHub:

```powershell
git add .
git commit -m "update"
git push origin main
```

Vercel automatically:
1. Detects the push
2. Builds your project
3. Deploys to production
4. Live in ~30 seconds!

**No manual deployment needed ever again!** 🎉

---

## 📊 Vercel Dashboard Overview

After deployment, you can see:
- **Deployments:** History of all deploys
- **Analytics:** Visitor stats (upgrade for detailed analytics)
- **Domains:** Manage custom domains
- **Settings:** Environment variables, build settings
- **Logs:** Build and function logs

---

## 🔧 Environment Variables

If your `.env` has variables:

1. Go to **Settings** → **Environment Variables**
2. Add each variable:
   - Name: `VITE_FIREBASE_API_KEY`
   - Value: `[your value]`
   - Environments: Production ✓
3. Click "Save"
4. Redeploy (automatic on next push)

---

## ✅ Advantages of GitHub Deploy

- ✅ **No CLI issues:** Uses GitHub instead
- ✅ **Auto-deploy:** Push code → Live automatically
- ✅ **Preview deploys:** Every PR gets a preview URL
- ✅ **Rollback:** Easy to rollback to previous deploy
- ✅ **Logs:** See build logs in dashboard
- ✅ **Reliable:** No network upload issues

---

## 🎯 Summary

1. **Import from GitHub** in Vercel Dashboard
2. **Deploy** (automatic)
3. **Add domain** in Settings → Domains
4. **Update DNS** in Hostinger
5. **Done!** Future updates auto-deploy on git push

---

## 🆘 Troubleshooting

### Build fails in Vercel?
- Check build logs in Vercel dashboard
- Verify `npm run build` works locally
- Check for missing environment variables

### Domain not connecting?
- Verify DNS records in Hostinger: `76.76.21.21`
- Wait 4-24 hours for DNS propagation
- Check: https://dnschecker.org/

### Want to trigger manual deploy?
- Go to Deployments tab
- Click "..." on latest deployment
- Click "Redeploy"

---

## 🎉 You're Done!

Your workflow now:
1. Make changes to code
2. `git push origin main`
3. Vercel auto-deploys
4. Live at https://curexhealth.in in 30 seconds

No manual deployment ever needed!

---

**Start here:** https://vercel.com/dashboard
Click "Import Project" → Select your GitHub repo!
