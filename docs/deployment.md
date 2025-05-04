# Deployment Guide

This document outlines the process for deploying the miNEURO website to various environments.

## Deployment Options

The miNEURO website can be deployed using several methods:

1. **Lovable Platform** (recommended for development and staging)
2. **Netlify** (recommended for production with custom domains)
3. **Manual Deployment** (for custom hosting environments)

## Prerequisites

Before deploying, ensure:

1. All code changes are committed to the repository
2. The application builds successfully locally (`npm run build`)
3. All tests pass (if applicable)
4. You have the necessary permissions for the deployment platform

## Building the Project

To build the project for production:

```bash
npm run build
```

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
