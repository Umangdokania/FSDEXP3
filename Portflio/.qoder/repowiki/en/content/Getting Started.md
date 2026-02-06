# Getting Started

<cite>
**Referenced Files in This Document**
- [package.json](file://package.json)
- [vite.config.js](file://vite.config.js)
- [README.md](file://README.md)
- [index.html](file://index.html)
- [src/main.jsx](file://src/main.jsx)
- [src/App.jsx](file://src/App.jsx)
- [src/components/SolarSystem.jsx](file://src/components/SolarSystem.jsx)
- [src/components/SolarSystem.css](file://src/components/SolarSystem.css)
- [src/index.css](file://src/index.css)
- [vercel.json](file://vercel.json)
</cite>

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Development Workflow](#development-workflow)
5. [Build and Preview](#build-and-preview)
6. [Customization](#customization)
7. [Deployment Options](#deployment-options)
8. [Troubleshooting](#troubleshooting)
9. [Browser Compatibility](#browser-compatibility)
10. [Project Structure Overview](#project-structure-overview)

## Introduction
Welcome to the Solar System Portfolio! This is a modern, interactive personal portfolio website built with React, Vite, and React Router. The application features an innovative solar system navigation system where the sun represents you (the user) at the center, with planets orbiting around it representing different sections of your professional portfolio.

The portfolio showcases smooth animations, responsive design, and a dark space-themed aesthetic with twinkling stars and glassmorphic content cards. It's designed to be both visually impressive and technically robust, ready for development and production deployment.

## Prerequisites
Before you begin working with the Solar System Portfolio, ensure you have the following prerequisites installed on your development machine:

### Node.js Requirements
- **Minimum Version**: Node.js 16.0.0 or higher
- **Recommended**: Latest LTS (Long Term Support) version
- **Verification Command**: `node --version`

### Package Manager
- **npm**: Version 8.0.0 or higher (comes bundled with Node.js)
- **Verification Command**: `npm --version`

### Development Environment Setup
1. **Text Editor**: VS Code, WebStorm, or any modern IDE
2. **Git**: For version control and deployment (optional)
3. **Browser**: Latest versions of Chrome, Firefox, Safari, or Edge
4. **Optional**: Vercel CLI for local preview (if using Vercel deployment)

### Hardware Requirements
- **Minimum RAM**: 4GB (8GB recommended)
- **Storage**: At least 500MB free disk space
- **Network**: Stable internet connection for dependency downloads

**Section sources**
- [README.md](file://README.md#L98-L103)
- [package.json](file://package.json#L15-L21)

## Installation
Follow these step-by-step instructions to set up the Solar System Portfolio locally:

### Step 1: Clone or Download the Repository
First, obtain the project files from your source. If using Git:
```bash
git clone [repository-url]
cd solar-system-portfolio
```

### Step 2: Install Dependencies
Navigate to the project directory and install all required dependencies:
```bash
npm install
```

**Expected Output**: The command will download and install all packages listed in the dependencies section of package.json, including React, Vite, React Router DOM, and the React plugin for Vite.

### Step 3: Verify Installation
Check that all dependencies were installed correctly:
```bash
npm list
```

You should see the following key packages in your dependency tree:
- react@^19.2.4
- react-dom@^19.2.4
- react-router-dom@^7.13.0
- vite@^7.3.1
- @vitejs/plugin-react@^5.1.3

**Section sources**
- [README.md](file://README.md#L22-L26)
- [package.json](file://package.json#L15-L21)

## Development Workflow
The Solar System Portfolio uses Vite as its development server, providing fast hot module replacement and optimized development experience.

### Starting the Development Server
To launch the development server with hot reloading:
```bash
npm run dev
```

**Expected Output**: The terminal will display something similar to:
```
VITE v7.3.1  ready in 450 ms

  ➜  Local:   http://localhost:5173
  ➜  Network: http://192.168.1.100:5173
  ➜  press h + enter to show help
```

### Accessing the Application
Once the development server is running:
1. Open your browser and navigate to `http://localhost:5173`
2. You should see the Solar System Portfolio interface with the animated sun and orbiting planets
3. Click on any planet to navigate to that section of your portfolio

### Hot Reloading Capabilities
The development server provides instant hot reloading:
- Changes to React components automatically update in the browser
- CSS modifications are applied without page refresh
- JavaScript changes trigger immediate updates
- No manual refresh required during development

### Development Server Features
- **Fast Startup**: Optimized build process for quick development cycles
- **Error Reporting**: Clear error messages in the browser console
- **Source Maps**: Debugging support for original source files
- **Environment Variables**: Support for `.env` files (if needed)

**Section sources**
- [README.md](file://README.md#L28-L34)
- [package.json](file://package.json#L6-L10)

## Build and Preview
The Solar System Portfolio supports both development and production builds with optimized configurations.

### Production Build Process
To create a production-ready build:
```bash
npm run build
```

**Expected Output**: The build process will:
1. Compile all React components
2. Bundle and minify JavaScript files
3. Optimize CSS delivery
4. Generate static assets in the `dist` directory
5. Create a production-optimized bundle

### Previewing the Production Build
To test the production build locally:
```bash
npm run preview
```

**Expected Output**: Similar to the development server, but optimized for production:
```
  ➜  Local:   http://localhost:4173
  ➜  press h + enter to show help
```

### Build Optimization Features
The production build includes several optimizations:
- **Code Splitting**: Automatic splitting of vendor and application code
- **Tree Shaking**: Removal of unused code
- **Minification**: Compression of JavaScript and CSS
- **Asset Optimization**: Image compression and optimization
- **Bundle Analysis**: Insight into bundle composition

### Build Directory Structure
After running `npm run build`, the following structure is generated:
```
dist/
├── assets/
├── index.html
├── main.[hash].js
└── main.[hash].css
```

**Section sources**
- [README.md](file://README.md#L36-L46)
- [package.json](file://package.json#L6-L10)

## Customization
The Solar System Portfolio is designed for easy customization. Here are the key areas you can modify:

### Personal Information Updates
Update your information in the following locations:

1. **Name and Title**: Edit `/src/components/SolarSystem.jsx` (lines 29-32)
   - Modify the user name displayed on the sun
   - Update your professional title

2. **Profile Page**: Edit `/src/pages/Profile.jsx`
   - Replace placeholder content with your biography
   - Update professional summary

3. **Skills Section**: Edit `/src/pages/Skills.jsx`
   - Add or remove skill categories
   - Update skill proficiency indicators

4. **Projects Showcase**: Edit `/src/pages/Projects.jsx`
   - Add new projects to the portfolio
   - Update project descriptions and links

5. **Contact Information**: Edit `/src/pages/Contact.jsx`
   - Update contact methods
   - Modify contact form fields

### Adding Your Profile Photo
To add your own profile photo:
1. Place your image file in `/src/assets/profile.jpg`
2. The application includes a fallback SVG placeholder if no photo is provided
3. Supported formats: JPG, PNG, WebP
4. Recommended size: 200x200 pixels or larger

### Customizing Planet Colors
Modify the orbital colors in `/src/components/SolarSystem.jsx` (lines 4-11):
- Change the color values for each planet
- Update orbit radius and duration for visual effects
- Adjust the orbit timing for different animation speeds

### Global Styling
The application uses a cohesive color scheme and typography:
- **Primary Color**: Blue gradient (#60A5FA) for the Home planet
- **Secondary Colors**: Various accent colors for different sections
- **Typography**: Inter font family with system fallbacks
- **Dark Theme**: Space-inspired color palette with deep blues and purples

**Section sources**
- [README.md](file://README.md#L48-L68)
- [src/components/SolarSystem.jsx](file://src/components/SolarSystem.jsx#L4-L11)
- [src/components/SolarSystem.jsx](file://src/components/SolarSystem.jsx#L29-L32)

## Deployment Options
The Solar System Portfolio is configured for multiple deployment platforms with automated build processes.

### Vercel Deployment
The project includes Vercel-specific configuration for seamless deployment:

1. **Automatic Deployment**: Push to GitHub triggers automatic Vercel deployment
2. **Build Configuration**: Uses `npm run build` command
3. **Output Directory**: Serves from the `dist` folder
4. **Preview Environments**: Automatic preview deployments for pull requests

**Vercel Configuration Details**:
- Build command: `npm run build`
- Output directory: `dist`
- Development command: `npm run dev`
- Install command: `npm install`

### Netlify Deployment
For Netlify hosting:
1. Drag and drop the `dist` folder generated by `npm run build`
2. Configure build settings in Netlify dashboard
3. Set publish directory to the `dist` folder
4. Enable automatic HTTPS and CDN optimization

### GitHub Pages Deployment
Deploy to GitHub Pages using the `gh-pages` package:
1. Install gh-pages: `npm install gh-pages --save-dev`
2. Add homepage field to package.json: `"homepage": "https://[username].github.io/[repo-name]"`
3. Add predeploy and deploy scripts to package.json
4. Run: `npm run deploy`

### Manual Deployment Steps
For custom hosting solutions:
1. Run `npm run build` to generate production files
2. Upload the contents of the `dist` folder to your web server
3. Ensure your server supports client-side routing
4. Configure proper MIME types for static assets

**Section sources**
- [README.md](file://README.md#L90-L96)
- [vercel.json](file://vercel.json#L1-L7)

## Troubleshooting
Common issues and their solutions when working with the Solar System Portfolio:

### Port Already in Use
**Problem**: Development server fails to start on port 5173
**Solution**:
```bash
# Kill processes using port 5173
lsof -ti:5173 | xargs kill -9
# Or change to a different port
npx vite --port 5174
```

### Dependency Installation Issues
**Problem**: npm install fails with errors
**Solution**:
```bash
# Clear npm cache
npm cache clean --force
# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Hot Reload Not Working
**Problem**: Changes don't reflect in the browser
**Solution**:
1. Check browser console for JavaScript errors
2. Verify file paths are correct
3. Restart development server: `npm run dev`
4. Clear browser cache and hard reload (Ctrl+F5)

### Build Failures
**Problem**: `npm run build` fails with compilation errors
**Solution**:
1. Check for syntax errors in React components
2. Verify all imports are correct
3. Ensure CSS files are properly formatted
4. Run: `npm run build -- --mode production`

### CSS Styling Issues
**Problem**: Components appear unstyled or misaligned
**Solution**:
1. Verify CSS files are importing correctly
2. Check for conflicting styles in global CSS
3. Ensure proper CSS class names match component selectors
4. Review media queries for responsive breakpoints

### Browser Compatibility Issues
**Problem**: Application doesn't work in older browsers
**Solution**:
1. Update to supported browser versions
2. Check for modern JavaScript features not supported
3. Consider adding polyfills if targeting legacy browsers

### Memory Issues During Development
**Problem**: Development server crashes with memory errors
**Solution**:
1. Increase Node.js memory limit: `NODE_OPTIONS=--max_old_space_size=4096 npm run dev`
2. Close other resource-intensive applications
3. Restart development server with fresh memory

### Asset Loading Problems
**Problem**: Images or assets not loading in production
**Solution**:
1. Verify asset paths are correct and relative
2. Check file permissions and existence
3. Ensure assets are included in the build process
4. Test with absolute paths during development

**Section sources**
- [README.md](file://README.md#L98-L103)

## Browser Compatibility
The Solar System Portfolio is designed to work across modern browsers with excellent performance and visual fidelity.

### Supported Browsers
- **Chrome**: Latest version (recommended)
- **Firefox**: Latest version (recommended)
- **Safari**: Latest version (recommended)
- **Edge**: Latest version (recommended)

### Minimum Requirements
- **Chrome**: Version 90+
- **Firefox**: Version 88+
- **Safari**: Version 14+
- **Edge**: Version 90+

### Browser-Specific Features
The application leverages modern web technologies:
- **CSS Grid and Flexbox**: For responsive layouts
- **CSS Animations**: For smooth orbital effects
- **CSS Variables**: For dynamic theming
- **Modern JavaScript**: ES6+ features with transpilation
- **Service Workers**: For offline capabilities (if enabled)

### Known Limitations
- **Internet Explorer**: Not supported (legacy browser)
- **Older Mobile Browsers**: May have reduced animation performance
- **Low-End Devices**: Some complex animations may be simplified

### Testing Across Browsers
To ensure compatibility:
1. Test on all major browsers before deployment
2. Verify responsive behavior on various screen sizes
3. Check animation performance on different devices
4. Validate accessibility features across browsers

**Section sources**
- [README.md](file://README.md#L98-L103)

## Project Structure Overview
Understanding the project structure helps you navigate and customize the Solar System Portfolio effectively.

### Root Directory Files
- **package.json**: Project metadata and dependency management
- **vite.config.js**: Vite build configuration and plugin setup
- **index.html**: HTML template with React entry point
- **vercel.json**: Vercel deployment configuration
- **README.md**: Project documentation and setup guide

### Source Code Organization
The `src/` directory follows a logical separation of concerns:

#### Assets (`src/assets/`)
- Static images and media files
- Profile photos and background assets
- Fallback placeholders and icons

#### Components (`src/components/`)
Reusable UI building blocks:
- **SolarSystem.jsx**: Main navigation system with orbital mechanics
- **Planet.jsx**: Individual planet components with interactive behavior
- **SpaceBackground.jsx**: Starry background with twinkling effects
- **SolarSystem.css**: Styling for the navigation system
- **Planet.css**: Individual planet styling
- **SpaceBackground.css**: Background star effects

#### Pages (`src/pages/`)
Content sections of the portfolio:
- **Home.jsx**: Hero section and welcome message
- **Profile.jsx**: Personal biography and introduction
- **Skills.jsx**: Technical skills and expertise showcase
- **Projects.jsx**: Portfolio projects and achievements
- **Contact.jsx**: Contact information and form

#### Application Entry Points
- **main.jsx**: React application bootstrap and routing setup
- **App.jsx**: Main application container with routing configuration
- **index.css**: Global styles and base CSS reset

### Build and Configuration
- **vite.config.js**: React plugin configuration and development settings
- **package.json**: Scripts for development, build, and preview
- **vercel.json**: Platform-specific deployment configuration

This structure promotes maintainability, scalability, and easy customization while following React best practices and modern development workflows.