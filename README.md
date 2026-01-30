<div align="center">
  <h1>🚀 Developer Portfolio</h1>
  <p><strong>A modern, responsive portfolio built with Next.js 15</strong></p>
  
  [![Live Demo](https://img.shields.io/badge/demo-online-success.svg)](https://rajatsharma-portfolio.vercel.app/)
  [![Next.js](https://img.shields.io/badge/Next.js-15.1-black)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.0-blue)](https://reactjs.org/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind-latest-38bdf8)](https://tailwindcss.com/)
  
  <img alt="Portfolio Preview" src="../Portfolio/public/image/portfolio-ss.png" width="800" />
</div>

---

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Built with Next.js 15 and optimized for speed
- 🎭 **Interactive Animations** - Engaging Lottie animations and Framer Motion effects
- 📧 **Contact Form** - Integrated email functionality with reCAPTCHA protection
- 🌓 **Dynamic Sections** - Hero, About, Experience, Skills, Projects, Education, Contact
- 🎯 **SEO Optimized** - Meta tags and Google Tag Manager integration

## 🛠️ Tech Stack

**Framework & Core:**
- [Next.js 15.1](https://nextjs.org/) - React framework with App Router
- [React 19](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [SCSS](https://sass-lang.com/) - Enhanced styling capabilities

**Libraries & Tools:**
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lottie React](https://www.npmjs.com/package/lottie-react) - Lottie animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [React Toastify](https://fkhadra.github.io/react-toastify/) - Toast notifications
- [React Fast Marquee](https://www.npmjs.com/package/react-fast-marquee) - Scrolling animations
- [EmailJS](https://www.emailjs.com/) & [Nodemailer](https://nodemailer.com/) - Email services
- [Google reCAPTCHA](https://www.google.com/recaptcha/about/) - Spam protection

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)
- npm, yarn, or pnpm package manager

Verify your installations:
```bash
node --version
git --version
```

## 🚀 Getting Started

### 1. Fork & Clone the Repository

Click the **Fork** button at the top right of this page, then:

```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 🎨 Customization Guide

### Update Personal Information

Navigate to [`utils/data/personal-data.js`](utils/data/personal-data.js) and update:
```javascript
export const personalData = {
  name: "YOUR NAME",
  designation: "YOUR TITLE",
  description: "YOUR BIO",
  email: "your@email.com",
  // ... other fields
}
```

### Modify Content Sections

All editable content is located in the [`utils/data/`](utils/data/) directory:

| File | Description |
|------|-------------|
| `personal-data.js` | Personal info, contact details, social links |
| `experience.js` | Work experience data |
| `projects-data.js` | Project showcase items |
| `skills.js` | Technical skills & technologies |
| `educations.js` | Education background |

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/              # API routes
│   ├── components/       # React components
│   │   ├── homepage/     # Page sections
│   │   └── helper/       # Utility components
│   ├── css/              # Global styles
│   └── page.js           # Main page
├── utils/
│   └── data/             # Content data files
├── public/               # Static assets
├── docker-compose.yml    # Docker orchestration
└── next.config.js        # Next.js configuration
```

## 🎯 Purpose of This Project

This portfolio website helps:
1. Recruiters quickly understand your skills
2. Developers explore project structure and code style
3. Create a strong personal brand online
4. It is suitable for Frontend Developers, React Developers, and JavaScript Engineers.

This portfolio is designed to:
1. Showcase personal projects and skills
2. Act as an online resume
3. Give recruiters and developers a quick overview of work and capabilities

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available for personal and commercial use.

## 💬 Support

If you find this project helpful, please give it a ⭐ on GitHub!

For questions or issues, feel free to open an issue in the repository.

---

<div align="center">
  Made with ❤️ using Next.js and React
  <br />
  <a href="https://rajatsharma-portfolio.vercel.app/">View Live Demo</a>
</div>

