import H1 from "@/components/H1";
import H2 from "@/components/H2";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className="col-start-2 col-end-12">
                <div className="col-span-full mt-20">
                  <Link href="/" className="text-xl text-gray-500 hover:text-gray-900 hover:underline mx-1">Home</Link>
                  <span className="inline-block text-xl  mx-1">/</span><p className="inline-block text-xl  mx-1">Refund Policy</p>
                </div>
                <H1 heading="Refund Policy" />
                <p className="py-1 px-2">We have a 30-day return policy, which means you have 30 days after receiving your item to request a return. </p>
                <p className="py-1 px-2">To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.</p>
                <p className="py-1 px-2">To start a return, you can contact us at e-commerce@brandhouse-eg.com. Please note that returns will need to be sent to the following address: [INSERT RETURN ADDRESS] </p>
                <p className="py-1 px-2">If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted. </p>
                <p className="py-1 px-2">You can always contact us for any return question at e-commerce@brandhouse-eg.com. </p>

            <H2 heading="Damages and issues"/>
            <p className="py-1 px-2">Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.</p>

            <H2 heading="Exceptions / non-returnable items "/>
            <p className="py-1 px-2">Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get in touch if you have questions or concerns about your specific item. </p>
            <p className="py-1 px-2">Unfortunately, we cannot accept returns on sale items or gift cards.</p>

            <H2 heading="Exchanges" />
            <p className="py-1 px-2">The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.</p>

            <H2 heading="European Union 14 day cooling off period " />
            <p className="py-1 px-2">Notwithstanding the above, if the merchandise is being shipped into the European Union, you have the right to cancel or return your order within 14 days, for any reason and without a justification. As above, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.</p>

            <H2 heading="Refund Policy" />
            <p className="py-1 px-2">We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too.</p>
            <p className="py-1 px-2">If more than 15 business days have passed since we’ve approved your return, please contact us at e-commerce@brandhouse-eg.com.</p>
            
            </div>
        </>
    )
}