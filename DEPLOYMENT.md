# Vercel Deployment Guide

## Build Configuration

The project is configured to deploy on Vercel with the following setup:

### Key Files

- `vercel.json` - Vercel deployment configuration
- `vite.config.js` - Vite build optimization
- `tailwind.config.js` - Tailwind CSS with safelist for dynamic classes
- `package.json` - Dependencies and build scripts

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

3. **Deploy**
   - Vercel automatically deploys on every push to main branch

### Performance Optimizations

1. **Code Splitting** - Vendor, animations, and icons are split
2. **Minification** - Terser minifies JavaScript
3. **CSS Optimization** - Tailwind CSS is purged
4. **Caching** - Assets are cached for 1 year
5. **Console Removal** - Console logs removed in production

### Troubleshooting

#### Build Failures

- Check Node version compatibility (18.x or 20.x)
- Ensure all dependencies are installed: `npm install`
- Clear cache: `rm -rf node_modules dist && npm install`

#### Performance Issues

- Check build size: `npm run build` and check dist/ folder
- Optimize images with proper formats
- Use dynamic imports for large components

#### Deployment Issues

- Check `.vercelignore` for excluded files
- Verify environment variables are set
- Check build logs in Vercel dashboard

### Monitoring

Monitor your deployment at: https://vercel.com/dashboard
