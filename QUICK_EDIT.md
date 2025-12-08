# Quick Edit Reference

## 🎯 Most Important Files to Customize

### 1. Hero Section - `src/components/Hero.tsx` (Lines 14-17)
```typescript
<h1 className="hero-title">
  Hi, I'm <span className="accent-text">YOUR NAME HERE</span>
</h1>
<p className="hero-subtitle">YOUR TITLE HERE</p>
```

### 2. Hero Description - `src/components/Hero.tsx` (Lines 18-22)
```typescript
<p className="hero-description">
  YOUR PROFESSIONAL SUMMARY HERE
</p>
```

### 3. Profile Image - `src/components/Hero.tsx` (Line 38)
```typescript
src="YOUR_IMAGE_URL_HERE"
```

### 4. About Section - `src/components/About.tsx` (Lines 18-30)
Replace the three paragraphs with your story

### 5. About Image - `src/components/About.tsx` (Line 14)
```typescript
src="YOUR_ABOUT_IMAGE_URL"
```

### 6. About Stats - `src/components/About.tsx` (Lines 32-45)
```typescript
<h3 className="stat-number">50+</h3>  // Change number
<p className="stat-label">Projects Completed</p>  // Change label
```

### 7. Skills - `src/components/Skills.tsx` (Lines 13-30)
Edit the skills array:
```typescript
{ name: 'Your Skill', icon: '🎯', category: 'Frontend' },
```

### 8. Projects - `src/components/Projects.tsx` (Lines 17-78)
Edit each project object:
```typescript
{
  id: 1,
  title: 'Your Project Name',
  description: 'Your project description',
  image: 'YOUR_PROJECT_IMAGE_URL',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  demoLink: 'https://your-demo-url.com',
  githubLink: 'https://github.com/your-repo',
}
```

### 9. Contact Info - `src/components/Contact.tsx` (Lines 47-62)
```typescript
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
<p>Your City, Your Country</p>
```

### 10. Social Links - `src/components/Contact.tsx` (Lines 65-80)
```typescript
<a href="https://github.com/your-username" className="social-link">🐙</a>
<a href="https://linkedin.com/in/your-profile" className="social-link">💼</a>
```

### 11. Footer - `src/components/Contact.tsx` (Line 142)
```typescript
<p>&copy; 2024 Your Name. All rights reserved.</p>
<p className="footer-credit">Designed & Built with ❤️ by Your Name</p>
```

## 🎨 Theme Colors

Edit `src/App.css` (Lines 7-15):
```css
:root {
  --primary-color: #0d6efd;      /* Main blue */
  --primary-dark: #0b5ed7;       /* Darker blue */
  --accent-color: #00d4ff;       /* Cyan accent */
  --dark-bg: #0a0e27;            /* Dark background */
  --card-bg: #1a1f3a;            /* Card background */
  --text-primary: #ffffff;       /* Main text */
  --text-secondary: #b0b8c1;     /* Secondary text */
  --border-color: #2a3f5f;       /* Borders */
}
```

## 📸 Image URLs

Use free stock photos from:
- **Unsplash:** https://unsplash.com/
- **Pexels:** https://www.pexels.com/
- **Pixabay:** https://pixabay.com/

Example URL format:
```
https://images.unsplash.com/photo-1234567890?w=500&h=300&fit=crop
```

## 🔄 Development Workflow

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Make changes** to any component file

3. **See live updates** in browser (auto-refresh)

4. **When done, build:**
   ```bash
   npm run build
   ```

## 📋 Checklist

- [ ] Update your name in Hero section
- [ ] Update your title/subtitle
- [ ] Replace profile image
- [ ] Update About section text
- [ ] Replace about image
- [ ] Update skills list
- [ ] Add your projects (at least 3)
- [ ] Update contact email
- [ ] Update contact phone
- [ ] Update social media links
- [ ] Update footer with your name
- [ ] Test on mobile (responsive)
- [ ] Deploy to Netlify/Vercel

## 🚀 Deploy Commands

**Netlify:**
```bash
npm run build
# Then drag & drop the 'dist' folder to Netlify
```

**Vercel:**
```bash
npm install -g vercel
vercel
```

## 💡 Tips

- Keep descriptions concise and impactful
- Use high-quality images
- Ensure all links work (test before deploying)
- Test on mobile devices
- Keep color scheme consistent
- Update regularly with new projects

---

**Need help?** Check `PORTFOLIO_GUIDE.md` for detailed instructions!
