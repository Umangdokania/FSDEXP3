# Umang Dokania - AI/ML Engineer Portfolio

A stunning, production-ready personal portfolio website with a solar system theme, featuring your complete professional profile, projects, skills, and certifications.

## Features

- **Interactive Solar System Navigation**: The sun represents you (the user) at the center, with planets orbiting around it representing different sections
- **Smooth Animations**: Cinematic planet orbits with hover effects
- **Fully Responsive**: Works beautifully on desktop and mobile devices
- **Premium Design**: Dark space theme with twinkling stars and glassmorphic content cards
- **Clean Code**: Organized folder structure with reusable components

## Tech Stack

- React 19
- Vite 7
- React Router DOM 7
- Pure CSS (no external CSS libraries)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the application.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Add Your Profile Photo

1. Take or choose a professional photo (square format recommended, 500x500px or larger)
2. Save it as `profile.jpg`
3. Place it in the `/src/assets/` folder
4. The website will automatically use your photo

**Note**: A placeholder is currently used if no photo is found.

### Update Additional Information

All your information from your resume has been integrated:
- **Name**: Umang Dokania
- **Title**: AI/ML Engineer
- **Projects**: Emotional Sync, Dual-Axis Solar Tracking, OAuth, etc.
- **Skills**: Python, C++, Java, Machine Learning, TensorFlow, etc.
- **Certifications**: Duke, Google, IBM, Microsoft
- **Contact**: Email, Phone, LinkedIn, Location

You can further customize any page by editing the files in `/src/pages/`

## Project Structure

```
src/
├── assets/          # Images and static files
├── components/      # Reusable components
│   ├── SolarSystem.jsx
│   ├── Planet.jsx
│   └── SpaceBackground.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── Profile.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── App.jsx          # Main app component
├── main.jsx         # Application entry point
└── index.css        # Global styles
```

## Deployment

This project is ready for deployment to:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
