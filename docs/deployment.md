# Deployment & Contributing Guide

Complete guide for deploying the miNEURO website and contributing to the project.

## Deployment

### Deployment Options

The miNEURO website supports multiple deployment methods:

1. **Lovable Platform** (recommended for development and staging)
2. **Netlify** (recommended for production with custom domains)
3. **Static Hosting** (any static file server)

### Prerequisites

Before deploying, ensure:

- ✅ All code changes are committed to the repository
- ✅ Application builds successfully locally (`npm run build`)
- ✅ All TypeScript errors are resolved
- ✅ ESLint passes without errors
- ✅ Images are optimized and properly referenced

### Building for Production

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Preview the build locally (optional)
npm run preview
```

### Build Output

The build process generates:

```
dist/
├── assets/           # Optimized JS/CSS bundles
├── images/          # Copied image assets
├── data/            # JSON data files
├── pages/           # Markdown content
├── index.html       # Main HTML file
├── manifest.json    # PWA manifest
├── robots.txt       # SEO robots file
└── sitemap.xml      # SEO sitemap
```

### Deployment Methods

#### 1. Lovable Platform (Recommended for Development)

**Quick Deployment:**
1. Open [Lovable Project](https://lovable.dev/projects/96f629c9-6031-4f68-8bd0-680a3c64b6e3)
2. Click **Share** → **Publish**
3. Website will be deployed automatically

**Features:**
- Automatic deployments on code changes
- Preview deployments for branches
- Built-in SSL certificates
- Global CDN distribution

#### 2. Netlify (Recommended for Production)

**Setup:**
1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18.x`

**Build Configuration (netlify.toml):**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

**Custom Domain Setup:**
1. Add your domain in Netlify dashboard
2. Configure DNS records as instructed
3. SSL certificate will be automatically provisioned

#### 3. Manual Deployment

For custom hosting environments:

```bash
# Build the project
npm run build

# Upload the dist/ folder contents to your web server
# Ensure your server is configured to serve index.html for all routes
```

**Server Configuration:**
- Configure server to serve `index.html` for all routes (SPA routing)
- Set up proper MIME types for static assets
- Enable gzip compression for better performance
- Configure caching headers for static assets

### Environment Variables

The application supports environment-specific configuration:

```bash
# Development
VITE_APP_ENV=development
VITE_API_URL=http://localhost:3000

# Production
VITE_APP_ENV=production
VITE_API_URL=https://api.mineurosurgery.com
```

### Performance Optimization

**Build Optimizations:**
- Code splitting by routes and vendors
- Tree shaking to remove unused code
- Asset optimization and compression
- Bundle analysis for size monitoring

**Runtime Optimizations:**
- Lazy loading for non-critical components
- Image optimization with proper sizing
- Service worker for caching (if enabled)
- CDN distribution for global performance

## Contributing

### Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/neuro.git
   cd neuro
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start development server**:
   ```bash
   npm run dev
   ```

### Development Workflow

#### Branching Strategy

- `main`: Production-ready code
- `feature/*`: New features or enhancements
- `bugfix/*`: Bug fixes
- `docs/*`: Documentation updates
- `hotfix/*`: Critical production fixes

#### Creating a Feature Branch

```bash
# Create and switch to a new feature branch
git checkout -b feature/your-feature-name

# Make your changes
# ...

# Commit your changes
git add .
git commit -m "feat: add new feature description"

# Push to your fork
git push origin feature/your-feature-name

# Create a pull request on GitHub
```

### Code Standards

#### TypeScript Guidelines

```typescript
// Use strict typing
interface ComponentProps {
  title: string;
  optional?: boolean;
}

// Avoid 'any' type
const processData = (data: unknown): ProcessedData => {
  // Type guards and validation
  if (typeof data === 'object' && data !== null) {
    return data as ProcessedData;
  }
  throw new Error('Invalid data format');
};

// Use proper return types
const fetchUserData = async (id: string): Promise<User> => {
  // Implementation
};
```

#### Component Guidelines

```typescript
// Use functional components with hooks
export const Component: React.FC<Props> = ({ title, children }) => {
  const [state, setState] = useState<StateType>(initialState);

  const handleAction = useCallback(() => {
    // Event handler logic
  }, [dependencies]);

  return (
    <div className="component-wrapper">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

// Export with proper naming
export default Component;
```

#### Styling Guidelines

```typescript
// Use Tailwind CSS classes
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h3 className="text-lg font-semibold text-gray-900">Title</h3>
  <Button variant="outline" size="sm">Action</Button>
</div>

// Use cn() utility for conditional classes
import { cn } from '@/lib/utils';

<div className={cn(
  "base-styles",
  variant === 'primary' && "primary-styles",
  isActive && "active-styles",
  className
)}>
```

### Testing Guidelines

#### Component Testing

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { Component } from './Component';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    const handleClick = jest.fn();
    render(<Component onAction={handleClick} />);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

#### Accessibility Testing

```typescript
// Test keyboard navigation
fireEvent.keyDown(element, { key: 'Enter', code: 'Enter' });
fireEvent.keyDown(element, { key: 'Tab', code: 'Tab' });

// Test ARIA attributes
expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
expect(screen.getByLabelText('Close dialog')).toBeInTheDocument();
```

### Commit Message Guidelines

Use conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(components): add SafeImage component with error handling

- Implements automatic fallback on image load errors
- Adds accessibility attributes for decorative images
- Includes lazy loading support

Closes #123
```

### Pull Request Process

1. **Ensure your branch is up to date**:
   ```bash
   git checkout main
   git pull upstream main
   git checkout feature/your-feature
   git rebase main
   ```

2. **Run quality checks**:
   ```bash
   npm run lint
   npm run build
   npm run test  # if tests exist
   ```

3. **Create a detailed pull request**:
   - Clear title and description
   - Reference related issues
   - Include screenshots for UI changes
   - List breaking changes (if any)

4. **Address review feedback**:
   - Make requested changes
   - Push updates to the same branch
   - Respond to reviewer comments

### Code Review Guidelines

#### For Authors

- Keep pull requests focused and small
- Write clear commit messages
- Include tests for new functionality
- Update documentation as needed
- Ensure accessibility compliance

#### For Reviewers

- Review for code quality and standards
- Check for accessibility issues
- Verify TypeScript types are correct
- Test functionality locally if needed
- Provide constructive feedback

### Issue Reporting

When reporting bugs or requesting features:

1. **Search existing issues** first
2. **Use issue templates** when available
3. **Provide detailed information**:
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Browser/device information
   - Screenshots or videos if helpful

### Documentation

- Update relevant documentation for new features
- Keep README.md current
- Document breaking changes
- Include code examples in component documentation

### Getting Help

- Check existing documentation first
- Search closed issues for similar problems
- Ask questions in GitHub Discussions
- Contact maintainers for urgent issues

### License

By contributing to this project, you agree that your contributions will be licensed under the project's license.

This creates a `dist/` directory containing the optimized production build.

## Deployment Methods

### 1. Deploying with Lovable

Lovable provides a simple deployment process:

1. Open the [Lovable Project](https://lovable.dev/projects/96f629c9-6031-4f68-8bd0-680a3c64b6e3)
2. Click on Share -> Publish
3. Follow the prompts to complete the deployment

The site will be deployed to a Lovable-provided URL.

### 2. Deploying with Netlify

To deploy to Netlify with a custom domain:

1. Create a Netlify account if you don't have one
2. Connect your GitHub repository to Netlify
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Configure your custom domain in the Netlify settings
5. Set up any required environment variables

#### Netlify Configuration File

Create a `netlify.toml` file in the root directory:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This configuration handles client-side routing correctly.

### 3. Manual Deployment

For manual deployment to a custom server:

1. Build the project: `npm run build`
2. Copy the contents of the `dist/` directory to your web server
3. Configure your web server to serve the application correctly:
   - Set up proper MIME types
   - Configure caching headers
   - Set up redirects for client-side routing

#### Apache Configuration

For Apache, create a `.htaccess` file in the root of your deployed directory:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/x-javascript "access plus 1 month"
  ExpiresByType application/x-font-woff "access plus 1 year"
  ExpiresByType application/font-woff2 "access plus 1 year"
</IfModule>
```

#### Nginx Configuration

For Nginx, add this to your server block:

```nginx
server {
  listen 80;
  server_name yourdomain.com;
  root /path/to/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  # Cache static assets
  location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, max-age=31536000";
  }
}
```

## Environment Variables

The miNEURO website uses environment variables for configuration. These should be set in the deployment environment:

- `VITE_API_URL`: API endpoint URL (if applicable)
- `VITE_GOOGLE_ANALYTICS_ID`: Google Analytics ID (if applicable)

### Setting Environment Variables

#### Netlify

Set environment variables in the Netlify dashboard under Site settings > Build & deploy > Environment.

#### Manual Deployment

Create a `.env.production` file before building:

```
VITE_API_URL=https://api.example.com
VITE_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

## Post-Deployment Verification

After deployment, verify:

1. The website loads correctly
2. All pages are accessible
3. Images and assets load properly
4. Forms work correctly
5. Client-side routing works
6. The site is responsive on different devices

## Rollback Procedure

If issues are discovered after deployment:

### Netlify

1. Go to the Netlify dashboard
2. Navigate to the Deploys section
3. Select a previous successful deployment
4. Click "Publish deploy"

### Manual Deployment

1. Keep a backup of the previous successful deployment
2. Replace the current deployment with the backup

## Continuous Deployment

For automated deployments:

### GitHub Actions

Create a `.github/workflows/deploy.yml` file:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        with:
          args: deploy --prod
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## Custom Domain Setup

For setting up a custom domain, see [Custom Domain Documentation](https://docs.lovable.dev/tips-tricks/custom-domain/).

## Performance Optimization

To optimize performance for production:

1. Enable gzip/Brotli compression on your server
2. Use a Content Delivery Network (CDN)
3. Implement proper caching headers
4. Optimize images and assets

## Troubleshooting

### Common Issues

1. **White screen after deployment**:
   - Check for JavaScript errors in the console
   - Verify that all assets are loading correctly
   - Ensure client-side routing is configured properly

2. **Missing assets**:
   - Check that all asset paths are correct
   - Verify that assets were included in the build

3. **API connection issues**:
   - Verify environment variables are set correctly
   - Check for CORS issues

### Getting Help

If you encounter issues with deployment:

1. Check the deployment logs
2. Consult the documentation for your deployment platform
3. Reach out to the project maintainers
