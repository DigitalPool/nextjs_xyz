*** Promise, useclient, useRef, useEffect, async

[Next JS Documentation](https://nextjs.org/docs)

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";



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

### Templates
Templates are similar to layout in that they wrap each child layout or page
But with templates, when a user navigates between routes that share a template, a new instance of the componenet is mounter, DOM elements are recreated, state is not preserved, and effects are re-synchronized.
<A template can be defined by exporting a default React Componenet from a template.js or template.tsx file>
<Templates also accept children prop which will render the nested segments in the route>
<For sharedUI always prefer to use Layouts, but when you need updated state use templates>
<You can also render a template above a layout when needed>


### Special Files
***Loading Files***
Loading files allow us to create loading screens when a spacific route segment is loading. To create it just add a <loading.tsx> to the specific folder. The file automatically wraps the page.tsx file and its contents.

Benefits: give users feedback while loading. And allow to create shared  layouts that remain interactive while new routes loads.

***error handling*** <error.tsx>

### Parallel routes

in Nextjs Parallel Routes are kown as <slots>. Slots help structure our project in modular fashion. slots use the @folder naming convantion. Each slot is then passes as a prop to its corresponding layout.tsx file. 
For <unmatched routes> add a default.tsx to the slots and children, and prefix the export name with "Default"

### Conditional Routes
Allows to render different URL for same page, based on particular state, or user state e.g login/notlogin.

### Intercepting Routes
Allow you to intercept or stop the default routing behaviour to present an alternate view or component when navigating through the UI, while still preserving the intended route for scenarios like page reloads.

(.) to match segemnts on the same level
(..) to match segemnts one level above
(..) to match segemnts two levels above
(..) to match segemnts from the root app directory

### Parallel Intercepting Routes
This uses modals which shows like overlays on the main routes, and then can be navigated with the foward and backward arrows.

### Route handlers
The app router lets you create custom request handlers for your routes using a feature called Route Handlers
Unlike page routes, which give us HTML content, Route Handlers let us build RESTful endpoints with complete control over the response
Think of it like building a Node + Express app
There's no need to set up and configure a separate server
Route Handlers are great when making external API requests as well
For example, if you're building an app that needs to talk to third-party services Route handlers run server-side, our sensitive info like private keys stays secure and never reaches the browser.
Route Handlers are the equivalent of API routes in Page router
Next.js supports <GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS> 
If an unsupported method is called, Next.js will return a 405 Method Not Allowed response.

### caching
To ensure caching use 
<export const dynamic = "force-static">
you can choose to revalidate the data every amount of time by doing
<export const revalidate = 10> 
```Note that caching only works with GET() methods```, POST, PUT or DELETE are never cached.
Also cahing is not applied to headers() and cookies() or working with request object in GET methoda.

### Middleware
Middleware allows you intercept and control the flow of requests throughout your application