'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {

  const currentRoute = usePathname();

  return (
    <nav className="py-3 px-10 bg-myblue font-medium text-white decoration-0">
    <div className="2xl:container mx-auto flex justify-between items-center ">
    <Link href="/">
      <Image className="logo" 
      src="/images/logo.png"
       alt="math with antoine" 
       width={230}
       height={200}
       
       />
    </Link>

    <ul className="list-none">
        <li className="hover:underline inline-block py-0 px-5 min-w-fit">
            <Link href="/services" passHref>
              <div className={
                currentRoute === "/services"?
                " underline" : " no-underline"
              }>
                Services
              </div>
            </Link>
        </li>
        <li className="hover:underline inline-block py-0 px-5 min-w-fit">
            <Link href="/about" passHref>
            <div className={
                currentRoute === "/about"?
                " underline" : " no-underline"
              }>
                About
              </div>
            </Link>
        </li>
        <li className="hover:underline inline-block py-0 px-5 min-w-fit">
            <Link href="/booking" passHref>
            <div className={
                currentRoute === "/booking"?
                " underline" : " no-underline"
              }>
                Booking
              </div>
            </Link>
        </li>
        <li className="hover:underline inline-block py-0 px-5 min-w-fit">
            <Link href="/pricing" passHref>
            <div className={
                currentRoute === "/pricing"?
                " underline" : " no-underline"
              }>
                Pricing
              </div>
            </Link>
        </li>
    </ul>
    </div>
    </nav>
  )
}

export default NavBar