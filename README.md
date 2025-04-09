This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

[Next JS Documentation](https://nextjs.org/docs)

### install node.js by visiting nodejs.org and download the latest version

to create a new nextjs program you run, npx create-next-app@latest

go into the folder that has ben created as the name of your project

### and run 
npm run dev. 
A port would be open on localhost:3000
that is where you can visit to see your projects

### React Server Componenet (RSC)
A new architecture introduced by React Team in version 18, then quickly embraced by Next.js
It introduces a new way of creating React Components, splitting them into
two types:

### Server Components 
In Next.js all Components are server Components by default
they have the ability to run tasks like reading files or fetching data from a database
*but can't handle hooks or handle user interactions
*We can also have server component that await actions from client component to finanlize before rendering content on the screen

### client Components
To create client Components add :use client" at the top of the component file
Cant perform tasks like reading files, but can use hooks and handle interactions
*We will also see exaples where we use client Componentto leverage hooks from the routing module

Routing:

All routes must be placed inside the app folder
Every file that corresponds to a route must be named page.js or page.tsx
Each folder is a path segment in the browser url

--------

You dont have to explicitly handle a non matching route. Next.js provides a default 404 response

Dynamic Routes. Name the route folder with [], Nextjs would create dynamic numbered routes

export default function ProductDetails( { params }) {
  return (
      <h1 className="text-3xl font-bold underline">
        Details about product {params.productid}
      </h1>
  )
}

### Catch all segments
```name the component folder with [] [[]]```

### To update the not found page
create a new not found page in the app folder, {not-found.jsx}

###  if you do not include a page.jsx file, the folder wouldn't become an accessible route
###  if you dont export the component as well, there wouldnt be any thing in the page/route, and would be an error

###  thus we can also have private folder that have private implemetations,
// but it shouldn't be considered by the routing system. ```Prefix private folder with underscore (_)```
// but note that if you want to prifix url with an underscore and you want it to show you can rather 
// use %5F, which is the url encoded form of an underscore.

### Route Groups
Allows us to logically group our routes and project files without affecting the url path structure
You would then need to ```mark the enclsing folder in ()``` to tell Nextjs to exclude it from the path


### Layout
// A page is a UI that is unique to a Route
// A layout is a UI that is shared between multiple pages in the app eg, the Header and footer
```create a layout by default exporting a component from a layout.tsx file```
// That component should accept a children prop that will be populated with a child page during rendering

### Routing Metadata
Next.js introduced a metadata API that allows you to define metadata for each page for SEO

There are two ways to configure metadata
<Export a static metadata object>
<Export a dynamic generateMetadata function>

If Metadata is defined in layout, it applies to all pages in that layout, but if applied to that page, it only applies tothat page.

Metadata is read in order, from root tlevel down to the final level of that page

When there is metadata in multiple places for same route, they get combined, but page metadata replaces layout metadate if they have the same properties

### Navigation

There is a <link> compoenet in Reach that allows to enable client-side navigation in Next.js.
The <Link> component extends the HTML <a> element, and is the primary way to navigate between routes in Next.js
We need to import it from <next/link>

### how to programatically naviagte using the App router