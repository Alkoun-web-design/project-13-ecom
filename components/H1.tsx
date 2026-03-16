
import { Bodoni_Moda, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: "400",
  subsets: ["latin"],
});

export default function H1({heading}: {heading: string}) {
    return (
        <h1 className={`${playfair.className} text-3xl md:text-5xl my-5`}>{heading}</h1>
    )
}