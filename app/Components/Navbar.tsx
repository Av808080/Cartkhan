import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='sticky z-10 flex justify-between 
         items-center bg-slate-300 px-6 md:px-12 py-1'>
        <ul className='flex gap-6 md:gap-12 font-semibold text-xl'>
        <li><Link href='/' className='hover:text-slate-600 transition duration-200' >صفحه اصلی</Link></li>
        <li><Link href='/' title='برای ثبت مشکلات کلیک کنید' className='hover:text-slate-600 transition duration-200' >ثبت تیکت</Link></li>
        </ul>
       <Link href='/'> <Image src='/logo.webp' alt='logo' width={300} height={300} 
        className='w-14 h-14'
        />
        </Link>
    </nav>
  )
}

export default Navbar
