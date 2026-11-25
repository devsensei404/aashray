# Aashray for Animals

The website for **Aashray for Animals**, an animal welfare organisation in Durgapur, West Bengal that cares for street animals, especially Indie dogs.

Built with [Astro](https://astro.build/) and plain CSS. The site is static and has no backend or database.

## Pages

- **Home** - overview and links to the main areas of the site
- **Our work** - rescue, treatment, sterilisation and animal welfare activities
- **Adopt and foster** - adoptable animals and foster information
- **Volunteer** - volunteer opportunities and the application form
- **Donate** - donation and membership information
- **Contact** - shelter details, visiting hours and contact channels

## Requirements

- Node.js
- npm

## Local development

```bash
npm install
npm run dev
```

Open the local URL shown by Astro, typically `http://localhost:4321`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Environment variables

Copy `.env.example` to `.env` and set the values you need:

```bash
cp .env.example .env
```

| Variable | Purpose |
| --- | --- |
| `PUBLIC_WHATSAPP_NUMBER` | WhatsApp and general rescue/contact number; digits only |
| `PUBLIC_PHONE_NUMBER` | Optional phone number; falls back to the WhatsApp number |
| `PUBLIC_EMAIL` | Optional public email address |
| `PUBLIC_VOLUNTEER_FORM_URL` | Optional override for the volunteer application form |

The file `.env` is ignored by Git. If a phone or email value is left empty, the corresponding site link is hidden.

## Editing site content

The main editable content is kept in dedicated files:

- [`src/data/contact.js`](src/data/contact.js) - organisation details, shelters, visiting hours, social links and WhatsApp messages
- [`src/data/site-settings.js`](src/data/site-settings.js) - volunteer requirements, paid positions, membership and donation settings
- [`src/data/animals.js`](src/data/animals.js) - adoptable, resident and rescue animal listings
- [`src/pages/`](src/pages/) - page content and page-specific components
- [`public/`](public/) - logos, icons and other static assets

Comments in these files explain which values are optional and how to add new records.

## Production build

```bash
npm run build
```

The generated static site is written to `dist/`. Deploy that directory to a static hosting provider such as Cloudflare Pages, Netlify or Vercel.

Environment variables must be supplied by the hosting provider at build time because they are used by the public Astro site. Add the live website URL to [`astro.config.mjs`](astro.config.mjs) when it is known to enable canonical URLs.
