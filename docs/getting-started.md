# Getting Started with miNEURO Website

This guide will help you set up the miNEURO website project for local development and understand the basic workflow.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) (v7 or later)
- Git

## Installation

1. Clone the repository:

```bash
git clone https://github.com/r70pro/neuro.git
cd neuro
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The website should now be running at [http://localhost:5173](http://localhost:5173).

## Project Structure

The project follows a standard React application structure with some specific organization:

```
neuro/
├── public/            # Static assets and content files
│   ├── images/        # Image assets
│   ├── logo/          # Logo files
│   └── pages/         # Markdown content for pages
├── src/               # Source code
│   ├── components/    # Reusable UI components
│   ├── contexts/      # React context providers
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions and helpers
│   ├── locales/       # Internationalization files
│   ├── pages/         # Page components
│   └── routes/        # Routing configuration
├── docs/              # Project documentation
└── package.json       # Project dependencies and scripts
```

For more detailed information about each directory, see [Project Structure](./project-structure.md).

## Key Technologies

This project uses:

- **React**: UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool and development server
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component library built on Radix UI
- **React Query**: Data fetching and state management
- **Zod**: Schema validation

## Development Workflow

1. **Create a new branch** for your feature or bugfix:

```bash
git checkout -b feature/your-feature-name
```

2. **Make your changes** to the codebase.

3. **Test your changes** locally:

```bash
npm run dev
```

4. **Build the project** to ensure it compiles correctly:

```bash
npm run build
```

5. **Commit your changes** with a descriptive message:

```bash
git add .
git commit -m "Add feature: description of your changes"
```

6. **Push your branch** to the remote repository:

```bash
git push origin feature/your-feature-name
```

7. **Create a pull request** on GitHub for review.

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint to check for code issues

## Next Steps

- Learn about the [Project Structure](./project-structure.md)
- Explore the [Component Library](./components/overview.md)
- Understand the [Internationalization System](./internationalization.md)
- Review the [Accessibility Guidelines](./accessibility.md)

If you encounter any issues or have questions, please refer to the documentation or reach out to the project maintainers.
