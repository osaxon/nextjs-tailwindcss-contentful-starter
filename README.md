This is a NextJs and Tailwind project bootstrapped using nextjs-tailwind-starter created by [Oli Saxon](https://github.com/osaxon/nextjs-tailwindcss-contentful-starter).


![Screenshots](https://www.site-shot.com/cached_image/3aslTKJcEeuO5AJCrBEAAg)

## Getting Started

To use this starter, use create-next-app and specify this repo as a template URL:
```bash
npx create-next-app -e https://github.com/osaxon/nextjs-tailwindcss-contentful-starter project-name
```

## What's Inside

### Layout Component

### UnstyledLink Component

Used as a component for Next.js Link. Will render out Next/Link if the href started with `/` or `#`, else will render an `a` tag with `target='_blank'`.
### CustomLink Component
An extension of UnstyledLink Component, you can add your default styling for a button/link.
```jsx
<UnstyledLink
      className={`${props.className} inline-flex items-center font-bold hover:text-primary-400`}
      {...props}
    >
  {props.children}
</UnstyledLink>
```

### Default Favicon Declaration
Use [Favicon Generator](https://www.favicon-generator.org/) and then overwrite the files in `/public/favicon`


### Seo Component
Configure the default in `/components/Seo.jsx`. If you want to use the default, just add `<Seo />` on top of your page. 

You can also customize it per page by overriding the title, description as props

```jsx
<Seo
  title='Next.js Tailwind Starter'
  description='your description'
/>
```

## Credits

This is a modified version of a starter template created by [Theodorus Clarence](https://github.com/theodorusclarence/nextjs-tailwind-starter)