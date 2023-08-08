import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center py-3 px-10 bg-myblue font-medium text-white decoration-0">
    <Link href="/">
      <Image className="logo" 
      src="/images/logo.png"
       alt="math with antoine" 
       width={230}
       height={200}
       
       />
    </Link>
    
    <ul className="list-none">
        <li className="hover:font-bold inline-block py-0 px-5 min-w-fit">
            <Link href="/services" className="nav-link">Services</Link>
        </li>
        <li className="hover:font-bold inline-block py-0 px-5 min-w-fit">
            <Link href="/about" className="nav-link">About</Link>
        </li>
        <li className="hover:font-bold inline-block py-0 px-5 min-w-fit">
            <Link href="/booking" className="nav-link">Booking</Link>
        </li>
        <li className="hover:font-bold inline-block py-0 px-5 min-w-fit">
            <Link href="/pricing" className="nav-link">Pricing</Link>
        </li>
    </ul>
    
    </nav>
  )
}

export default NavBar