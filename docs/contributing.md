# Contributing Guidelines

Thank you for your interest in contributing to the miNEURO website project! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please read and follow our [Code of Conduct](./CODE_OF_CONDUCT.md) to foster an inclusive and respectful community.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) (v7 or later)
- Git

### Setting Up the Development Environment

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/neuro.git
   cd neuro
   ```
3. Add the original repository as an upstream remote:
   ```bash
   git remote add upstream https://github.com/r70pro/neuro.git
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Development Workflow

### Branching Strategy

- `master`: The main branch containing the latest stable code
- `feature/*`: Feature branches for new features or enhancements
- `bugfix/*`: Bugfix branches for fixing issues
- `docs/*`: Documentation branches for documentation updates

### Creating a New Branch

```bash
git checkout -b feature/your-feature-name
```

### Making Changes

1. Make your changes to the codebase
2. Test your changes locally
3. Commit your changes with a descriptive message:
   ```bash
   git add .
   git commit -m "Add feature: description of your changes"
   ```
4. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request on GitHub

## Pull Request Process

1. Ensure your code follows the project's coding standards
2. Update documentation if necessary
3. Include a clear description of the changes in your pull request
4. Link any related issues in your pull request description
5. Wait for a maintainer to review your pull request
6. Address any feedback from the review
7. Once approved, a maintainer will merge your pull request

## Coding Standards

### General Guidelines

- Write clean, readable, and maintainable code
- Follow the existing code style and patterns
- Use meaningful variable and function names
- Keep functions small and focused on a single task
- Write comments for complex logic
- Include JSDoc comments for functions and components

### TypeScript

- Use TypeScript for all new code
- Define interfaces for component props
- Use proper type annotations
- Avoid using `any` type when possible
- Use type inference when appropriate

### React

- Use functional components with hooks
- Keep components small and focused
- Use the appropriate hooks for different use cases
- Follow the React component naming convention (PascalCase)
- Separate business logic from UI components when possible

### CSS/Tailwind

- Use Tailwind CSS utility classes for styling
- Follow the project's design system
- Use responsive design principles
- Ensure accessibility in your styles

## Testing

- Write tests for new features and bug fixes
- Ensure all tests pass before submitting a pull request
- Test your changes in different browsers and devices

## Documentation

- Update documentation for any changes to the API or functionality
- Document new components, hooks, or utilities
- Use clear and concise language
- Include examples where appropriate

## Reporting Issues

If you find a bug or have a feature request:

1. Check if the issue already exists in the [GitHub Issues](https://github.com/r70pro/neuro/issues)
2. If not, create a new issue with a descriptive title and detailed description
3. Include steps to reproduce the issue
4. Include screenshots or error messages if applicable
5. Label the issue appropriately

## Review Process

All contributions go through a review process:

1. Automated checks (linting, type checking, tests)
2. Code review by a maintainer
3. Feedback and discussion
4. Approval and merge

## Commit Message Guidelines

Follow these guidelines for commit messages:

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests after the first line
- Consider using a conventional commits format:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation changes
  - `style:` for formatting changes
  - `refactor:` for code refactoring
  - `test:` for adding or updating tests
  - `chore:` for maintenance tasks

Example:
```
feat: add language selector component

- Add dropdown for language selection
- Implement language switching functionality
- Update tests

Closes #123
```

## License

By contributing to this project, you agree that your contributions will be licensed under the project's license.

## Questions and Help

If you have questions or need help:

1. Check the documentation
2. Ask in the GitHub Issues
3. Contact the project maintainers

Thank you for contributing to the miNEURO website project!
