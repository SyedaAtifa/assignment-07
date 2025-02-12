import Link from 'next/link'
import React from 'react'

function HomePage() {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-slate-500 gap-12">
            <Link href={"/client-side"}>
                <button className="w-[300px] h-24 bg-black font-medium text-3xl text-white rounded-3xl">
                    Client Side
                </button>
            </Link>

            <Link href={"/server-side"}>
                <button className="w-[300px] h-24 bg-black font-medium text-3xl text-white rounded-3xl">
                    Server Side
                </button>
            </Link>
        </div>
    )
}

export default HomePage