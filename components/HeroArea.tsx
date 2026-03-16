import H1 from "./H1"
import H2 from "./H2"
import { Bodoni_Moda, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: "400",
  subsets: ["latin"],
});

export default function HeroArea() {
    return (
        <div className="col-span-full grid grid-cols-subgrid">
            <div className="col-span-full h-206">
                <video src="/bg.mp4" autoPlay muted loop className="w-full h-full object-cover"></video> 
                <div className="absolute top-100 z-10 px-5 md:col-span-6 md:px-20 bg-opacity-50 p-2"> 
                    <h1 className={`${playfair.className} text-5xl my-10 text-gray-100`}>NEW STITCH</h1>
                    <h2 className={`${playfair.className} text-3xl mt-8 mb-6 text-gray-100`}>A style that sets itself apart from the rest.</h2>
                </div>
            </div>
        </div>
    )
}