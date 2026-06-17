#!/bin/bash

# Vercel Build Debug Script
# Run this locally to simulate Vercel build environment

echo "🚀 Starting Vercel Build Simulation..."
echo "=================================="

# Check Node version
echo "📦 Checking Node version..."
node --version
npm --version

# Clean build
echo "\n🧹 Cleaning previous builds..."
rm -rf node_modules dist

# Install dependencies
echo "\n⬇️  Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
  echo "❌ Dependency installation failed"
  exit 1
fi

# Run linter
echo "\n🔍 Running ESLint..."
npm run lint

if [ $? -ne 0 ]; then
  echo "⚠️  ESLint warnings found (non-blocking)"
fi

# Build project
echo "\n🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed"
  exit 1
fi

# Check build output
echo "\n📊 Build output size:"
du -sh dist/

echo "\n✅ Build simulation completed successfully!"
echo "=================================="
echo "Your project is ready for Vercel deployment!"
