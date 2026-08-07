# PowerShell script to update all phone numbers in the project
# Run this after stopping the development server

$oldPhone = "9876543210"
$newPhone = "8762697832"

Write-Host "Updating phone numbers from $oldPhone to $newPhone..." -ForegroundColor Cyan
Write-Host ""

# Get all JSX, JS, and HTML files
$files = Get-ChildItem -Path "src", "." -Include "*.jsx", "*.js", "*.html", "*.md" -Recurse -File |
    Where-Object { $_.FullName -notmatch "node_modules|dist|build" }

$updatedFiles = 0
$totalReplacements = 0

foreach ($file in $files) {
    try {
        $content = Get-Content $file.FullName -Raw -ErrorAction Stop
        $newContent = $content -replace $oldPhone, $newPhone
        
        if ($content -ne $newContent) {
            # Count occurrences
            $count = ([regex]::Matches($content, $oldPhone)).Count
            $totalReplacements += $count
            
            Set-Content $file.FullName -Value $newContent -NoNewline -ErrorAction Stop
            Write-Host "[OK] Updated: $($file.Name) - $count replacement(s)" -ForegroundColor Green
            $updatedFiles++
        }
    }
    catch {
        Write-Host "[FAIL] Could not update: $($file.Name) - File may be in use" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Summary:" -ForegroundColor Cyan
Write-Host "  Files updated: $updatedFiles" -ForegroundColor Green
Write-Host "  Total replacements: $totalReplacements" -ForegroundColor Green
Write-Host ""

if ($updatedFiles -eq 0) {
    Write-Host "No files were updated. This could mean:" -ForegroundColor Yellow
    Write-Host "  - All phone numbers are already updated" -ForegroundColor Yellow
    Write-Host "  - The development server is running (stop it first)" -ForegroundColor Yellow
}
else {
    Write-Host "Phone numbers updated successfully!" -ForegroundColor Green
    Write-Host "You can now restart the development server." -ForegroundColor Cyan
}
