import Image from "next/image";
import { products } from "../app/products/lib/products";
import Slider from "../components/Slider";
 
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Landing Page</h1>

        <div>
          <h2>Most Popular</h2>
        </div>
        
        <div>
          <h2>New Additions</h2>
          
        </div>

        <div>
          <h2>Smartphones:</h2>
          <Slider products={products} category="smartphones"/>
        </div>

        <div>
          <h2>Laptops:</h2>
          <Slider products={products} category="laptops"/>
        </div>

        <div>
          <h2>Earphones:</h2>
          <Slider products={products} category="earphones"/>
        </div>

        <div>
          <h2>Accessories:</h2>
          <Slider products={products} category="accessories"/>
        </div>

      </main>
    </div>
  );
}
