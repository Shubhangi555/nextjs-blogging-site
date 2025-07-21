import Link from "next/link";
import "../../styles/Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">My Blog</div>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/categories">Categories</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
