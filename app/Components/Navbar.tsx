import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='sticky top-0 z-10 shadow-lg shadow-slate-400 flex justify-between 
         items-center bg-slate-300/95 px-6 md:px-12 py-1'>
        <ul className='flex gap-4 md:gap-12 font-semibold text-xl'>
        <li><Link href='/' className='hover:text-slate-600 transition duration-200' >صفحه اصلی</Link></li>
        <li><Link href='/ticket' title='برای ثبت مشکلات کلیک کنید' className='hover:text-slate-600 transition duration-200' >ثبت تیکت</Link></li>
        <li><Link href='/shop' className='hover:text-slate-600 transition duration-200' >
          فروشگاه</Link></li>
        </ul>
       <Link href='/'> <Image src='/logo.webp' alt='logo' width={300} height={300} 
        className='w-14 h-14'
        />
        </Link>
    </nav>
  )
}

export default Navbar
