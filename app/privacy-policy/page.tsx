import H1 from "@/components/H1";
import H2 from "@/components/H2";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className="col-start-2 col-end-12">
                <div className="col-span-full mt-20">
                  <Link href="/" className="text-xl text-gray-500 hover:text-gray-900 hover:underline mx-1">Home</Link>
                  <span className="inline-block text-xl  mx-1">/</span><p className="inline-block text-xl  mx-1">Privacy Policy</p>
                </div>
            <H1 heading="Privacy Policy" />
            <p className="py-1 px-2">Last updated: September 18, 2025</p>
            <p className="py-1 px-2">Brand House operates this store and website, including all related information, content, features, tools, products and services, in order to provide you, the customer, with a curated shopping experience (the "Services"). Brand House is powered by Shopify, which enables us to provide the Services to you. This Privacy Policy describes how we collect, use, and disclose your personal information when you visit, use, or make a purchase or other transaction using the Services or otherwise communicate with us. If there is a conflict between our Terms of Service and this Privacy Policy, this Privacy Policy controls with respect to the collection, processing, and disclosure of your personal information. </p>
            <p className="py-1 px-2">Please read this Privacy Policy carefully. By using and accessing any of the Services, you acknowledge that you have read this Privacy Policy and understand the collection, use, and disclosure of your information as described in this Privacy Policy.</p>
            
            <H2 heading="Personal Information We Collect or Process"/>
            <p className="py-1 px-2">When we use the term "personal information," we are referring to information that identifies or can reasonably be linked to you or another person. Personal information does not include information that is collected anonymously or that has been de-identified, so that it cannot identify or be reasonably linked to you. We may collect or process the following categories of personal information, including inferences drawn from this personal information, depending on how you interact with the Services, where you live, and as permitted or required by applicable law:</p>
            <dl>
                <dt className="pt-1 px-2">Contact details</dt>
                <dd className="pb-1 px-2">including your name, address, billing address, shipping address, phone number, and email address.</dd>

                <dt className="pt-1 px-2">Financial information</dt>
                <dd className="pb-1 px-2">including credit card, debit card, and financial account numbers, payment card information, financial account information, transaction details, form of payment, payment confirmation and other payment details.</dd>

                <dt className="pt-1 px-2">Account information</dt>
                <dd className="pb-1 px-2">including your username, password, security questions, preferences and settings.</dd>

                <dt className="pt-1 px-2">Transaction information</dt>
                <dd className="pb-1 px-2">including the items you view, put in your cart, add to your wishlist, or purchase, return, exchange or cancel and your past transactions.</dd>

                <dt className="pt-1 px-2">Communications with us</dt>
                <dd className="pb-1 px-2">including the information you include in communications with us, for example, when sending a customer support inquiry.</dd>

                <dt className="pt-1 px-2">Device information </dt>
                <dd className="pb-1 px-2">including information about your device, browser, or network connection, your IP address, and other unique identifiers.</dd>

                <dt className="pt-1 px-2">Usage information</dt>
                <dd className="pb-1 px-2">including information regarding your interaction with the Services, including how and when you interact with or navigate the Services.</dd>
            </dl>

            <H2 heading="Personal Information Sources"/>
            <p className="py-1 px-2">We may collect personal information from the following sources:</p>
            <dl>
                <dt className="pt-1 px-2">Directly from you</dt>
                <dd className="pb-1 px-2">including when you create an account, visit or use the Services, communicate with us, or otherwise provide us with your personal information;</dd>

                <dt className="pt-1 px-2">Automatically through the Services</dt>
                <dd className="pb-1 px-2">including from your device when you use our products or services or visit our websites, and through the use of cookies and similar technologies;</dd>

                <dt className="pt-1 px-2">From our service providers</dt>
                <dd className="pb-1 px-2">including when we engage them to enable certain technology and when they collect or process your personal information on our behalf; </dd>

                <dt className="pt-1 px-2">Transaction information</dt>
                <dd className="pb-1 px-2">including the items you view, put in your cart, add to your wishlist, or purchase, return, exchange or cancel and your past transactions.</dd>

                <dt className="py-1 px-2">From our partners or other third parties.</dt>
            </dl>

            <H2 heading="How We Use Your Personal Information"/>
            <p className="py-1 px-2">Depending on how you interact with us or which of the Services you use, we may use personal information for the following purposes:</p>
            <dl>
                <dt className="pt-1 px-2">Provide, Tailor, and Improve the Services.</dt>
                <dd className="pb-1 px-2">We use your personal information to provide you with the Services, including to perform our contract with you, to process your payments, to fulfill your orders, to remember your preferences and items you are interested in, to send notifications to you related to your account, to process purchases, returns, exchanges or other transactions, to create, maintain and otherwise manage your account, to arrange for shipping, to facilitate any returns and exchanges, to enable you to post reviews, and to create a customized shopping experience for you, such as recommending products related to your purchases. This may include using your personal information to better tailor and improve the Services.</dd>

                <dt className="pt-1 px-2">Marketing and Advertising.</dt>
                <dd className="pb-1 px-2">We use your personal information for marketing and promotional purposes, such as to send marketing, advertising and promotional communications by email, text message or postal mail, and to show you online advertisements for products or services on the Services or other websites, including based on items you previously have purchased or added to your cart and other activity on the Services. </dd>

                <dt className="pt-1 px-2">Security and Fraud Prevention.</dt>
                <dd className="pb-1 px-2">We use your personal information to authenticate your account, to provide a secure payment and shopping experience, detect, investigate or take action regarding possible fraudulent, illegal, unsafe, or malicious activity, protect public safety, and to secure our services. If you choose to use the Services and register an account, you are responsible for keeping your account credentials safe. We highly recommend that you do not share your username, password or other access details with anyone else.</dd>

                <dt className="pt-1 px-2">Communicating with You</dt>
                <dd className="pb-1 px-2">We use your personal information to provide you with customer support, to be responsive to you, to provide effective services to you and to maintain our business relationship with you. </dd>

                <dt className="pt-1 px-2">Legal Reasons.</dt>
                <dd className="pb-1 px-2">We use your personal information to comply with applicable law or respond to valid legal process, including requests from law enforcement or government agencies, to investigate or participate in civil discovery, potential or actual litigation, or other adversarial legal proceedings, and to enforce or investigate potential violations of our terms or policies.</dd>
            </dl>

            <H2 heading="How We Disclose Personal Information" />
            <p className="py-1 px-2">In certain circumstances, we may disclose your personal information to third parties for legitimate purposes subject to this Privacy Policy. Such circumstances may include:</p>
            <ul>
                <li className="py-1 px-2">With Shopify, vendors and other third parties who perform services on our behalf (e.g. IT management, payment processing, data analytics, customer support, cloud storage, fulfillment and shipping).</li>
                <li className="py-1 px-2">With business and marketing partners to provide marketing services and advertise to you. For example, we use Shopify to support personalized advertising with third-party services based on your online activity with different merchants and websites. Our business and marketing partners will use your information in accordance with their own privacy notices. Depending on where you reside, you may have a right to direct us not to share information about you to show you targeted advertisements and marketing based on your online activity with different merchants and websites.</li>
                <li className="py-1 px-2">When you direct, request us or otherwise consent to our disclosure of certain information to third parties, such as to ship you products or through your use of social media widgets or login integrations.</li>
                <li className="py-1 px-2">With our affiliates or otherwise within our corporate group.</li>
                <li className="py-1 px-2"> In connection with a business transaction such as a merger or bankruptcy, to comply with any applicable legal obligations (including to respond to subpoenas, search warrants and similar requests), to enforce any applicable terms of service or policies, and to protect or defend the Services, our rights, and the rights of our users or others. </li>
            </ul>

            <H2 heading="Children's Data" />
            <p className="py-1 px-2">The Services are not intended to be used by children, and we do not knowingly collect any personal information about children under the age of majority in your jurisdiction. If you are the parent or guardian of a child who has provided us with their personal information, you may contact us using the contact details set out below to request that it be deleted.As of the Effective Date of this Privacy Policy, we do not have actual knowledge that we "share" or "sell" (as those terms are defined in applicable law) personal information of individuals under 16 years of age.</p>

            <H2 heading="Security and Retention of Your Information" />
            <p className="py-1 px-2">Please be aware that no security measures are perfect or impenetrable, and we cannot guarantee "perfect security." In addition, any information you send to us may not be secure while in transit. We recommend that you do not use unsecure channels to communicate sensitive or confidential information to us.</p>

            <H2 heading="Your Rights and Choices"/>
            <p className="py-1 px-2">Depending on where you live, you may have some or all of the rights listed below in relation to your personal information. However, these rights are not absolute, may apply only in certain circumstances and, in certain cases, we may decline your request as permitted by law.</p>
            
            <dl>
                <dt className="pt-1 px-2">Right to Access / Know.</dt>
                <dd className="pb-1 px-2">You may have a right to request access to personal information that we hold about you.</dd>

                <dt className="pt-1 px-2">Right to Delete.</dt>
                <dd className="pb-1 px-2">You may have a right to request that we delete personal information we maintain about you.</dd>

                <dt className="pt-1 px-2">Right to Correct.</dt>
                <dd className="pb-1 px-2">You may have a right to request that we correct inaccurate personal information we maintain about you.</dd>

                <dt className="pt-1 px-2">Right of Portability.</dt>
                <dd className="pb-1 px-2">You may have a right to receive a copy of the personal information we hold about you and to request that we transfer it to a third party, in certain circumstances and with certain exceptions.</dd>

                <dt className="pt-1 px-2">Managing Communication Preferences.</dt>
                <dd className="pb-1 px-2">We may send you promotional emails, and you may opt out of receiving these at any time by using the unsubscribe option displayed in our emails to you. If you opt out, we may still send you non-promotional emails, such as those about your account or orders that you have made.</dd>
            </dl>
            
            <p className="py-1 px-2">You may exercise any of these rights where indicated on the Services or by contacting us using the contact details provided below. To learn more about how Shopify uses your personal information and any rights you may have, including rights related to data processed by Shopify, you can visit https://privacy.shopify.com/en. </p>
            <p className="py-1 px-2">We will not discriminate against you for exercising any of these rights. We may need to verify your identity before we can process your requests, as permitted or required under applicable law. In accordance with applicable laws, you may designate an authorized agent to make requests on your behalf to exercise your rights. Before accepting such a request from an agent, we will require that the agent provide proof you have authorized them to act on your behalf, and we may need you to verify your identity directly with us. We will respond to your request in a timely manner as required under applicable law.</p>

            <H2 heading="Complaints" />
            <p className="py-1 px-2">If you have complaints about how we process your personal information, please contact us using the contact details provided below. Depending on where you live, you may have the right to appeal our decision by contacting us using the contact details set out below, or lodge your complaint with your local data protection authority.</p>
            
            <H2 heading="International Transfers" />
            <p className="py-1 px-2">Please note that we may transfer, store and process your personal information outside the country you live in.</p>
            <p className="py-1 px-2">If we transfer your personal information out of the European Economic Area or the United Kingdom, we will rely on recognized transfer mechanisms like the European Commission's Standard Contractual Clauses, or any equivalent contracts issued by the relevant competent authority of the UK, as relevant, unless the data transfer is to a country that has been determined to provide an adequate level of protection.</p>
           
            <H2 heading="Changes to This Privacy Policy"/>
            <p className="py-1 px-2">We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on this website, update the "Last updated" date and provide notice as required by applicable law.</p>

            <H2 heading="Contact" />
            <p className="py-1 px-2">Should you have any questions about our privacy practices or this Privacy Policy, or if you would like to exercise any of the rights available to you, please call or email us at e-commerce@brandhouse-eg.com or contact us at 31 Gezirat El Arab, Giza, GZ, 3752523, EG </p>
            </div>
        </>
    )
}