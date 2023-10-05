import Link from "next/link";

const MainNav = () => {
  return (
    <nav className="hidden md:flex md:items-center md:space-x-6 text-md font-semibold lg:space-x-8">
      <Link href="">Home</Link>
      <Link href="#about">About</Link>
      <Link href="#skills">Skills</Link>
      <Link href="#projects">Projects</Link>
    </nav>
  );
}

export default MainNav;