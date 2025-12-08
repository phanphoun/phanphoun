# Professional Portfolio Website - Customization Guide

## 🎯 Overview

Your portfolio website is now live! This is a modern, responsive single-page application built with React, TypeScript, Vite, and Bootstrap 5. It features a sophisticated dark theme with smooth animations and a professional design.

## 🚀 Quick Start

### Development Server
The dev server is already running at: **http://localhost:5173**

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📝 Customization Guide

### 1. **Hero Section** (`src/components/Hero.tsx`)
Update your name and professional title:
```typescript
<h1 className="hero-title">
  Hi, I'm <span className="accent-text">Your Name</span>
</h1>
<p className="hero-subtitle">Senior Full-Stack Developer</p>
```

Replace the profile image URL:
```typescript
<img
  src="https://images.unsplash.com/photo-YOUR-IMAGE-ID"
  alt="Profile"
  className="profile-image"
/>
```

### 2. **About Section** (`src/components/About.tsx`)
- Update your professional story and background
- Replace the about image URL
- Modify the statistics (projects, clients, years of experience)

### 3. **Skills Section** (`src/components/Skills.tsx`)
Add or remove skills by editing the `skills` array:
```typescript
const skills: Skill[] = [
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  // Add more skills here
]
```

**Icon suggestions:**
- Frontend: ⚛️ 📘 ✨ 🎨 📦 🌊
- Backend: 🟢 ⚡ 🐍 🍃 🐘 🔌
- Tools: 📚 🐳 ☁️ 🔄 📦 ⚡

### 4. **Projects Section** (`src/components/Projects.tsx`)
Update your projects in the `projects` array:
```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description here',
    image: 'https://images.unsplash.com/photo-YOUR-IMAGE-ID',
    technologies: ['React', 'Node.js', 'MongoDB'],
    demoLink: 'https://your-demo-link.com',
    githubLink: 'https://github.com/your-repo',
  },
  // Add more projects
]
```

### 5. **Contact Section** (`src/components/Contact.tsx`)
Update your contact information:
```typescript
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
<p>Your City, Your Country</p>
```

Update social media links:
```typescript
<a href="https://github.com/your-username" className="social-link" title="GitHub">
  🐙
</a>
```

### 6. **Navigation** (`src/components/Navigation.tsx`)
The navigation bar automatically scrolls to sections. Update the brand name if needed:
```typescript
<a className="navbar-brand fw-bold" href="#hero">
  <span className="brand-accent">&lt;</span>Portfolio<span className="brand-accent">/&gt;</span>
</a>
```

## 🎨 Styling & Colors

### Theme Colors
Edit the CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #0d6efd;      /* Blue */
  --primary-dark: #0b5ed7;       /* Dark Blue */
  --accent-color: #00d4ff;       /* Cyan */
  --dark-bg: #0a0e27;            /* Dark Background */
  --card-bg: #1a1f3a;            /* Card Background */
  --text-primary: #ffffff;       /* Primary Text */
  --text-secondary: #b0b8c1;     /* Secondary Text */
  --border-color: #2a3f5f;       /* Border Color */
}
```

### Component-Specific Styling
Each component has its own CSS file:
- `src/components/Navigation.css` - Navbar styling
- `src/components/Hero.css` - Hero section with animations
- `src/components/About.css` - About section
- `src/components/Skills.css` - Skills grid
- `src/components/Projects.css` - Project cards
- `src/components/Contact.css` - Contact form and footer

## 🖼️ Image Recommendations

### Profile Picture
- **Size:** 400x400px or larger
- **Format:** JPG or PNG
- **Style:** Professional headshot
- **Source:** Use Unsplash, Pexels, or your own photo

### Project Images
- **Size:** 500x300px (16:9 aspect ratio)
- **Format:** JPG or PNG
- **Style:** Screenshot or mockup of your project
- **Source:** Screenshots, Figma mockups, or design tools

### About Section Image
- **Size:** 400x400px
- **Format:** JPG or PNG
- **Style:** Professional or casual photo

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

## 🔧 Advanced Customization

### Adding New Sections
1. Create a new component file in `src/components/`
2. Create a corresponding CSS file
3. Import it in `src/App.tsx`
4. Add it to the JSX

Example:
```typescript
// src/components/Blog.tsx
export default function Blog() {
  return (
    <section id="blog" className="blog-section">
      {/* Your content */}
    </section>
  )
}
```

### Form Handling
The contact form currently logs to console. To make it functional:

1. **Using a Backend Service:**
```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const response = await fetch('https://your-api.com/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  // Handle response
}
```

2. **Using a Service (Recommended):**
   - **Formspree:** https://formspree.io/
   - **EmailJS:** https://www.emailjs.com/
   - **Netlify Forms:** https://www.netlify.com/products/forms/

### Adding Animations
The portfolio uses CSS animations. To add more:

```css
@keyframes customAnimation {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.your-element {
  animation: customAnimation 0.6s ease-out;
}
```

## 🚀 Deployment

### Deploy to Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Deploy to Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Vercel auto-detects Vite configuration
4. Deploy!

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
```

Update `vite.config.ts`:
```typescript
export default {
  base: '/your-repo-name/',
  // ... rest of config
}
```

## 📦 Dependencies

- **React 19.2.0** - UI library
- **TypeScript 5.9** - Type safety
- **Vite 7.2.5** - Build tool
- **Bootstrap 5.3.2** - CSS framework

## 🎯 SEO Optimization

Update `index.html` with your information:
```html
<meta name="description" content="Your professional portfolio">
<meta name="keywords" content="developer, portfolio, web development">
<meta name="author" content="Your Name">
<title>Your Name - Portfolio</title>
```

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is in use:
```bash
npm run dev -- --port 3000
```

### Module Not Found Errors
These usually resolve after restarting the dev server:
```bash
npm run dev
```

### Styling Issues
Clear browser cache (Ctrl+Shift+Delete) and hard refresh (Ctrl+Shift+R)

## 📞 Support

For issues with:
- **React:** https://react.dev/
- **Vite:** https://vitejs.dev/
- **Bootstrap:** https://getbootstrap.com/
- **TypeScript:** https://www.typescriptlang.org/

## ✨ Features

✅ Modern dark theme with cyan accent
✅ Smooth scroll navigation
✅ Responsive design (mobile, tablet, desktop)
✅ Animated hero section
✅ Skills showcase with categories
✅ Project gallery with hover effects
✅ Contact form with validation
✅ Social media links
✅ Smooth animations and transitions
✅ Bootstrap 5 integration
✅ TypeScript for type safety
✅ Fast development with Vite

## 🎉 Next Steps

1. **Update your information** - Replace placeholder text with your details
2. **Add your projects** - Update the projects array with your work
3. **Customize colors** - Adjust the theme to match your brand
4. **Replace images** - Add your own photos and project screenshots
5. **Deploy** - Push to production using Netlify or Vercel

Good luck with your portfolio! 🚀
