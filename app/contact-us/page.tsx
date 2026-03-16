import H1 from "@/components/H1"
import Link from "next/link"
import ContactForm from "@/components/ContactForm"

export default function Page() {
  return (
    <div className="grid grid-cols-subgrid col-start-2 col-end-12">
      <div className="col-span-full mt-20">
        <Link href="/" className="text-xl text-gray-500 hover:text-gray-900 hover:underline mx-1">Home</Link>
        <span className="inline-block text-xl  mx-1">/</span><p className="inline-block text-xl  mx-1">Contact Us</p>
      </div>
      <div className="col-span-full justify-self-center mb-5">
        <H1 heading="Contact Us" />
      </div>
      <div className="col-span-full justify-self-center mb-10">
        <p>Your feedback allows us to improve and ensures we continue to meet your expectations.</p>
      </div>
      <ContactForm />
    </div>
  )
}