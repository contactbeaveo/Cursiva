@echo off
echo.
echo ============================================================
echo BUILD COMPLET - CURSIVA
echo ============================================================
echo.

echo Etape 1/4: Nettoyage du dossier dist...
if exist dist (
    rmdir /s /q dist
    echo Dossier dist nettoye
) else (
    echo Pas de dossier dist a nettoyer
)
echo.

echo Etape 2/4: Build avec Vite...
call npm run build
if %errorlevel% neq 0 (
    echo Erreur lors du build Vite
    exit /b 1
)
echo Build Vite termine
echo.

echo Etape 3/4: Verification du build...
node verify-build.js
if %errorlevel% neq 0 (
    echo Erreur lors de la verification
    exit /b 1
)
echo Verification reussie
echo.

echo Etape 4/4: Termine!
echo.
echo ============================================================
echo BUILD TERMINE AVEC SUCCES!
echo ============================================================
echo.
echo Le dossier /dist est pret pour le deploiement
echo.
echo Prochaines etapes:
echo    1. Testez localement: npm run preview
echo    2. Deployez le contenu de /dist sur votre serveur
echo.
