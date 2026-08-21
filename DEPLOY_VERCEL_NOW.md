# ⚡ Deploy to Vercel with Hostinger Domain

**Fastest deployment option - 5 minutes total!**

---

## 🚀 Step 1: Deploy to Vercel (2 minutes)

### 1.1 Install Vercel CLI (if not installed)
```powershell
npm install -g vercel
```

### 1.2 Login to Vercel
```powershell
vercel login
```

**Choose login method:**
- Email (recommended) - Enter your email, click verification link
- GitHub - Login with GitHub account
- GitLab - Login with GitLab account

### 1.3 Deploy Your Project
```powershell
vercel
```

**Answer these prompts:**
```
? Set up and deploy? → Yes

? Which scope? → [Select your account]

? Link to existing project? → No

? What's your project's name? → curexhealth

? In which directory is your code located? → ./

? Want to modify these settings? → No
```

**Vercel will:**
- Auto-detect it's a Vite project ✓
- Build your project
- Deploy to production
- Give you a URL like: `https://curexhealth-xxx.vercel.app`

### 1.4 Deploy to Production
```powershell
vercel --prod
```

**Done!** Your site is live on Vercel.

**Test the URL** they give you (like `curexhealth.vercel.app`)

---

## 🌐 Step 2: Connect Hostinger Domain (3 minutes)

### 2.1 Add Domain in Vercel Dashboard

1. **Go to Vercel Dashboard:**
   https://vercel.com/dashboard

2. **Select your project:**
   - Click on "curexhealth" project

3. **Go to Settings:**
   - Click "Settings" tab at top
   - Click "Domains" in left sidebar

4. **Add your domain:**
   - Click "Add" button
   - Enter: `curexhealth.in`
   - Click "Add"

5. **Vercel shows DNS records:**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

6. **Also add www subdomain:**
   - Click "Add" again
   - Enter: `www.curexhealth.in`
   - Click "Add"
   - Vercel shows:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

---

### 2.2 Update DNS in Hostinger

1. **Login to Hostinger:**
   https://hpanel.hostinger.com/

2. **Go to Domains:**
   - Click "Domains" in sidebar
   - Find "curexhealth.in"
   - Click "Manage"

3. **Go to DNS Settings:**
   - Click "DNS / Name Servers"
   - Click "Manage"

4. **Delete old A records:**
   - Find existing A records
   - Click trash icon to delete

5. **Add Vercel A record:**
   - Type: `A`
   - Name: `@`
   - Points to: `76.76.21.21`
   - TTL: `14400` (or default)
   - Click "Add Record"

6. **Add CNAME for www:**
   - Type: `CNAME`
   - Name: `www`
   - Points to: `cname.vercel-dns.com`
   - TTL: `14400`
   - Click "Add Record"

7. **Save changes**

---

## ⏰ Step 3: Wait for DNS (Usually Fast!)

### Timeline:
- **Vercel verification:** 5-30 minutes (very fast!)
- **DNS propagation:** 30 minutes - 4 hours
- **SSL certificate:** Automatic and instant once DNS connects

### Check status:
1. **In Vercel Dashboard:**
   - Go to Settings → Domains
   - Status shows:
     - "Invalid Configuration" → Still waiting
     - "Valid Configuration" → Connected! ✅

2. **Check DNS propagation:**
   https://dnschecker.org/
   - Enter: `curexhealth.in`
   - Should show `76.76.21.21`

---

## ✅ Step 4: Your Site is Live!

Once DNS propagates:
- Visit: https://curexhealth.in
- HTTPS with SSL 🔒 (automatic)
- Super fast (Vercel Edge Network)

---

## 🔄 Future Deployments

Vercel is the easiest for updates:

### Option A: GitHub Auto-Deploy (Recommended)
Vercel already connected to your GitHub! Every push to `main` auto-deploys.

**Just push code:**
```powershell
git add .
git commit -m "update"
git push origin main
```

**Vercel automatically:**
- Detects the push
- Builds your project
- Deploys to production
- Live in ~30 seconds!

### Option B: Manual Deploy
```powershell
vercel --prod
```

---

## 🎯 Quick Command Reference

```powershell
# First time deployment
npm install -g vercel
vercel login
vercel
vercel --prod

# Future deployments
git push origin main  # Auto-deploys!

# Or manual
vercel --prod
```

---

## 💰 Cost: FREE Forever

**Vercel Free (Hobby) Plan:**
- ✅ Unlimited websites
- ✅ 100 GB bandwidth/month
- ✅ FREE SSL certificate
- ✅ FREE custom domain
- ✅ Automatic GitHub deployments
- ✅ Edge network (super fast)
- ✅ 6,000 build minutes/month

**Your site:** Well within free limits ✓

**Total cost: ₹0/month** (just domain renewal)

---

## 🆘 Troubleshooting

### Issue: "vercel: command not found"
```powershell
npm install -g vercel
```

### Issue: Domain not connecting
1. Check DNS records match exactly: `76.76.21.21`
2. Wait 4-24 hours for full propagation
3. Check Vercel dashboard for error messages

### Issue: Build fails
```powershell
# Test build locally first
npm run build

# If works locally but fails on Vercel
# Check Vercel build logs in dashboard
```

### Issue: Environment variables not working
1. Go to Vercel Dashboard → Settings → Environment Variables
2. Add all VITE_ variables from your `.env` file
3. Redeploy: `vercel --prod`

---

## 🚀 Why Vercel is Great

- ✅ **Fastest deployment:** 30 seconds from code to live
- ✅ **Auto-deploys from GitHub:** Push code → Live automatically
- ✅ **Instant SSL:** No waiting, works immediately
- ✅ **Super fast CDN:** Edge network worldwide
- ✅ **Easy to use:** Simple commands
- ✅ **Great free tier:** 100 GB bandwidth

---

## 📊 Comparison: Vercel vs Firebase

| Feature | Vercel | Firebase |
|---------|--------|----------|
| **Setup Time** | 2 min | 5 min |
| **First Deploy** | 1 min | 2 min |
| **GitHub Auto-Deploy** | ✅ Built-in | Manual setup |
| **SSL Speed** | Instant | 1-24 hours |
| **Bandwidth** | 100 GB | 10 GB |
| **Ease of Use** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

**Winner for your case: Vercel** ⚡

---

## ✨ Bonus: Preview Deployments

Every branch gets a preview URL:
```powershell
git checkout -b new-feature
git push origin new-feature
```

Vercel automatically creates: `https://curexhealth-git-new-feature.vercel.app`

Test before merging to main!

---

## 🎉 You're Ready!

Start now:

```powershell
vercel login
vercel --prod
```

Then add domain in Vercel Dashboard!

**Your site will be live at:** https://curexhealth.in

---

Need help? Let me know! 🚀
