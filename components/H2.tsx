
import { Bodoni_Moda, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: "400",
  subsets: ["latin"],
});

export default function H2({heading}: {heading: string}) {
    return (
        <h1 className={`${playfair.className} text-xl md:text-3xl mt-8 mb-6`}>{heading}</h1>
    )
}