'use client'

import { categories } from "@/lib/products";
import H2 from "./H2";
import Link from "next/link";

export default function CategoryGrid() { 
    return (
      <div className="grid grid-cols-subgrid col-start-2 col-end-12 my-10">
        <div  className="col-span-full">
          <H2 heading="Categories"/>
        </div>
        <div className="grid grid-cols-subgrid col-start-2 col-end-12 my-4">
          { categories.map(category => 
            <Link key={category} className="col-span-4 h-fit my-4 hover:-translate-y-2 transition-all duration-300 ease-in" href={`/categories/${category}`}> 
            { category === 'Suits' ? (  
                <div className={`h-50 text-center align-middle bg-[url('/bl-su.jpg')] bg-cover bg-center bg-no-repeat text-gray-900 border border-gray-500`}>  
                    {/* <div className="h-full bg-black opacity-50"> */}
                    <h2 className="text-2xl text-gray-100">{category}</h2>
                    {/* </div> */}
                </div>
              ) : category === 'Shirts' ? (
                <div className={`h-50 text-center align-middle bg-[url('/blu-sh.jpg')] bg-cover bg-center bg-no-repeat text-gray-900 border border-gray-500`}>  
                    <h2 className="text-2xl text-gray-100">{category}</h2>
                </div>
              ) : category === 'Pants' ? (
                <div className={`h-50 text-center align-middle bg-[url('/gre-pa.jpg')] bg-cover bg-center bg-no-repeat text-gray-900 border border-gray-500`}>  
                    <h2 className="text-2xl text-gray-100">{category}</h2>
                </div>
              ) : category === 'Coats' ? (
                <div className={`h-50 text-center align-middle bg-[url('/mu-co.jpg')] bg-cover bg-center bg-no-repeat text-gray-900 border border-gray-500`}>  
                    <h2 className="text-2xl text-gray-100">{category}</h2>
                </div>
              ) : null
            } 
            </Link>
          )}
        </div> 
      </div>
    )
}
