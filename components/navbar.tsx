import Link from "next/link";
import MainNav from "./main-nav";
import { Button } from "./ui/button";
import { GithubIcon, LinkedinIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className='border-b sticky top-0 z-50 bg-background'>
      <div className='flex h-16 items-center justify-between px-8 md:px-24 lg:px-40'>
        <h2 className="font-extrabold tracking-wider text-lg">Er.</h2>
        <MainNav />
        <div className="flex">
          <Button asChild variant="ghost" size="icon">
            <Link href="https://github.com/AkabaneErlangga/" target="_blank">
              <GithubIcon />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href="https://www.linkedin.com/in/erlangga-aditya-789291184/" target="_blank">
              <LinkedinIcon />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;