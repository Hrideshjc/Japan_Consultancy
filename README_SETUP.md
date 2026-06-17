# Kizuna Consulting - Japan Education Gateway

## Overview

Kizuna Consulting is a modern React-based website for a Japan education consulting service. The project uses React 19, Vite, Tailwind CSS, and Framer Motion for animations.

## Project Setup

### Prerequisites

- Node.js 18.x or 20.x
- npm 9.x or later

### Installation

```bash
# Clone the repository
git clone https://github.com/Hrideshjc/Kizuna.git
cd Kizuna

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally
- `npm run diagnose` - Run build diagnostics (checks for deployment issues)

## Project Structure

```
src/
├── components/          # Reusable components (Navbar, Footer)
├── pages/              # Page components
│   ├── home/           # Home page sections
│   ├── about/          # About page sections
│   └── services/       # Services page sections
├── config/             # Configuration (routing)
├── assets/             # Images and static files
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles

public/
├── favicon.svg
└── other static assets

Configuration files:
- vercel.json          # Vercel deployment config
- vite.config.js       # Vite build configuration
- tailwind.config.js   # Tailwind CSS configuration
- postcss.config.js    # PostCSS configuration
- eslint.config.js     # ESLint rules
```

## Key Technologies

### Frontend

- **React 19.2.6** - UI library
- **React Router 6.30.4** - Client-side routing
- **Vite 8.0.12** - Build tool and dev server
- **Tailwind CSS 3.4.4** - Utility-first CSS framework
- **Framer Motion 12.40.0** - Animation library
- **React Icons 5.6.0** - Icon library

### Build & Development

- **Vite** - Lightning-fast build tool
- **PostCSS** - CSS transformations
- **Autoprefixer** - Vendor prefixes
- **Terser** - JavaScript minification
- **ESLint** - Code quality

## Features

### Pages

- **Home** - Landing page with hero, services, programs, testimonials
- **About** - Company information, team, mission
- **Services** - Detailed service offerings with step-by-step processes

### Components

- Responsive Navbar with mobile menu
- Footer with links and contact info
- Animated sections with Framer Motion
- Responsive grid layouts using Tailwind CSS

### Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Custom xs breakpoint at 375px

## Deployment

### Vercel Deployment

The project is optimized for Vercel deployment with:

- Automatic builds on push to master branch
- Environment-based configuration
- Production optimizations (code splitting, minification)
- 1-year asset caching

#### Quick Deploy

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel automatically deploys

#### Manual Deploy

```bash
npm install -g vercel
vercel
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed troubleshooting.

### Pre-Deployment Checklist

```bash
# Run diagnostics
npm run diagnose

# Or manually check:
npm install          # Ensure dependencies
npm run lint         # Check for errors
npm run build        # Build for production
npm run preview      # Test production build
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- **Code Splitting**: Vendor, animations, and icons are separate chunks
- **Minification**: JavaScript minified with Terser
- **Tree Shaking**: Unused code removed
- **CSS Purging**: Tailwind CSS classes optimized
- **Asset Caching**: Production assets cached for 1 year
- **Lazy Loading**: Images and components loaded on demand

## Development Guidelines

### Code Style

- Use functional components with hooks
- Follow React best practices
- Use Tailwind CSS for styling
- Add animations with Framer Motion

### Creating New Components

```javascript
import React from "react";
import { motion } from "framer-motion";

export default function ComponentName() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* Content */}
    </motion.div>
  );
}
```

### Adding New Routes

Update `src/App.jsx`:

```javascript
<Route path="/new-page" element={<NewPage />} />
```

## Troubleshooting

### Build Issues

```bash
# Clear everything and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Module Not Found

- Check file paths (case-sensitive on Linux/Mac)
- Ensure imports match actual file names
- Run `npm install` if missing dependencies

### CSS Not Applying

- Check Tailwind config includes all component paths
- Verify classes are in safelist if dynamically generated
- Clear Tailwind cache: `rm -rf .next`

### Deployment Failures

See [DEPLOYMENT.md](DEPLOYMENT.md) for comprehensive troubleshooting guide.

## Monitoring

- Build logs: GitHub Actions
- Deployment: https://vercel.com/dashboard
- Performance: Vercel Analytics

## Contributing

1. Create a feature branch
2. Make changes and test locally
3. Run `npm run lint` and fix issues
4. Commit with descriptive messages
5. Push and create pull request

## License

Proprietary - Kizuna Consulting

## Contact

For issues and questions, contact the development team.
