/**
 * Build Diagnostics Script
 * Run this to identify potential build issues before deploying to Vercel
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { readdirSync, statSync } from 'fs';

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

function getDirectorySize(dir) {
  let size = 0;
  const files = readdirSync(dir, { recursive: true });
  files.forEach(file => {
    try {
      const filePath = path.join(dir, file);
      const stat = statSync(filePath);
      if (stat.isFile()) {
        size += stat.size;
      }
    } catch (error) {
      // Skip files we can't read
    }
  });
  return size;
}

function countFiles(dir) {
  let count = 0;
  try {
    const files = readdirSync(dir, { recursive: true });
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = statSync(filePath);
      if (stat.isFile()) {
        count++;
      }
    });
  } catch (error) {
    return 0;
  }
  return count;
}

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkFile(filepath, description) {
  try {
    if (fs.existsSync(filepath)) {
      log(`✓ ${description}`, 'green');
      return true;
    } else {
      log(`✗ ${description} - NOT FOUND`, 'red');
      return false;
    }
  } catch (error) {
    log(`✗ ${description} - ERROR: ${error.message}`, 'red');
    return false;
  }
}

function runCommand(command, description) {
  try {
    log(`\n📦 ${description}...`, 'blue');
    execSync(command, { stdio: 'inherit' });
    log(`✓ ${description} completed`, 'green');
    return true;
  } catch (error) {
    log(`✗ ${description} failed`, 'red');
    return false;
  }
}

async function main() {
  log('\n═══════════════════════════════════════', 'blue');
  log('   VERCEL BUILD DIAGNOSTICS', 'blue');
  log('═══════════════════════════════════════\n', 'blue');

  // Check Configuration Files
  log('\n📋 Checking Configuration Files...', 'yellow');
  const configs = [
    ['vercel.json', 'Vercel Configuration'],
    ['vite.config.js', 'Vite Configuration'],
    ['tailwind.config.js', 'Tailwind Configuration'],
    ['package.json', 'Package Configuration'],
    ['.vercelignore', 'Vercel Ignore File'],
  ];

  let configsValid = true;
  configs.forEach(([file, desc]) => {
    if (!checkFile(file, desc)) configsValid = false;
  });

  // Check Source Files
  log('\n📂 Checking Source Files...', 'yellow');
  const sources = [
    ['src/main.jsx', 'Main Entry Point'],
    ['src/App.jsx', 'App Component'],
    ['index.html', 'Root HTML'],
  ];

  let sourcesValid = true;
  sources.forEach(([file, desc]) => {
    if (!checkFile(file, desc)) sourcesValid = false;
  });

  // Check Dependencies
  log('\n📦 Checking Node Modules...', 'yellow');
  if (fs.existsSync('node_modules')) {
    log('✓ node_modules directory exists', 'green');
  } else {
    log('✗ node_modules not found - installing dependencies...', 'yellow');
    runCommand('npm install', 'Installing dependencies');
  }

  // Verify Node Version
  log('\n🔍 Checking Node Version...', 'yellow');
  try {
    const nodeVersion = execSync('node --version', { encoding: 'utf-8' }).trim();
    const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
    if (majorVersion >= 18) {
      log(`✓ Node ${nodeVersion} (compatible)`, 'green');
    } else {
      log(`✗ Node ${nodeVersion} (requires 18.x or 20.x)`, 'red');
    }
  } catch (error) {
    log('✗ Could not determine Node version', 'red');
  }

  // Run Linting
  log('\n🔎 Running ESLint...', 'yellow');
  try {
    execSync('npm run lint', { stdio: 'pipe' });
    log('✓ No linting errors', 'green');
  } catch (error) {
    log('⚠ Linting warnings found (check above)', 'yellow');
  }

  // Run Build
  log('\n🔨 Building Project...', 'yellow');
  const buildSuccess = runCommand('npm run build', 'Building with Vite');

  // Check Build Output
  if (buildSuccess && fs.existsSync('dist')) {
    log('\n📊 Build Output Analysis...', 'yellow');
    const distSizeBytes = getDirectorySize('dist');
    const distSize = formatBytes(distSizeBytes);
    log(`✓ Build output size: ${distSize}`, 'green');

    const files = countFiles('dist');
    log(`✓ Total files in dist: ${files}`, 'green');
  }

  // Final Summary
  log('\n═══════════════════════════════════════', 'blue');
  if (buildSuccess && configsValid && sourcesValid) {
    log('   ✓ BUILD DIAGNOSTICS PASSED', 'green');
    log('   Ready for Vercel deployment!', 'green');
  } else {
    log('   ✗ BUILD DIAGNOSTICS FAILED', 'red');
    log('   Fix issues above before deploying', 'red');
  }
  log('═══════════════════════════════════════\n', 'blue');
}

main().catch(error => {
  log(`\nFatal error: ${error.message}`, 'red');
  process.exit(1);
});
