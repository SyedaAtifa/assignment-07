import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className="bg-sky-900 text-white">
      <h1 className="w-screen h-14 font-bold text-3xl flex items-center justify-center sm:hidden">Data Fetching</h1>
      <header className="w-screen h-20 flex items-center sm:px-2 lg:px-32">
        <h1 className="font-semibold text-4xl hidden sm:block lg:w-[900px]">Data Fetching</h1>
        <ul className="w-[500px] flex justify-evenly text-2xl">
          <li>Home</li>
          <Link href={"/client-side"}>
            <li>
              Client Side
            </li>
          </Link>
          <Link href={"/server-side"}>
            <li>
              Server Side
            </li>
          </Link>
        </ul>
      </header>
    </div>
  )
}

export default Header