import H1 from "@/components/H1";
import H2 from "@/components/H2";
import Link from "next/link"

export default function Page() {
    return (
        <>
            <div className="col-start-2 col-end-12">
                <div className="col-span-full mt-20">
                  <Link href="/" className="text-xl text-gray-500 hover:text-gray-900 hover:underline mx-1">Home</Link>
                  <span className="inline-block text-xl  mx-1">/</span><p className="inline-block text-xl  mx-1">Shipping Policy</p>
                </div>
            <H1 heading="Shipping Policy" />

            <H2 heading="Order Processing Time"/>
            <p className="py-1 px-2">All orders are processed within 1–2 business days. During peak seasons, processing may take up to 3 business days.</p>

            <H2 heading="Shipping Time"/>
            <p className="py-1 px-2">Cairo: 1–3 business days</p>
            <p className="py-1 px-2">Other Governorates: 2–5 business days</p>
            <p className="py-1 px-2">Remote Areas: 4–7 business days</p>

            <H2 heading="Shipping Fees"/>
            <p className="py-1 px-2">Shipping fees are calculated at checkout and may vary based on your location.</p>

            <H2 heading="Order Tracking" />
            <p className="py-1 px-2">Once your order is shipped, you will receive an SMS or WhatsApp message with tracking details or the courier’s contact information.</p>

            <H2 heading="Delivery Attempts" />
            <p className="py-1 px-2">The courier will attempt delivery twice. If the order is not received, it will be returned to our warehouse.</p>

            <H2 heading="Damaged or Incorrect Items" />
            <p className="py-1 px-2">If you receive a damaged or incorrect item, please contact us within 24 hours of delivery with clear photos, and we will replace it immediately.</p>

            <H2 heading="Incorrect Address"/>
            <p className="py-1 px-2">Customers are responsible for providing accurate shipping information. Any additional shipping charges due to incorrect details will be the customer’s responsibility.</p>

            <H2 heading="Contact Us" />
            <p className="py-1 px-2">If you have any questions about shipping or your order:</p>
            <p className="py-1 px-2">Customer Support: 01008118388</p>
            <p className="py-1 px-2">Email: e-commerce@brandhouse-eg.com</p>
            </div>
        </>
    )
}