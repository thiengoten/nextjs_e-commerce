import { Button } from "@/components/ui/button"
import { InstagramLogoIcon } from "@radix-ui/react-icons"
function Footer() {
  return (
    <footer className='pb-4 pt-8'>
      <div className='container mx-auto flex flex-wrap justify-between border-t border-gray-700 px-4 pt-4'>
        <div className='mb-6 w-full md:mb-0 md:w-1/6'>
          <h2 className='mb-4 text-lg'>Next-E</h2>
        </div>
        <div className='mb-6 w-full md:mb-0 md:w-1/3'>
          <ul>
            <li>
              <a href='#' className='hover:underline'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Shipping & Return Policy
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className='flex w-full flex-1 items-start justify-end md:w-1/3'>
          <Button variant='ghost' size='icon'>
            <InstagramLogoIcon className='h-4 w-4' />
          </Button>
        </div>
      </div>
      <div className='container mx-auto mt-8 flex justify-between border-t border-gray-700 px-4 pt-4'>
        <span>&copy; 2024-2025 TGT, Inc. All rights reserved.</span>
        <span>Designed in VietNam</span>
        <span>Crafted by ▲ Vercel</span>
      </div>
    </footer>
  )
}

export default Footer
