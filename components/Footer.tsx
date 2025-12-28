import Link from "next/link"

export default function Footer() {
    return (
        <footer className="py-2 px-4">
            <nav>
                <ul className="flex flex-row">
                    <li className="px-2"><Link href={'/'}>Home</Link></li>
                    <li className="px-2"><Link href={'/products'}>Products</Link></li>
                </ul>
            </nav>
        </footer>
    )
}