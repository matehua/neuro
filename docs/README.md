# miNEURO Documentation

Welcome to the miNEURO neurosurgery website documentation. This comprehensive guide covers all aspects of the project from setup to deployment.

## 📚 Documentation Structure

### 🚀 Setup & Getting Started
- **[Getting Started Guide](./setup/getting-started.md)** - Complete setup and development guide
- **[Deployment Guide](./setup/deployment.md)** - Deployment and hosting instructions
- **[Lovable Clone Script](./setup/lovable-clone-script.md)** - Platform-specific setup

### 📖 Guides & Tutorials
- **[Development Guidelines](./guides/development-guidelines.md)** - Coding standards and best practices
- **[Internationalization Guide](./guides/internationalization.md)** - Multi-language support implementation

### 📋 Technical Reference
- **[Architecture Overview](./reference/architecture.md)** - Technical architecture and system design
- **[Codebase Structure](./reference/codebase-structure.md)** - Complete file structure and relationships
- **[Component Library](./reference/component-library.md)** - Component reference documentation
- **[Component System](./reference/component-system.md)** - Detailed component documentation
- **[Service Layer](./reference/service-layer.md)** - Hooks, contexts, and utilities documentation
- **[Component Documentation](./reference/component-documentation.md)** - Individual component guides

### 📄 Pages Architecture
- **[Pages Overview](./pages/README.md)** - Complete website page architecture
- **[Main Pages](./pages/main-pages.md)** - Core pages documentation
- **[Expertise Pages](./pages/expertise-pages.md)** - Medical procedure pages
- **[Patient Resources](./pages/patient-resources.md)** - Educational and resource pages
- **[GP Resources](./pages/gp-resources.md)** - Professional resource pages
- **[Location Pages](./pages/location-pages.md)** - Clinic location pages
- **[Utility Pages](./pages/utility-pages.md)** - Support and legal pages
- **[Architecture Overview](./pages/architecture-overview.md)** - Complete navigation flow

### 💡 Examples & Implementation
- **[Homepage Example](./examples/homepage.md)** - Homepage implementation details
- **[About Page Example](./examples/about.md)** - About page documentation
- **[Appointments Example](./examples/appointments.md)** - Appointment booking system
- **[Contact Example](./examples/contact.md)** - Contact page implementation
- **[Expertise Example](./examples/expertise.md)** - Medical expertise pages

## 🏥 Project Overview

The miNEURO website is a modern, production-ready React application built for Dr. Ales Aliashkevich's neurosurgery practice. It features comprehensive patient resources, GP referral tools, and multilingual support.

### ✨ Key Features
- 🌐 **Multilingual Support** (English/Chinese with 1700+ translation keys each)
- 📱 **Responsive Design** (Mobile-first approach with device detection)
- ♿ **Accessibility Compliant** (WCAG 2.1 AA with comprehensive ARIA support)
- 🔍 **SEO Optimized** with structured data and meta tags
- ⚡ **Performance Optimized** (90+ Lighthouse scores, code splitting)
- 🏥 **Medical Content Management** (Exercise library, condition information)
- 🔒 **Production Ready** (Error boundaries, security measures, monitoring)

### 📊 Current Statistics - Updated
- **Total Components**: 200+ files (comprehensive coverage)
- **Page Components**: 67+ pages (fully documented)
- **UI Components**: 30+ shadcn/ui components
- **Translation Keys**: English: 111,815 chars, Chinese: 57,338 chars (100% coverage)
- **Medical Conditions**: 15+ detailed condition pages (all documented)
- **Exercise Library**: 75+ exercises with demonstrations
- **Image Assets**: 200+ optimized images
- **Documentation**: 100% complete coverage

### 🛠️ Technology Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Frontend** | React 18 + TypeScript | Type-safe UI development |
| **Build Tool** | Vite | Fast development and optimized builds |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **Components** | shadcn/ui + Radix UI | Accessible component library |
| **Routing** | React Router v6 | Client-side routing with i18n |
| **State Management** | React Query + Context | Data fetching and global state |
| **Forms** | React Hook Form + Zod | Form handling with validation |
| **Internationalization** | Custom i18n system | English/Chinese support |

### Project Structure Overview
```
miNEURO/
├── src/
│   ├── components/            # 50+ reusable UI components
│   │   ├── ui/               # 25+ shadcn/ui base components
│   │   ├── layout/           # Layout-specific components
│   │   ├── medical-conditions/ # Medical condition components
│   │   └── ...               # Utility and feature components
│   ├── pages/                # 67+ page components
│   │   ├── expertise/        # Medical expertise pages
│   │   ├── patient-resources/ # Patient education
│   │   ├── gp-resources/     # GP referral tools
│   │   └── locations/        # Clinic locations
│   ├── contexts/             # Global state management
│   │   ├── LanguageContext.tsx # Internationalization
│   │   └── DeviceContext.tsx # Device detection
│   ├── hooks/                # Custom React hooks
│   │   ├── useSEO.ts         # SEO metadata management
│   │   └── use-mobile.ts     # Mobile device detection
│   ├── lib/                  # Utility functions and helpers
│   │   ├── utils.ts          # General utilities
│   │   ├── accessibility.ts  # Accessibility helpers
│   │   ├── seo.ts            # SEO functionality
│   │   ├── performance.ts    # Performance monitoring
│   │   └── ...               # Other utilities
│   ├── data/                 # Static data management
│   ├── locales/              # Translation files
│   ├── routes/               # Routing configuration
│   └── types/                # TypeScript type definitions
├── public/                   # Static assets
│   ├── images/               # 200+ optimized images
│   ├── data/                 # JSON data files
│   └── pages/                # Markdown content
├── docs/                     # Comprehensive documentation
└── scripts/                  # Utility scripts
```

## Documentation Structure

### Core Documentation
- **README.md** - This overview document
- **getting-started.md** - Complete setup guide
- **architecture.md** - Technical architecture
- **components.md** - Component library guide
- **internationalization.md** - Multi-language support
- **deployment.md** - Deployment instructions

### Detailed Documentation
- **architecture/** - Detailed architecture documentation
  - `codebase-mapping.md` - Complete file structure mapping
  - `project-structure.md` - Directory organization
- **components/** - Component system documentation
  - `component-system.md` - Detailed component docs
  - `component-documentation.md` - Individual component guides
- **services/** - Service layer documentation
  - `service-layer.md` - Hooks, contexts, and utilities
- **development/** - Development guidelines
  - `guidelines.md` - Coding standards and best practices
- **pages/** - Page-specific documentation
  - Individual page implementation details
- **setup/** - Setup and configuration
  - Platform-specific setup instructions

## 🚀 Quick Start

1. **Setup**: Follow the [Getting Started Guide](./setup/getting-started.md)
2. **Architecture**: Review the [Architecture Overview](./reference/architecture.md)
3. **Components**: Explore the [Component Library](./reference/component-library.md)
4. **Development**: Follow the [Development Guidelines](./guides/development-guidelines.md)
5. **Deployment**: Use the [Deployment Guide](./setup/deployment.md)

## Key Principles

### Development Standards
- **Type Safety**: Full TypeScript implementation with strict mode
- **Accessibility**: WCAG 2.1 AA compliance throughout
- **Performance**: Optimized for Core Web Vitals
- **Maintainability**: Consistent patterns and documentation
- **Internationalization**: Built-in multi-language support

### Code Quality
- **Zero TypeScript errors**: Strict type checking enabled
- **ESLint compliance**: React and TypeScript rules enforced
- **Component standards**: Consistent structure and patterns
- **Error handling**: Comprehensive error boundaries
- **Testing**: Component and integration testing

### Production Readiness
- **Build optimization**: Code splitting and tree shaking
- **Security measures**: Input validation and XSS protection
- **Performance monitoring**: Web Vitals tracking
- **Error logging**: Comprehensive error reporting
- **SEO optimization**: Meta tags and structured data

## 🤝 Contributing

When contributing to the project:

1. Follow the [Development Guidelines](./guides/development-guidelines.md)
2. Ensure all TypeScript checks pass
3. Maintain accessibility standards
4. Update documentation as needed
5. Test thoroughly before submitting

## 🆘 Support

For questions or issues:

1. Check the relevant documentation section
2. Review the [Getting Started Guide](./setup/getting-started.md)
3. Consult the [Architecture Overview](./reference/architecture.md)
4. Refer to the [Component Library](./reference/component-library.md)

## 🗂️ Documentation Organization

The documentation is organized into four logical categories:

### 🚀 **Setup** (`/setup/`)
Everything you need to get started with the project:
- Initial setup and installation
- Development environment configuration
- Deployment procedures

### 📖 **Guides** (`/guides/`)
Step-by-step tutorials and best practices:
- Development guidelines and coding standards
- Implementation guides for specific features
- Best practices and patterns

### 📋 **Reference** (`/reference/`)
Technical reference documentation:
- Architecture and system design
- Complete API and component documentation
- Detailed technical specifications

### 📄 **Pages** (`/pages/`)
Complete website page architecture:
- All pages and sub-pages documentation
- Content structure and navigation flow
- User journey and page relationships

### 💡 **Examples** (`/examples/`)
Real-world implementation examples:
- Page implementation details
- Code examples and patterns
- Use case demonstrations

This documentation provides comprehensive coverage of the miNEURO codebase, ensuring developers can effectively understand, maintain, and extend the application.
