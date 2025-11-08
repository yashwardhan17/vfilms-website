# Deployment Guide

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: V Films website"
   git branch -M main
   git remote add origin https://github.com/yourusername/vfilms-website.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
# Your site will be deployed automatically
```

## 🌐 Deploy to Netlify

### Via Netlify Dashboard

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18.x or higher

2. **Deploy**
   - Drag and drop the `.next` folder
   - Or connect your Git repository
   - Site will be live automatically

### Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

## 📋 Pre-Deployment Checklist

- [ ] All dependencies installed
- [ ] Build completes without errors (`npm run build`)
- [ ] Contact form tested with API
- [ ] Responsive design verified on all devices
- [ ] All links working correctly
- [ ] No console errors
- [ ] Environment variables configured (if any)

## 🔧 Environment Variables

Currently, this project doesn't require environment variables as the API endpoint is public. However, if you need to add them:

**For Vercel:**
1. Go to Project Settings
2. Navigate to Environment Variables
3. Add your variables
4. Redeploy

**For Netlify:**
1. Go to Site Settings
2. Build & Deploy → Environment
3. Add your variables
4. Trigger a new deploy

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### CSS Not Loading
- Ensure `globals.css` is imported in `layout.js`
- Check file paths are correct
- Clear browser cache

### API Not Working
- Verify network connection
- Check API endpoint URL
- Inspect browser console for errors
- Test API with Postman/cURL first

## 📊 Performance Optimization

The site is already optimized with:
- Next.js automatic code splitting
- CSS minification
- Image optimization (when using Next.js Image)
- Server-side rendering

## 🔒 Security Notes

- API endpoint is public (as per requirements)
- No sensitive data stored client-side
- HTTPS enforced on production
- CORS handled by backend

## 📱 Testing After Deployment

1. **Functionality Test**
   - Submit contact form
   - Verify success message
   - Test validation errors
   - Check mobile menu

2. **Responsive Test**
   - Open on mobile device
   - Test on tablet
   - Verify desktop layout
   - Test different browsers

3. **Performance Test**
   - Run Lighthouse audit
   - Check loading speed
   - Verify Core Web Vitals

## 🎉 Post-Deployment

After successful deployment:
1. Share the live URL
2. Test all features
3. Monitor analytics (if configured)
4. Gather feedback

## 📞 Support

If you encounter any issues:
- Check the README.md
- Review Next.js documentation
- Check Vercel/Netlify docs
- Contact support

---

Your V Films website will be live and accessible worldwide! 🌍
