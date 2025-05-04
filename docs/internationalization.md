# Internationalization Guide

This document explains how internationalization (i18n) is implemented in the miNEURO website to support multiple languages.

## Overview

The miNEURO website uses a custom internationalization system built with React Context. Currently, the website supports:

- English (en) - Default language
- Chinese (zh)

## Key Components

The internationalization system consists of:

1. **LanguageContext**: A React context that provides language state and translation functions
2. **Language Files**: JSON-like objects containing translations for each supported language
3. **LanguageSelector**: A UI component for switching between languages
4. **LanguageWrapper**: A utility component for wrapping text that needs translation

## Implementation Details

### LanguageContext

The `LanguageContext` (`src/contexts/LanguageContext.tsx`) manages the current language and provides translation functions:

```tsx
interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, params?: Record<string, string>) => string;
  isRtl: boolean;
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Implementation details...
};

export const useLanguage = () => useContext(LanguageContext);
```

### Language Files

Language files are located in `src/locales/` and export objects with translation keys and values:

```tsx
// src/locales/en.ts
export default {
  "common.home": "Home",
  "common.about": "About",
  "common.contact": "Contact",
  // More translations...
};

// src/locales/zh.ts
export default {
  "common.home": "首页",
  "common.about": "关于我们",
  "common.contact": "联系我们",
  // More translations...
};
```

### Translation Function

The translation function (`t`) is provided by the `LanguageContext` and used to translate text:

```tsx
const { t } = useLanguage();

// Basic usage
<p>{t("common.welcome")}</p>

// With parameters
<p>{t("common.greeting", { name: "John" })}</p>
```

## Using Internationalization

### Basic Text Translation

To translate basic text:

```tsx
import { useLanguage } from "@/contexts/LanguageContext";

function MyComponent() {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1>{t("page.title")}</h1>
      <p>{t("page.description")}</p>
    </div>
  );
}
```

### Dynamic Content with Parameters

For text that includes dynamic content:

```tsx
const { t } = useLanguage();

<p>{t("common.itemCount", { count: items.length.toString() })}</p>
```

In the language files:

```tsx
// en.ts
"common.itemCount": "You have {{count}} items",

// zh.ts
"common.itemCount": "您有 {{count}} 个项目",
```

### Switching Languages

The `LanguageSelector` component allows users to switch between languages:

```tsx
import LanguageSelector from "@/components/LanguageSelector";

<LanguageSelector />
```

### Handling Language Direction

Some languages (like Arabic) are right-to-left (RTL). The `isRtl` property from `LanguageContext` can be used to adjust layouts:

```tsx
const { isRtl } = useLanguage();

<div className={`flex ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
  {/* Content */}
</div>
```

## Adding a New Language

To add a new language:

1. Create a new language file in `src/locales/`, e.g., `fr.ts` for French:

```tsx
// src/locales/fr.ts
export default {
  "common.home": "Accueil",
  "common.about": "À propos",
  "common.contact": "Contact",
  // More translations...
};
```

2. Update the `LanguageContext` to include the new language:

```tsx
// src/contexts/LanguageContext.tsx
import en from "@/locales/en";
import zh from "@/locales/zh";
import fr from "@/locales/fr"; // Add import

const translations: Record<string, Record<string, string>> = {
  en,
  zh,
  fr, // Add the new language
};

const rtlLanguages = ["ar", "he"]; // Add RTL languages here if needed
```

3. Update the `LanguageSelector` component to include the new language option.

## Translation Keys Structure

Translation keys follow a hierarchical structure:

- `common.*`: Common UI elements used across the site
- `nav.*`: Navigation-related text
- `footer.*`: Footer-related text
- `page.*`: Page-specific content
- `form.*`: Form-related text
- `error.*`: Error messages

Examples:

- `common.loading`: "Loading..."
- `nav.home`: "Home"
- `page.home.title`: "Welcome to miNEURO"
- `form.submit`: "Submit"
- `error.required`: "This field is required"

## Best Practices

1. **Use Semantic Keys**: Keys should describe the purpose of the text, not the text itself.

   Good: `common.submit`
   Bad: `common.submitButton`

2. **Keep Translations Organized**: Group related translations under common prefixes.

3. **Avoid Hardcoded Text**: Always use the translation function for user-visible text.

4. **Handle Pluralization**: For content that changes based on count, use parameters.

5. **Test All Languages**: Ensure the UI works correctly in all supported languages.

6. **Document New Keys**: When adding new translation keys, add them to all language files.

## Content Translation vs. UI Translation

There are two types of translations in the project:

1. **UI Translation**: Handled by the translation system described above.

2. **Content Translation**: For longer content, separate Markdown files are used:

```
public/pages/example-page/index.md      # English content
public/pages/example-page/index.zh.md   # Chinese content
```

The appropriate content file is loaded based on the current language.

## Troubleshooting

### Missing Translation Keys

If a translation key is missing in the current language, the system will:

1. Fall back to the English version
2. Log a warning in the console (in development mode)

### RTL Layout Issues

For RTL languages, ensure that:

1. Text alignment is handled correctly
2. Margins and paddings are flipped
3. Icons and directional elements are mirrored

## Resources

- [React Internationalization](https://react.i18next.com/)
- [MDN Internationalization](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [Unicode CLDR](http://cldr.unicode.org/)
