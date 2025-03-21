"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import NavItem from './NavItem';



export default function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const [activeIdx, setActiveIdx] = useState(-1);

    const MENU_LIST = [
        { text: "Home", href: "/" },
        { text: "About Us", href: "/about" },
        { text: "Contact", href: "/contact" },
      ];
    return (
        <>
            <nav id="nav" className="fixed inset-x-0 top-0 flex flex-row justify-between z-10  bg-transparent">

                <div className="p-4">
                    <div className="font-extrabold tracking-widest text-xl">
                        <Link href={"/"} className="transition duration-500 hover:text-indigo-500">
                            <h1>MIXR</h1>
                        </Link>
                    </div>
                </div>

                {/* <!-- Nav Items Working on Tablet & Bigger Sceen --> */}
                {/* <div className="p-4 hidden md:flex flex-row justify-between font-bold">
                    <a id="hide-after-click" href="#about" className="mx-4 text-lg  border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500">About</a>
                    <a href="#whyus" className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500">Why
                        Us ?</a>
                    <a href="#showcase" className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500">Our
                        Products</a>
                </div> */}
                <div className={`${navActive ? "block" : "hidden"} absolute md:static right-0 top-15 nav__menu-list "p-4 md:flex flex-row justify-between font-bold bg-white md:bg-transparent`}>
                    {MENU_LIST.map((menu, idx) => (
                        <div
                        onClick={() => {
                            setActiveIdx(idx);
                            setNavActive(false);
                        }}
                        key={menu.text}
                        >
                        <NavItem active={navActive} {...menu} />
                        </div>
                    ))}
                </div>


                <div id="nav-open" className="p-4 md:hidden" onClick={() => setNavActive(!navActive)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     className="feather feather-menu">
                        <line x1="3" y1="12" x2="21" y2="12" ></line> {/* className={`${navActive ? "-rotate-45" : "rotate-none"} origin-center transition-transform`} */}
                        <line x1="3" y1="6" x2="21" y2="6" ></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </div>
            </nav>

                {/* <!-- Opened Nav in Mobile, you can use javascript/jQuery --> */}
                {/* <div id="nav-opened" className="fixed left-0 right-0 hidden bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10">
                    <div className="p-2 divide-y divide-gray-600 flex flex-col">
                        <a href="#about" className="p-2 font-semibold hover:text-indigo-700">About</a>
                        <a href="#whyus" className="p-2 font-semibold hover:text-indigo-700">Why Us ?</a>
                        <a href="#showcase" className="p-2 font-semibold hover:text-indigo-700">Our Products</a>
                    </div>
                </div> */}
                
        </>
    );
}