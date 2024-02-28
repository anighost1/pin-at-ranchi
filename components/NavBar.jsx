"use client"

import Image from "next/image"
import Link from "next/link"


export default function NavBar() {

    return (
        <div className="fixed top-0 z-50 navbar bg-base-100 drop-shadow">
            <div className="flex-1">
                <Image src={'/locationLogo.svg'} alt="logo" width={35} height={35}/>
                <Link href={'/'} className="text-xl prose btn btn-ghost">Pin at Ranchi</Link>
            </div>
            {/* <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div> */}
        </div>
    )
}
