# Project Structure

This document provides a detailed overview of the miNEURO website project structure, explaining the purpose and organization of each directory and key files.

## Root Directory

```
neuro/
├── public/            # Static assets and content files
├── src/               # Source code
├── docs/              # Project documentation
├── index.html         # HTML entry point
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
└── README.md          # Project overview
```

## Public Directory

The `public/` directory contains static assets that are served directly without processing by the build system.

```
public/
├── images/            # Image assets for the website
│   ├── conditions/    # Images related to medical conditions
│   ├── gp-resources/  # Images for GP resources section
│   └── ...            # Other image categories
├── logo/              # Logo files in various formats
└── pages/             # Markdown content for pages
    ├── brain-spine-image-guided-surgery/
    ├── robotic-spine-surgery/
    └── ...            # Other content directories
```

### Content Organization

The `public/pages/` directory contains Markdown files that provide content for various pages on the website. Each subdirectory typically corresponds to a specific page or section and may include:

- `index.md`: Main content for the page
- `index.zh.md`: Chinese translation of the content (when available)
- Additional assets specific to that page

## Source Directory

The `src/` directory contains all the application source code.

```
src/
├── components/        # Reusable UI components
├── contexts/          # React context providers
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and helpers
├── locales/           # Internationalization files
├── pages/             # Page components
├── routes/            # Routing configuration
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global CSS styles
```

### Components

The `src/components/` directory contains reusable UI components organized by functionality:

```
components/
├── ui/                # Basic UI components (buttons, inputs, etc.)
├── Layout.tsx         # Main layout wrapper
├── Navbar.tsx         # Navigation bar component
├── Footer.tsx         # Footer component
├── SafeImage.tsx      # Image component with fallback handling
├── LanguageSelector.tsx # Language selection component
└── ...                # Other components
```

For more details on components, see the [Components Overview](./components/overview.md).

### Contexts

The `src/contexts/` directory contains React context providers that manage global state:

```
contexts/
├── LanguageContext.tsx # Internationalization context
└── ...                 # Other context providers
```

### Hooks

The `src/hooks/` directory contains custom React hooks for reusable logic:

```
hooks/
└── ...                 # Custom hooks
```

### Library

The `src/lib/` directory contains utility functions and helpers:

```
lib/
├── accessibility.ts    # Accessibility utilities
└── ...                 # Other utility files
```

### Locales

The `src/locales/` directory contains internationalization files:

```
locales/
├── en.ts              # English translations
├── zh.ts              # Chinese translations
└── ...                # Other language files
```

### Pages

The `src/pages/` directory contains components for each page of the website:

```
pages/
├── expertise/         # Expertise pages
│   ├── ImageGuidedSurgery.tsx
│   ├── RoboticSpineSurgery.tsx
│   └── ...            # Other expertise pages
├── patient-resources/ # Patient resources pages
├── gp-resources/      # GP resources pages
├── locations/         # Location pages
├── Index.tsx          # Home page
├── Expertise.tsx      # Expertise overview page
├── Faq.tsx            # FAQ page
└── ...                # Other pages
```

### Routes

The `src/routes/` directory contains routing configuration:

```
routes/
├── routeConfig.tsx    # Route definitions
└── ...                # Other routing files
```

## Documentation Directory

The `docs/` directory contains project documentation:

```
docs/
├── components/        # Documentation for components
├── pages/             # Documentation for pages
├── getting-started.md # Getting started guide
├── project-structure.md # This file
├── accessibility.md   # Accessibility guidelines
├── internationalization.md # Internationalization guide
└── ...                # Other documentation files
```

## Configuration Files

- `index.html`: The HTML entry point for the application
- `package.json`: Defines project dependencies and scripts
- `tsconfig.json`: TypeScript configuration
- `vite.config.ts`: Vite build tool configuration
- `tailwind.config.js`: Tailwind CSS configuration

## Build Output

When the project is built, the output is generated in the `dist/` directory, which mirrors the structure of the `public/` directory with the addition of processed assets from the `src/` directory.
