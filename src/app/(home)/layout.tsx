import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <header className='bg-transparent shadow'>
        <Navbar />
      </header>
      {children}
      <Footer />
    </>
  )
}
