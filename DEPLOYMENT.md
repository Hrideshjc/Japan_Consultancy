# Vercel Deployment Guide

## Build Configuration

The project is configured to deploy on Vercel with the following setup:

### Key Files

- `vercel.json` - Vercel deployment configuration with build commands and rewrites
- `vite.config.js` - Vite build optimization with code splitting and minification
- `tailwind.config.js` - Tailwind CSS with safelist for dynamic classes
- `package.json` - Dependencies and build scripts
- `.vercelignore` - Files to exclude from deployment

### Environment Variables

If needed, create a `.env.local` file in the root directory:

```
VITE_API_URL=https://your-api-url.com
```

### Build Command

```bash
npm run build
```

### Output Directory

```
dist/
```

### Deployment Steps

1. **Connect GitHub Repository**
   - Push code to GitHub
   - Connect repository to Vercel

2. **Configure Vercel Project**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Node Version: 18.x or 20.x

3. **Deploy**
   - Vercel automatically deploys on every push to master branch

### Performance Optimizations

1. **Code Splitting** - Vendor (React, Router), animations (Framer), icons separated
2. **Minification** - Terser minifies JavaScript with console removal
3. **CSS Optimization** - Tailwind CSS purged with safelist
4. **Caching** - Assets cached for 1 year in production
5. **Source Maps** - Disabled for production builds
6. **Asset Inline Limit** - 4KB threshold for inline assets

### Troubleshooting

#### Build Failures

**Issue: "Cannot find module" errors**

- Solution: Delete `node_modules` and `dist` folders
  ```bash
  rm -rf node_modules dist
  npm install
  npm run build
  ```

**Issue: "createBrowserRouter is not defined"**

- Solution: Ensure RouterConfig.jsx has proper imports:
  ```javascript
  import { createBrowserRouter, RouterProvider } from "react-router-dom";
  ```

**Issue: Vite build errors**

- Solution: Check vite.config.js for syntax errors in manualChunks
- Ensure rollupOptions output is properly formatted

**Issue: Tailwind CSS classes not working**

- Solution: Verify tailwind.config.js content path includes all component paths
- Add dynamic classes to safelist in tailwind.config.js

**Issue: File import case sensitivity**

- Solution: Ensure file imports match exact case:
  - Import: `import Home from './pages/home.jsx'`
  - File: `src/pages/home.jsx` (lowercase)
  - NOT: `src/pages/Home.jsx` (uppercase)

#### Performance Issues

- Check build size: `npm run build` then `du -sh dist/`
- Analyze bundle: Add `npm run build -- --analyze`
- Optimize images: Use WebP format when possible
- Use dynamic imports for large components: `const Component = lazy(() => import('./Component'))`

#### Deployment Issues

**Issue: Build succeeds locally but fails on Vercel**

- Solution: Clear Vercel build cache
  - Go to Vercel Dashboard → Settings → Build Cache
  - Click "Clear All"
  - Redeploy

**Issue: "Cannot GET /" or routing issues**

- Solution: Verify vercel.json has correct rewrites configured
- All routes should redirect to /index.html for SPA routing

**Issue: Assets not loading (404 errors)**

- Solution: Check .vercelignore not excluding important files
- Verify public/ folder exists and assets are accessible
- Check file paths use forward slashes (not backslashes)

**Issue: Environment variables not working**

- Solution: Prefix variables with `VITE_` for client-side access
- Set in Vercel Project Settings → Environment Variables
- Restart deployment after setting variables

#### Common Error Messages

| Error                             | Cause                  | Fix                                          |
| --------------------------------- | ---------------------- | -------------------------------------------- |
| `ERR_MODULE_NOT_FOUND`            | Missing dependency     | Run `npm install`                            |
| `SyntaxError: Unexpected token`   | Invalid JavaScript     | Check file syntax with ESLint                |
| `Cannot find module 'react'`      | Corrupted node_modules | Delete and reinstall                         |
| `ENOSPC: no space left on device` | Build storage issue    | Clear Vercel cache                           |
| `Build exceeded timeout`          | Slow build process     | Optimize dependencies, check for large files |

### Local Testing Before Deployment

Run this command to simulate Vercel build:

```bash
npm run build && npm run preview
```

Then test the production build at `http://localhost:4173`

### Monitoring

- Monitor deployments: https://vercel.com/dashboard
- View build logs: Click deployment → "Logs"
- Check function execution: Vercel → Functions
- Monitor performance: Vercel → Analytics

### Quick Deployment Checklist

- [ ] All dependencies installed: `npm install`
- [ ] No ESLint errors: `npm run lint`
- [ ] Build succeeds locally: `npm run build`
- [ ] Preview works: `npm run preview`
- [ ] Git changes committed: `git add . && git commit -m "message"`
- [ ] Code pushed to GitHub: `git push origin master`
- [ ] Vercel auto-deployment triggered
- [ ] Check Vercel dashboard for build status
- [ ] Test deployed URL in browser
- [ ] Verify all pages and routes work correctly
