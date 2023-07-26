import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar">
    <Link href="#">
      <Image className="logo" 
      src="/images/logo.png"
       alt="math with antoine" 
       width={230}
       height={200}
       
       />
    </Link>
    
    <ul className="nav-menu">
        <li className="nav-item">
            <Link href="#" className="nav-link">Services</Link>
        </li>
        <li className="nav-item">
            <Link href="#" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
            <Link href="#" className="nav-link">Booking</Link>
        </li>
        <li className="nav-item">
            <Link href="#" className="nav-link">Pricing</Link>
        </li>
    </ul>
    
    </nav>
  )
}

export default NavBar