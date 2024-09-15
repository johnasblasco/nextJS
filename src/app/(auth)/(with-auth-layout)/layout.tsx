

export default function AuthLayout({
      children,
}: {
      children: React.ReactNode
}) {
      return (
            <>
                  <p>Inner Layout</p>
                  {children}
            </>
      )
}
