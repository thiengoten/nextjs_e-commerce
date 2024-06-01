// components/Navbar.js

import { ModeToggle } from "@/components/ModeToggle"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className='container mx-auto flex items-center justify-start gap-10 py-2'>
      <Link className='text-xl font-bold ' href='/'>
        Next-E
      </Link>
      <nav className='hidden md:flex'>
        <ul className='flex items-center justify-between space-x-8'>
          <li>
            <Link className='text-base font-medium' href='/about'>
              About
            </Link>
          </li>
          <li>
            <Link className='text-base font-medium' href='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className='flex flex-1 justify-end gap-3'>
        <ModeToggle />
        <Button asChild>
          <Link href='/login'>Sign in</Link>
        </Button>
      </div>
    </div>
  )
}

export default Navbar
