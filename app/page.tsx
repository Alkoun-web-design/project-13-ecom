import Image from "next/image";
import Link from "next/link";
import { products, categories } from "@/lib/products";
// import Slider from "../components/Slider";
import Slider2 from "@/components/Slider2";
import H2 from "../components/H2";
import HeroArea from "@/components/HeroArea";
import CategoryGrid from "@/components/CategoryGrid";
 
export default function Home() {
  return (
    <>
        <HeroArea />
        <CategoryGrid />
        {categories.map((category) => (
          <div key={category} className="grid grid-cols-subgrid col-span-12 my-10">
            <div className="grid grid-cols-subgrid col-start-2 col-end-12">
              <H2 heading={category} />
              <Slider2 products={products} category={category}/>
            </div>
          </div>
        ))}
        
      </>
  );
}
