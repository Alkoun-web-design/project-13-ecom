import { categories } from "@/lib/products"
import H1 from "@/components/H1"
import H2 from "@/components/H2"
import Link from "next/link";

export default async function Page() {
    return (
        <div className="col-span-full grid grid-cols-subgrid place-content-center">
            <div className="col-start-2 col-end-12 mt-20">
              <Link href="/" className="text-xl text-gray-500 hover:text-gray-900 hover:underline mx-1">Home</Link>
              <span className="inline-block text-xl mx-1">/</span>
              <p className="inline-block text-xl mx-1">Category</p>
            </div>

            <div className="col-span-full justify-self-center mb-5">
              <H1 heading="Categories" />
            </div>
            <div className="grid grid-cols-subgrid col-span-full mt-5 mb-20 px-6">
              { categories.map(category => 
                <Link key={category} href={`/categories/${category.toLowerCase()}`} className={`col-span-6 md:col-span-3 bg-gray-700 h-80 text-gray-100 justify-items-center text-center my-4 hover:-translate-y-1 transition-all duration-300 ease-out`}>
                  <H2 heading={category} />
                </Link>
              )}
            </div>            
        </div>
    )
}