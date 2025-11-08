# V Films - Responsive Website

A modern, responsive single-page web application built with Next.js 14, featuring a stunning homepage and functional contact form with API integration.

## 🎨 Design Features

- **Premium Aesthetic**: Cream background with orange accents matching V Films brand identity
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Subtle transitions and hover effects for enhanced UX
- **Custom Mandala Logo**: Animated decorative pattern element
- **Modern Navigation**: Sticky header with mobile hamburger menu

## 🚀 Tech Stack

- **Framework**: Next.js 14.2.5 (React 18.3.1)
- **Styling**: Custom CSS with CSS Variables
- **API Integration**: Fetch API for form submission
- **Deployment Ready**: Optimized for Vercel/Netlify

## 📋 Features Implemented

### ✅ Core Requirements
- [x] Single-page responsive application
- [x] Recreated Figma design with creative enhancements
- [x] Fully functional contact form
- [x] API integration with validation
- [x] Form validation (empty fields, email format)
- [x] Success message display
- [x] Responsive across all screen sizes
- [x] Clean, modular code structure

### ✨ Additional Features
- Mobile-optimized hamburger menu
- Form field error messages
- Loading state during submission
- Auto-clearing success messages
- Smooth scroll animations
- Hover effects and transitions
- Decorative mandala patterns
- Premium color scheme

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Local Development

1. **Extract and Navigate**
```bash
cd vfilms-website
```

2. **Install Dependencies**
```bash
npm install
# or
yarn install
```

3. **Run Development Server**
```bash
npm run dev
# or
yarn dev
```

4. **Open Browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository to Vercel
3. Deploy automatically

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy

## 📝 API Documentation

### Contact Form Endpoint
- **URL**: `https://vernanbackend.ezlab.in/api/contact-us/`
- **Method**: POST
- **Content-Type**: application/json

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "message": "Your message here"
}
```

**Success Response (200):**
```json
{
  "id": 49,
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "message": "Your message here",
  "created_at": "2025-10-10T05:27:59.371578Z",
  "updated_at": "2025-10-10T05:27:59.371598Z"
}
```

## 🎯 Form Validation Rules

- **Name**: Required, cannot be empty
- **Email**: Required, must be valid email format
- **Phone**: Required, cannot be empty
- **Message**: Required, cannot be empty

All validation happens on the frontend before API submission.

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎨 Color Scheme

```css
--cream: #FAF7F2 (Background)
--orange: #FF6B4A (Primary/CTA)
--dark: #1a1a1a (Text)
--mandala-orange: #FF8B6B (Decorative)
```

## 📂 Project Structure

```
vfilms-website/
├── app/
│   ├── page.js          # Main homepage component
│   ├── layout.js        # Root layout with metadata
│   └── globals.css      # Global styles
├── public/              # Static assets
├── package.json         # Dependencies
├── next.config.js       # Next.js configuration
└── README.md           # Documentation
```

## 🔧 Component Features

### Navigation
- Sticky header
- Mobile responsive hamburger menu
- Smooth scroll navigation
- CTA button with hover effects

### Hero Section
- Animated mandala logo
- Responsive typography
- Brand storytelling content
- Grid-based layout

### Contact Section
- Form with real-time validation
- Success/error message display
- Loading states
- API integration
- Decorative patterns
- Contact information display

## 🚦 Testing Checklist

- [x] Form submission with valid data
- [x] Empty form validation
- [x] Email format validation
- [x] Success message display
- [x] Error handling
- [x] Mobile responsiveness
- [x] Tablet responsiveness
- [x] Desktop layout
- [x] Cross-browser compatibility
- [x] Loading states

## 🎓 Learning Highlights

This project demonstrates:
- Modern React/Next.js development
- Responsive design principles
- API integration and error handling
- Form validation techniques
- CSS animations and transitions
- Mobile-first approach
- Clean code organization

## 📧 Contact

For questions about this project:
- Email: vernita@varnanfilms.co.in
- Phone: +91 98736 84567

## 📄 License

This project is created as a technical assessment for V Films.

---

Built with ❤️ using Next.js 14
