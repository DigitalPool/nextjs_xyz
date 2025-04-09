import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Welcome Home!
      </h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </main>
  )
}
// This is a Next.js page component that renders a main element with a heading.
// The heading has a class that applies Tailwind CSS styles to make it large, bold, and underlined.
// The component is exported as the default export of the module, which allows Next.js to use it as a page.
// The function is named Home, which is a common convention for the main page of a Next.js application.
// The component returns a JSX element that represents the structure of the page.