"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-row justify-center items-center">
        <Link href="/welcome">
        <button className={`${pathname == "/welcome" ? 'custom-button-selected' : 'custom-button'}`}>Welcome</button>
        </Link>
        <Link href="/exercise">
        <button className={`${pathname == "/exercise" ? 'custom-button-selected' : 'custom-button'}`}>Exercise</button>
        </Link>
    </div>
  )
}

export default Header