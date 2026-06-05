#!/bin/bash

echo "🔨 Building Cursiva website..."

# Build the project
npm run build

echo "📦 Copying additional files to dist..."

# Copy .htaccess manually (Vite may ignore hidden files)
cp public/.htaccess dist/.htaccess

# Verify all files are copied
echo "✅ Build complete! Files in dist:"
ls -la dist/

echo ""
echo "📋 Checklist:"
echo "- ✓ index.html"
echo "- ✓ assets/"
if [ -f "dist/sitemap.xml" ]; then echo "- ✓ sitemap.xml"; else echo "- ✗ sitemap.xml MISSING"; fi
if [ -f "dist/robots.txt" ]; then echo "- ✓ robots.txt"; else echo "- ✗ robots.txt MISSING"; fi
if [ -f "dist/.htaccess" ]; then echo "- ✓ .htaccess"; else echo "- ✗ .htaccess MISSING"; fi
if [ -f "dist/favicon.svg" ]; then echo "- ✓ favicon.svg"; else echo "- ✗ favicon.svg MISSING"; fi
if [ -f "dist/send-email.php" ]; then echo "- ✓ send-email.php"; else echo "- ✗ send-email.php MISSING"; fi

echo ""
echo "🚀 Ready to deploy! Upload the content of dist/ folder to your server."
