import Link from 'next/link';
import CheckoutSection from '@/components/CheckoutSection';
export default function Page() {

    return (
        <div className="grid grid-cols-subgrid col-start-2 col-end-12">
            <div className="col-span-full mt-20">
              <Link href="/" className="text-xl text-gray-500 hover:text-gray-900 hover:underline mx-1">Home</Link>
              <span className="inline-block text-xl  mx-1">/</span>
              <Link href="/shopping-cart" className="text-xl text-gray-500 hover:text-gray-900 hover:underline mx-1">Shopping Cart</Link>
              <span className="inline-block text-xl  mx-1">/</span><p className="inline-block text-xl  mx-1">Checkout</p>
            </div>
            <CheckoutSection />
        </div>
    );
}