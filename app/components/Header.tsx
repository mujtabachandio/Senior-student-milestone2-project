import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <header className=" w-full shadow-md py-4 px-6 flex flex-col md:flex-row items-center justify-between ">
      <div className="text-white text-2xl md:text-3xl font-bold mb-4 md:mb-0">Mujtaba Chandio <span className='animate-pulse'>🐦‍🔥</span></div>
      <nav>
      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
      <li>
        <Link href="/" className="text-white hover:text-blue-900">
        Home
        </Link>
      </li>
      <li>
      <Link href="/about" className="text-white hover:text-blue-900">
        About
        </Link>
      </li>
      <li>
      <Link href="/contact" className="text-white hover:text-blue-900">
        Contact
        </Link>
      </li>
    </ul>
      </nav>
    </header>
    </>
)
}

export default Header