# Script per deploy rapido su GitHub
# Uso: .\deploy.ps1 "messaggio del commit"

param(
    [string]$Message = "Update: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
)

Write-Host "Inizio deploy..." -ForegroundColor Cyan
Write-Host ""

# Aggiungi tutti i file modificati
Write-Host "Aggiunta file modificati..." -ForegroundColor Yellow
git add .

# Crea il commit
Write-Host "Creazione commit: $Message" -ForegroundColor Yellow
git commit -m $Message

# Push su GitHub
Write-Host "Push su GitHub..." -ForegroundColor Yellow
git push

Write-Host ""
Write-Host "Deploy completato!" -ForegroundColor Green
Write-Host "Il sito sara aggiornato tra 1-2 minuti su GitHub Pages" -ForegroundColor Cyan
Write-Host ""
Write-Host "Per vedere lo stato del deploy:" -ForegroundColor White
Write-Host "https://github.com/Ginevra263/romantic-anniversary-page/actions" -ForegroundColor Blue
