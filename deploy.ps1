# Deployment Script for CurexHealth
# This script builds and deploys your application

Write-Host "🚀 CurexHealth Deployment Script" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Build the project
Write-Host "🔨 Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build successful!" -ForegroundColor Green
Write-Host ""

# Ask user which platform to deploy to
Write-Host "Select deployment platform:" -ForegroundColor Cyan
Write-Host "1. Firebase Hosting (Recommended)"
Write-Host "2. Vercel"
Write-Host "3. Netlify"
Write-Host "4. Preview build locally"
Write-Host "5. Cancel"
Write-Host ""

$choice = Read-Host "Enter your choice (1-5)"

switch ($choice) {
    "1" {
        Write-Host "🔥 Deploying to Firebase..." -ForegroundColor Yellow
        firebase deploy --only hosting
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Deployed to Firebase successfully!" -ForegroundColor Green
            Write-Host "🌐 Your site is live at: https://curexhealth.in" -ForegroundColor Cyan
        }
    }
    "2" {
        Write-Host "▲ Deploying to Vercel..." -ForegroundColor Yellow
        vercel --prod
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Deployed to Vercel successfully!" -ForegroundColor Green
        }
    }
    "3" {
        Write-Host "🌊 Deploying to Netlify..." -ForegroundColor Yellow
        netlify deploy --prod --dir=dist
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Deployed to Netlify successfully!" -ForegroundColor Green
        }
    }
    "4" {
        Write-Host "👀 Starting preview server..." -ForegroundColor Yellow
        npm run preview
    }
    "5" {
        Write-Host "❌ Deployment cancelled" -ForegroundColor Red
        exit 0
    }
    default {
        Write-Host "❌ Invalid choice" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "🎉 Done!" -ForegroundColor Green
