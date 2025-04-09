import Link from "next/link"

export default function ProductList() {
  const productId = 100
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Products!</h1>
      <h2><Link href="/products/1">Products 1</Link></h2>
      <h2><Link href="/products/2">Products 2</Link></h2>
      <h2><Link href="/products/3" replace>Products 3</Link></h2>
      <h2><Link href={`products/${productId}`}>Products {productId}</Link></h2>
    </>
  )
}
//replace prop replaces the current history, instead of adding a url to the stack,
//so from products/3 it goes back to home pack not the products page.