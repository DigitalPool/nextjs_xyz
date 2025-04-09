export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <h2>Inner Layout</h2>
        {children}
    </>
  )
}

// {children} is the main content area where other parts of the pages are rendered