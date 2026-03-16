// import H1 from "@/components/H1"
import H1 from "@/components/H2"
import ShoppingCartDetails from "@/components/ShoppingCartDetails"
import Link from "next/link"

export default function Page() {

    return (
        <div className="grid grid-cols-subgrid col-start-2 col-end-12">
            <div className="col-span-full mt-20">
              <Link href="/" className="text-xl text-gray-500 hover:text-gray-900 hover:underline mx-1">Home</Link>
              <span className="inline-block text-xl  mx-1">/</span><p className="inline-block text-xl  mx-1">Shopping Cart</p>
            </div>
            <div className="col-span-full my-10 grid grid-cols-subgrid">
                <div className='col-span-full border-b border-gray-700 dark:border-gray-100 my-4'>
                    <H1 heading="Shopping Cart" />
                </div>
            </div>
            <ShoppingCartDetails />
        </div>
    )
}