import Link from "next/link"
import H2 from "./H2"
import H3 from "./H3"
import { categories } from "@/lib/products";

const currentYear = new Date().getFullYear()
export default function Footer() {
    return (
        <footer className="bg-gray-700 text-gray-100 grid grid-cols-subgrid col-span-12 px-12 py-4 justify-items-center">
            <div className="col-span-full md:col-span-3">
                <H2 heading="NEW STITCH"/>
            </div>
            <nav className="col-span-full justify-items-start md:col-span-3">
                <ul className="mx-2 justify-start">
                    <li><H3 heading={'Store'} /></li>
                    <Link href={'/'}><li className="px-4 py-2 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all">Home</li></Link>
                    <Link href={'/products'}><li className="px-4 py-2 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all">Products</li></Link>
                    <Link href={'/contact-us'}><li className="px-4 py-2 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all">Contact Us</li></Link>
                </ul>
            </nav>
            <nav className="col-span-full justify-items-start md:col-span-3">
                <ul className="mx-2 justify-start">
                    <li><H3 heading={'Categories'} /></li>
                    {categories.map(category => <Link key={category} href={`/categories/${category}`}><li className="px-4 py-2 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all">
                        {category}
                    </li></Link>)}
                </ul>
            </nav>
            <nav className="col-span-full justify-items-start md:col-span-3">
                <ul className="mx-2 justify-start">
                    <li><H3 heading={'Legal'} /></li>
                    <Link href={'/privacy-policy'}><li className="px-4 py-2 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all">Privacy Policy</li></Link>
                    <Link href={'/shipping-policy'}><li className="px-4 py-2 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all">Shipping Policy</li></Link>
                    <Link href={'/refund-policy'}><li className="px-4 py-2 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all">Refund Policy</li></Link>
                    <Link href={'/terms-and-conditions'}><li className="px-4 py-2 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all">Terms & Conditions</li></Link>
                </ul>
            </nav>
            <div className="col-span-full bg-gray-700 text-gray-100 mt-12 mb-2">
                Copyright {currentYear}
            </div>
        </footer>
    )
}