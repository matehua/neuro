# Testing Guide

Comprehensive testing guidelines for the miNEURO application.

## Testing Philosophy

The miNEURO application follows a comprehensive testing approach to ensure reliability, accessibility, and performance across all components and features.

### Testing Principles

1. **User-Centric Testing**: Test from the user's perspective
2. **Accessibility Testing**: Ensure WCAG 2.1 AA compliance
3. **Cross-Browser Testing**: Support modern browsers
4. **Mobile Testing**: Responsive design validation
5. **Performance Testing**: Core Web Vitals optimization
6. **Internationalization Testing**: Multi-language functionality

## Testing Categories

### 1. Component Testing

#### Unit Testing
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { SafeImage } from '@/components/SafeImage';

describe('SafeImage Component', () => {
  it('renders with correct alt text', () => {
    render(
      <SafeImage 
        src="/test-image.jpg" 
        alt="Test image description" 
      />
    );
    
    const image = screen.getByAltText('Test image description');
    expect(image).toBeInTheDocument();
  });

  it('shows fallback image on error', () => {
    render(
      <SafeImage 
        src="/broken-image.jpg" 
        alt="Test image" 
        fallbackSrc="/fallback.jpg"
      />
    );
    
    const image = screen.getByAltText('Test image');
    fireEvent.error(image);
    
    expect(image).toHaveAttribute('src', '/fallback.jpg');
  });
});
```

#### Integration Testing
```typescript
import { render, screen } from '@testing-library/react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { StandardPageLayout } from '@/components/StandardPageLayout';

describe('Page Layout Integration', () => {
  it('renders with language context', () => {
    render(
      <LanguageProvider>
        <StandardPageLayout title="Test Page">
          <div>Page content</div>
        </StandardPageLayout>
      </LanguageProvider>
    );
    
    expect(screen.getByText('Test Page')).toBeInTheDocument();
    expect(screen.getByText('Page content')).toBeInTheDocument();
  });
});
```

### 2. Accessibility Testing

#### Automated Accessibility Testing
```typescript
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Navbar } from '@/components/Navbar';

expect.extend(toHaveNoViolations);

describe('Navbar Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(<Navbar />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

#### Manual Accessibility Testing
1. **Keyboard Navigation**: Tab through all interactive elements
2. **Screen Reader Testing**: Test with NVDA, JAWS, or VoiceOver
3. **Color Contrast**: Verify 4.5:1 contrast ratio minimum
4. **Focus Management**: Ensure visible focus indicators
5. **ARIA Labels**: Validate proper ARIA attributes

### 3. Performance Testing

#### Core Web Vitals Testing
```bash
# Lighthouse CI testing
npm install -g @lhci/cli
lhci autorun

# Performance budget testing
npm run build
npm run preview
# Test with Lighthouse in Chrome DevTools
```

#### Bundle Size Analysis
```bash
# Analyze bundle size
npm run build
npx vite-bundle-analyzer dist

# Check for unused dependencies
npx depcheck
```

### 4. Cross-Browser Testing

#### Supported Browsers
- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions

#### Testing Checklist
- [ ] Layout renders correctly
- [ ] Interactive elements function properly
- [ ] Images load with fallbacks
- [ ] Language switching works
- [ ] Forms submit successfully
- [ ] Navigation functions correctly

### 5. Mobile Testing

#### Device Testing
- **iOS**: iPhone 12, iPhone 14, iPad
- **Android**: Samsung Galaxy S21, Google Pixel 6
- **Responsive**: 320px to 1920px width

#### Mobile-Specific Tests
```typescript
import { useIsMobile } from '@/hooks/use-mobile';

describe('Mobile Responsiveness', () => {
  it('adapts layout for mobile devices', () => {
    // Mock mobile viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    });

    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });
});
```

### 6. Internationalization Testing

#### Translation Testing
```typescript
import { LanguageContext } from '@/contexts/LanguageContext';

describe('Internationalization', () => {
  it('displays Chinese translations correctly', () => {
    const mockContext = {
      language: 'zh',
      t: { page: { title: '页面标题' } }
    };

    render(
      <LanguageContext.Provider value={mockContext}>
        <PageComponent />
      </LanguageContext.Provider>
    );

    expect(screen.getByText('页面标题')).toBeInTheDocument();
  });
});
```

#### Language Switching Tests
- [ ] URL updates correctly (/en/ to /zh/)
- [ ] Content translates properly
- [ ] Images with text alternatives load
- [ ] Form validation messages translate
- [ ] Error messages display in correct language

## Testing Tools and Setup

### Required Dependencies
```json
{
  "devDependencies": {
    "@testing-library/react": "^13.4.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/user-event": "^14.4.3",
    "jest": "^29.3.1",
    "jest-axe": "^7.0.0",
    "jest-environment-jsdom": "^29.3.1"
  }
}
```

### Jest Configuration
```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/main.tsx',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
```

### Test Scripts
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:a11y": "jest --testNamePattern='accessibility'",
    "test:e2e": "playwright test"
  }
}
```

## Testing Workflow

### Pre-Commit Testing
1. Run unit tests: `npm test`
2. Check TypeScript: `npm run type-check`
3. Lint code: `npm run lint`
4. Build project: `npm run build`

### Continuous Integration
```yaml
# .github/workflows/test.yml
name: Test Suite
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run type-check
      - run: npm run lint
      - run: npm test
      - run: npm run build
```

### Manual Testing Checklist

#### Before Release
- [ ] All automated tests pass
- [ ] Manual accessibility testing complete
- [ ] Cross-browser testing verified
- [ ] Mobile responsiveness confirmed
- [ ] Performance metrics meet targets
- [ ] Internationalization functions correctly
- [ ] Error boundaries handle edge cases
- [ ] SEO metadata validates correctly

#### Post-Deployment
- [ ] Production site loads correctly
- [ ] All pages accessible
- [ ] Forms submit successfully
- [ ] Images load with fallbacks
- [ ] Language switching functional
- [ ] Performance metrics maintained

## Best Practices

### Test Organization
- Group related tests in describe blocks
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)
- Mock external dependencies
- Test edge cases and error conditions

### Accessibility Testing
- Test with keyboard only
- Verify screen reader compatibility
- Check color contrast ratios
- Validate ARIA attributes
- Test focus management

### Performance Testing
- Monitor Core Web Vitals
- Test on slow networks
- Verify image optimization
- Check bundle sizes
- Test lazy loading

This comprehensive testing approach ensures the miNEURO application maintains high quality, accessibility, and performance standards across all features and platforms.
