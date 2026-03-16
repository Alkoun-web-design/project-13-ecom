
import { Bodoni_Moda, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: "400",
  subsets: ["latin"],
});
export default function H3({heading}: {heading: string}) {
    return (
        <h1 className={`${playfair.className} text-lg md:text-2xl mt-6 mb-4`}>{heading}</h1>
    )
}