## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)



# Internationalization rules 
This project supports: - Spanish: es - English: en 
Spanish is the default language. 
## Rules 
1. Never hardcode user-facing text inside Astro components. 
2. All visible text must be stored in `src/i18n/ui.ts`. 
3. Components receive the current language using the `lang` prop. 
4. Use `useTranslations(lang)` to obtain translated strings. 
5. Never create separate components for Spanish and English. 
6. Use Astro's native i18n utilities for localized URLs. 
7. All new pages must support both `/es/` and `/en/`. 
8. The `<html lang>` attribute must match the active locale. 
9. Navigation links must preserve the current language. 
10. Any new user-facing content must be added in both languages. 