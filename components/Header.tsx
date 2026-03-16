import Link from "next/link"
import ShoppingCartIcon from "./ShoppingCartIcon"
import MobileNav from "./MobileNav"

export default function Header() {
    return (
        <header className="justify-evenly bg-gray-100 dark:bg-gray-900 grid grid-cols-subgrid col-span-12 px-12 pt-4 md:justify-items-center">
            <p className="hidden md:inline col-span-3 text-2xl select-none text-nowrap px-2">NEW STITCH</p>
            <nav className="cols-span-3 md:col-start-4 md:col-end-10">
                <MobileNav />
                <ul className="hidden md:flex md:flex-row">
                    <Link href={'/'}><li className="px-4 py-2 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all">Home</li></Link>
                    <Link href={'/products'}><li className="px-4 py-2 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all">Products</li></Link>
                    <Link href={'/categories'}><li className="px-4 py-2 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all">Categories</li></Link>
                    <Link href={'/contact-us'}><li className="px-4 py-2 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all">Contact Us</li></Link>
                </ul>
            </nav>
            <p className="md:hidden col-start-5 col-end-8 text-lg select-none text-nowrap">NEW STITCH</p>
            <ShoppingCartIcon />
        </header>
    )
}