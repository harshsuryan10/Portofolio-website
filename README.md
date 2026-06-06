# Harsh Suryan - Professional Portfolio Website

A modern, fully responsive portfolio website showcasing professional experience, projects, and technical skills. Built with React.js and featuring beautiful animations, interactive components, and a clean, professional design.

**Live Demo:** [https://portofolio-website-harshsuryan10.netlify.app/](https://portofolio-website-harshsuryan10.netlify.app/)

## Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Smooth Animations**: Beautiful fade-in, slide-in, floating, and scaling animations throughout
- **Interactive Components**: Hover effects, smooth transitions, and engaging user interactions
- **Professional Layout**: Clean, modern design with a consistent color scheme
- **Project Showcase**: Display of featured projects with descriptions, technologies, and links
- **Skills Section**: Organized skill categories with technology icons
- **Experience Timeline**: Professional experience with years of experience calculated automatically
- **Education Section**: Educational background and qualifications
- **Contact Form**: Fully functional contact form with email integration (SMTP)
- **Mobile Menu**: Responsive navigation with hamburger menu for mobile devices
- **React Icons**: Professional icon library throughout the application

## Tech Stack

- **Frontend**: React.js (JavaScript)
- **Styling**: Tailwind CSS v4
- **Icons**: react-icons
- **Email Service**: Nodemailer (SMTP)
- **Hosting**: Netlify
- **Build Tool**: Next.js 16

## Installation

### Prerequisites
- Node.js (v18 or higher)
- pnpm (or npm/yarn)

### Setup Instructions

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables**
   
   Create a `.env.local` file in the root directory with the following SMTP credentials:
   
   ```env
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   ```

   **For Gmail Users:**
   - Enable 2-factor authentication on your Google account
   - Generate an [App Password](https://myaccount.google.com/apppasswords)
   - Use the generated password as `SMTP_PASS`

   **For Other Email Providers:**
   - Gmail: `smtp.gmail.com` (Port: 587)
   - Outlook: `smtp-mail.outlook.com` (Port: 587)
   - Yahoo: `smtp.mail.yahoo.com` (Port: 587)
   - Custom: Use your provider's SMTP server details

4. **Run the development server**
   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main portfolio page
│   ├── globals.css         # Global styles and animations
│   └── api/
│       └── send-email/     # Email API endpoint
├── components/
│   └── sections/
│       ├── Header.tsx      # Navigation header
│       ├── Hero.tsx        # Hero section with intro
│       ├── Projects.tsx    # Featured projects
│       ├── Skills.tsx      # Technical skills
│       ├── Experience.tsx  # Work experience & education
│       └── Contact.tsx     # Contact form
├── public/
│   └── images/
│       ├── project-1.png   # Project Management System
│       ├── project-2.png   # Birth Certificate Management
│       └── project-3.png   # Parallax Website
└── README.md              # This file
```

## Sections Overview

### Header
- Sticky navigation with smooth scrolling links
- Mobile-responsive hamburger menu
- Gradient branding logo with initials

### Hero Section
- Dynamic role switching animation
- Tech stack showcase with interactive cards
- Call-to-action buttons
- Technology icons (React, Node.js, TypeScript, MongoDB, Database)

### Projects
- Three featured projects with descriptions
- Project technology tags
- GitHub source code links
- Live demo links (when available)
- Hover animations and image displays

### Skills
- Four skill categories:
  - Frontend (React, HTML5, CSS3, TailwindCSS, JavaScript, TypeScript)
  - Backend (Node.js, Express.js, MongoDB, MySQL, PHP, REST APIs)
  - Languages (JavaScript, Java, C++, Python, PHP, SQL)
  - Tools & Platforms (Git/GitHub, VS Code, Vercel, Netlify, Firebase, Docker)
- Category icons with animations
- Responsive grid layout

### Experience & Education
- Professional experience timeline
- Automatic years of experience calculation
- Company, location, and duration details
- Key achievements and responsibilities
- Education background
- Career progression visualization

### Contact
- Contact information cards (Email, Phone, Location)
- Functional contact form
- SMTP email integration
- Form validation and error handling
- Success/error messages with icons

## Customization

### Update Personal Information

1. **Header** (`components/sections/Header.tsx`)
   - Modify the logo initials and name

2. **Hero** (`components/sections/Hero.tsx`)
   - Edit the roles array
   - Update introduction text
   - Modify call-to-action buttons

3. **Projects** (`components/sections/Projects.tsx`)
   - Add/edit projects array with your projects
   - Update project images in `public/images/`
   - Modify GitHub and demo links

4. **Skills** (`components/sections/Skills.tsx`)
   - Update skill categories and technologies
   - Add or remove skill categories

5. **Experience** (`components/sections/Experience.tsx`)
   - Update experience array with your work history
   - Modify education details
   - Adjust dates for automatic year calculation

6. **Contact** (`components/sections/Contact.tsx`)
   - Update contact information
   - Modify email recipient address in API route

### Color Scheme

All colors are defined in `app/globals.css` using CSS variables. Modify the `:root` section to change the color scheme:

```css
--background: #f9fafb;
--foreground: #0f172a;
--accent: #3b82f6;
--primary: #0f172a;
--secondary: #e0e7ff;
```

## Animations

The portfolio includes smooth animations defined in `app/globals.css`:

- `animate-fadeInUp` - Fade in with upward movement
- `animate-slideInLeft` - Slide in from left
- `animate-slideInRight` - Slide in from right
- `animate-float` - Floating movement
- `animate-glow` - Glowing effect
- `animate-scaleIn` - Scale in effect

## Contact Form Configuration

The contact form uses Nodemailer to send emails via SMTP. The API endpoint is located at `app/api/send-email/route.js`.

**How it works:**
1. User fills out the contact form
2. Form data is sent to the API endpoint
3. Email is sent to your configured email address
4. Success message is displayed to the user

**Email Recipient:**
Update the recipient email in `app/api/send-email/route.js`:
```javascript
to: 'harsh.suryan10@gmail.com', // Change this to your email
```


## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images and assets
- Smooth 60fps animations
- Fast page load times
- Mobile-first responsive design
- CSS animations for better performance than JavaScript animations

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliant

## Dependencies

```json
{
  "dependencies": {
    "react": "^18+",
    "next": "^16+",
    "tailwindcss": "^4+",
    "react-icons": "^5+",
    "nodemailer": "^6+"
  }
}
```

## Troubleshooting

### Contact Form Not Sending Emails

1. Verify SMTP credentials are correct
2. Check if 2FA is enabled (for Gmail, use App Password)
3. Ensure SMTP_HOST and SMTP_PORT are correct
4. Check browser console for error messages
5. Verify environment variables are loaded: `pnpm dev` should show loading message

### Build Errors

1. Delete `node_modules` and `.next` folder
2. Run `pnpm install` again
3. Run `pnpm dev` to verify

### Animation Issues

- Clear browser cache
- Try different browser
- Check if animations are disabled in browser settings

## Future Enhancements

- Blog section
- Project filtering by technology
- Dark mode toggle
- PDF resume download
- Language translation
- Comments on projects
- Analytics integration

## License

This project is open source and available for personal use.

## Contact

**Harsh Suryan**
- Email: harsh.suryan10@gmail.com
- Phone: +91 636-262-8240
- Location: Bangalore, Karnataka, India
- GitHub: [Add your GitHub profile]
- LinkedIn: [Add your LinkedIn profile]

## Support

For issues, questions, or suggestions, please contact via the portfolio contact form or reach out directly via email.

---

**Last Updated:** June 2026
**Version:** 1.0.0
