# miNEURO - Neurosurgery Practice Website

A modern, responsive neurosurgery practice website built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- 🏥 **Medical Expertise**: Brain & spine surgery, robotic procedures, minimally invasive techniques
- 📚 **Patient Resources**: 75+ exercise library, educational materials, multilingual content
- 👨‍⚕️ **GP Resources**: Referral guidelines, clinical pathways, educational materials
- 🌐 **Multilingual**: English and Chinese language support
- ♿ **Accessible**: WCAG 2.1 AA compliant with full keyboard navigation
- 📱 **Responsive**: Optimized for all devices and screen sizes
- ⚡ **Performance**: Fast loading with optimized images and code splitting
- 🔍 **SEO Optimized**: Proper meta tags, sitemap, and structured data

## 🚀 Quick Start

```bash
# Clone and setup
git clone https://github.com/r70pro/neuro.git
cd neuro
npm install

# Start development
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

## 📖 Documentation

Complete documentation is available in the [`docs/`](./docs) folder:

| Document | Description |
|----------|-------------|
| **[Getting Started](./docs/getting-started.md)** | Setup, development workflow, and project overview |
| **[Architecture](./docs/architecture.md)** | Technical architecture, file structure, and tech stack |
| **[Components](./docs/components.md)** | Component library, patterns, and development standards |
| **[Deployment & Contributing](./docs/deployment.md)** | Deployment methods, contributing guidelines, and code standards |
| **[Internationalization & Accessibility](./docs/internationalization.md)** | i18n implementation and accessibility compliance |

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Frontend** | React 18 + TypeScript | Type-safe UI development |
| **Build** | Vite | Fast development and optimized builds |
| **Styling** | Tailwind CSS + shadcn/ui | Modern, accessible components |
| **Routing** | React Router v6 | Client-side routing with i18n |
| **Forms** | React Hook Form + Zod | Type-safe form handling |
| **Icons** | Lucide React | Consistent icon system |

## 📁 Project Structure

```
miNEURO/
├── public/                 # Static assets (200+ optimized images)
│   ├── images/            # Medical images, exercises, locations
│   ├── data/              # JSON data (exercises, conditions)
│   └── pages/             # Markdown content (EN/ZH)
├── src/
│   ├── components/        # Reusable UI components (25+)
│   ├── pages/             # Page components (50+ pages)
│   ├── contexts/          # React contexts (i18n, theme)
│   ├── locales/           # Translation files (EN/ZH)
│   └── lib/               # Utilities and helpers
└── docs/                  # Project documentation (5 files)
```

## 🔧 Available Scripts

```bash
npm run dev              # Start development server
npm run build           # Build for production
npm run preview         # Preview production build
npm run lint            # Run ESLint

# Utility scripts
node scripts/verify-exercise-images.js  # Verify exercise images
node scripts/generate-sitemap.js        # Generate sitemap
```

## 🌟 Key Achievements

- ✅ **100% Exercise Image Coverage**: All 75 exercises have unique demonstration images
- ✅ **Zero Placeholder Dependencies**: No external image dependencies
- ✅ **WCAG 2.1 AA Compliance**: Full accessibility implementation
- ✅ **90+ Lighthouse Scores**: Optimized performance across all metrics
- ✅ **Production Ready**: Deployed and tested across multiple environments

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

See [Deployment & Contributing Guide](./docs/deployment.md) for detailed guidelines.

## 🚀 Deployment

### Quick Deployment
Open [Lovable](https://lovable.dev/projects/96f629c9-6031-4f68-8bd0-680a3c64b6e3) and click **Share** → **Publish**.

### Production Deployment
For custom domains, we recommend **Netlify**. See the [Deployment Guide](./docs/deployment.md) for complete setup instructions.

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

For questions or support, please create an issue in this repository or contact the development team.
