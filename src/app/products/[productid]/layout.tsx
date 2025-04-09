export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        {children}
        <h2>Featured Products</h2>
    </>
  )
}

// {children} is the main content area where other parts of the pages are rendered