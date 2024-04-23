import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
   <nav className="flex justify-between items center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-3">
      <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="Logo Construccion"
          width={70}
          height={35}
          priority
        />
      </Link>
      <Link 
        className="inline-flex items-center px-4 py-2 font-medium text-center text-white bg-slate-700 hover:bg-slate-900 rounded-lg"
        href={"/create"}
      >
        Crear
      </Link>
   </nav>
  )
}

export default NavBar