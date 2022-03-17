# Vite React Tailwind JavaScript Starter

Inspired by [Theodorus Clarence's](https://github.com/theodorusclarence) [Vite React Tailwind Starter](https://github.com/theodorusclarence/vite-react-tailwind-starter)


This is a [Vite](https://vitejs.dev/), [React](https://reactjs.org/), JavaScript and [Tailwind CSS](https://tailwindcss.com/) project starter.
- 💡 Instant Server Start
- 🛠️ Rich Features
- 📦 Optimized Build
- 🔩 Universal Plugin Interface
- 🔑 Fully Typed APIs

## Installation

### Clone the template

To clone this template you can use one of the two ways:


#### 1. Use npx degit
```bash
npx degit https://github.com/AdiletBekmuratov/vite-react-tailwind-js.git my-app
```
replace `my-app` with your application name


#### 2. Use this repository as a template

![Use as template](https://i.imgur.com/I6aThUJ.png)


### Running The Application
First, install all the dependencies,
```bash
npm i
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


You can start editing the page by modifying `pages/Home.tsx`. The page auto-updates as you edit the file.

## What's Inside

### Absolute import

You can absolute import by using `@/`

For example
```tsx
import UnstyledLink from '@/components/UnstyledLink'
```
You can also use auto import and it should work automatically.

When you add a new folder in src, add it on the `jsconfig.json`
```json
{
	// ...
  "baseUrl": "./src",
    "paths": {
      "@/routes/*": ["./routes/*"],
			"@/pages/*": ["./pages/*"],
			"@/components/*": ["./components/*"],
			// add new folders here
    },
	// ...
}
```

### Inter Fonts

Inter fonts is self hosted. The default weights are `400, 600, 700`. To add more, use fontsquirrel.

### UnstyledLink Component
Used as a component for Next.js Link. Will render out Next/Link if the href started with `/` or `#`, else will render an `a` tag with `target='_blank'`.

### Default Favicon Declaration
Use [Favicon Generator](https://www.favicon-generator.org/) and then overwrite the files in `/public/favicon`

### Just-In-Time Tailwindcss
Defaulted to true, you can uncomment the `mode='jit'` in `/tailwind.config.js`

### Default Styles
There are default styles for responsive heading sizes, and `.layout` to support a max-width for larger screen size.
