# Internationalization & Accessibility Guide

Comprehensive guide for internationalization (i18n) and accessibility implementation in the miNEURO website.

## Internationalization (i18n)

### Overview

The miNEURO website supports multiple languages to serve a diverse patient base:

- **English (en)**: Default language
- **Chinese (zh)**: Secondary language
- **Extensible**: Easy to add more languages

### Architecture

#### Language Context System

```typescript
// src/contexts/LanguageContext.tsx
interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, params?: Record<string, string>) => string;
  supportedLanguages: string[];
}

// Usage in components
const { t, language, setLanguage } = useTranslation();
```

#### Translation File Structure

```
src/locales/
├── en.ts    # English translations
└── zh.ts    # Chinese translations

// Translation object structure
export const en = {
  common: {
    loading: "Loading...",
    save: "Save",
    cancel: "Cancel"
  },
  navigation: {
    home: "Home",
    expertise: "Expertise",
    patientResources: "Patient Resources"
  },
  pages: {
    home: {
      title: "Welcome to miNEURO",
      subtitle: "Advanced Neurosurgery and Spine Care"
    }
  }
};
```

### Using Translations

#### Basic Translation

```typescript
import { useTranslation } from '@/contexts/LanguageContext';

export const Component = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('pages.home.title')}</h1>
      <p>{t('pages.home.subtitle')}</p>
    </div>
  );
};
```

#### Dynamic Content with Parameters

```typescript
// Translation with placeholders
export const en = {
  messages: {
    welcome: "Welcome, {{name}}!",
    itemCount: "You have {{count}} items"
  }
};

// Component usage
const { t } = useTranslation();
return (
  <div>
    <p>{t('messages.welcome', { name: 'John' })}</p>
    <p>{t('messages.itemCount', { count: '5' })}</p>
  </div>
);
```

#### Conditional Translations

```typescript
// Handle pluralization
const messageCount = 3;
const key = messageCount === 1
  ? 'notifications.newMessage'
  : 'notifications.newMessages';

return <p>{t(key, { count: messageCount.toString() })}</p>;
```

### Language Routing

#### URL-based Language Support

```typescript
// Route structure
// /en/expertise - English expertise page
// /zh/expertise - Chinese expertise page
// / - Redirects to /en/

// Route configuration
const routes = [
  { path: '/en/*', element: <LanguageWrapper lang="en"><App /></LanguageWrapper> },
  { path: '/zh/*', element: <LanguageWrapper lang="zh"><App /></LanguageWrapper> },
  { path: '/', element: <Navigate to="/en/" replace /> }
];
```

#### Language Persistence

```typescript
// Language selection is persisted in localStorage
const [language, setLanguage] = useState(() => {
  const saved = localStorage.getItem('preferred-language');
  return saved || 'en';
});

useEffect(() => {
  localStorage.setItem('preferred-language', language);
}, [language]);
```

### Content Localization

#### Markdown Content

```
public/pages/example-page/
├── index.md      # English content
└── index.zh.md   # Chinese content

// Content loading with fallback
const loadContent = async (language: string) => {
  try {
    const response = await fetch(`/pages/example-page/index.${language}.md`);
    if (!response.ok) {
      // Fallback to English
      return await fetch(`/pages/example-page/index.md`);
    }
    return response;
  } catch (error) {
    console.error('Failed to load content:', error);
  }
};
```

#### Image Localization

```typescript
// Language-specific images
const getLocalizedImage = (basePath: string, language: string) => {
  return `${basePath}.${language}.jpg`;
};

<SafeImage
  src={getLocalizedImage('/images/hero', language)}
  alt={t('images.hero.alt')}
/>
```

### Adding New Languages

#### 1. Create Translation File

```typescript
// src/locales/es.ts (Spanish example)
export const es = {
  common: {
    loading: "Cargando...",
    save: "Guardar",
    cancel: "Cancelar"
  },
  navigation: {
    home: "Inicio",
    expertise: "Experiencia"
  }
  // ... complete translation object
};
```

#### 2. Update Language Context

```typescript
// src/contexts/LanguageContext.tsx
import { es } from '@/locales/es';

const translations = { en, zh, es };
const supportedLanguages = ['en', 'zh', 'es'];
```

#### 3. Add Route Configuration

```typescript
// Add new language route
{ path: '/es/*', element: <LanguageWrapper lang="es"><App /></LanguageWrapper> }
```
