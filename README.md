# CaribeSky

## Tailwind-Powered Multilingual SEO-Ready Astro Template

> 🧑‍🚀 **Use this template to start your multilanguage site**  Have fun!

## 🚀 Project Structure

Inside the template, you'll see the following folders and files:

The project has the following structure:

```text
├── public/
├── src/ # This directory contains your Astro components and pages.
│   ├── assets/
│   ├── components/
│   │   ├── LanguagePicker.astro
│   │   ├── NavBar.astro
│   │   └── NavLink.astro
│   ├── content/
│   │   ├── about/
│   │   │   ├── en/
│   │   │   └── es/
│   │   └── frontPage/
│   │       ├── en/
│   │       └── es/
│   │   ├── config.ts
│   ├── contentSchemas/
│   │   └── commonSchemas/
|   |           └──headMetaData.js #for the html head
│   ├── i18n/
│   │   ├── ui.ts
│   │   └── utils.ts
│   ├── icons/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pageLayouts/
│   │   ├── AboutPageLayout.astro
│   │   └── FrontPageLayout.astro
│   └── pages/
│   |    ├── about.astro
│   |    ├── index.astro
│   |    ├── en/
│   |      ├── index.astro
│   |      └── about.astro
│   ├── env.d.ts
├── tailwind.config.mjs # Tailwind CSS configuration.
└── tsconfig.json # TypeScript compiler options.

```

With this template you get:
    Internationalization ready to use.
    Tailwind hooked with configuration example
    Icons and how to use them
    Content schema examples to start working
    Two pages examples in /EN and spanish
    Components to help with the languages and layouts
    etc...

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
