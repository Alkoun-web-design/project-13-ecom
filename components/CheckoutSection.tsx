'use client'

import React from 'react';
import { useShoppingCart } from '@/components/ShoppingCartProvider';
import Link from 'next/link';
// import CardForm from '@/components/CardForm';
import H1 from '@/components/H1';
import H2 from '@/components/H2';
import H3 from '@/components/H3';

export type CustomerDetails = {
    name: string | undefined, 
    email: string | undefined, 
    phone: string | undefined, 
    address: string | undefined, 
    city: string | undefined, 
    country: string | undefined, 
    zip: string | undefined
}

export type CardDetails = {
    cardNumber: string, 
    expiryDate: string, 
    cardName: String, 
    cvv: string
}

export default function CheckoutSection() {

    const countryRef = React.useRef<null | HTMLSelectElement>(null);
    const cityRef = React.useRef<null | HTMLInputElement>(null);
    const zipRef = React.useRef<null | HTMLInputElement>(null);

    let geocodeCountry = '';
    let geocodeCity = '';
    let geocodeZip = '';

    const [customerDetails, setCustomerDetails] = React.useState<CustomerDetails>({name: '', email: '', phone: '', address: '', city: '' , country: '', zip: ''});
    // let customerDetails:CustomerDetails = {name: '', email: '', phone: '', address: '', city: '' , country: '', zip: ''};
    const [paymentType, setPaymentType] = React.useState<"Cash on Delivery" | "Credit Card" >("Credit Card");
    // const [cardDetails, setCardDetails] = React.useState<{cardNumber: string, expiryDate: string, cvv: string}>({cardNumber: '', expiryDate: '', cvv: ''});
    const {shoppingCart} = useShoppingCart();
    const [cardDetails, setCardDetails] = React.useState<CardDetails>({cardNumber:"", expiryDate:"", cardName:"", cvv:""});
    const [isAddressSame, setIsAddressSame] = React.useState<boolean>(false);

    function handleCustomerDetailsChange(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>):void {
        setCustomerDetails({...customerDetails, [e.target.name]: e.target.value})
    }

    function handleCardDetailsChange(e:React.ChangeEvent<HTMLInputElement>):void {
        setCardDetails({...cardDetails, [e.target.name]: e.target.value})
    }

    async function getCustomerLocation(){
        try {
            const repsonse = await fetch('https://api.bigdatacloud.net/data/reverse-geocode-client');
            const data = await repsonse.json();
            geocodeCountry = data.countryName;
            geocodeCity = data.city;
            geocodeZip = data.postCode;
            setCustomerDetails({...customerDetails, city: geocodeCity, country: geocodeCountry, zip: geocodeZip})
            // cityRef.current?.value = geocodeCity
            // console.log(data, geocodeCity, geocodeCountry, geocodeZip);
        } catch (error) {
            console.log(error)
        }
    }

    async function handlePayment() {
        // console.log(cardDetails, customerDetails);
        const {name, email, phone, address, city, country, zip} = customerDetails;
        const {cardNumber, cardName, expiryDate, cvv} = cardDetails;
        if (shoppingCart.items.length === 0) return alert("Order cannot be processed, please add items to your shopping cart")
        if (name === '' || email === '' || phone === '' || address === '' || city === '' || country === '' || zip === '') return alert('Order cannot be processed, please fill in all the customer details')
        if (paymentType === 'Credit Card' && cardNumber === '' || paymentType === 'Credit Card' && cardName === '' || paymentType === 'Credit Card' && expiryDate === '' || paymentType === 'Credit Card' && cvv === '') return alert('Order cannot be processed, please fill in all the card details')
        try {
            const response = await fetch(`http://localhost:3000/api/checkout`, {
                method: "POST", 
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    shoppingCart,
                    customerDetails,
                    cardDetails
                })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        getCustomerLocation();
    },[])

    //     React.useEffect(() => {
    //     console.log(customerDetails)
    // },[customerDetails])
    

    return (
        <>
            {shoppingCart.items.length > 0 ? 
            <>
                <div className="col-span-full my-10 grid grid-cols-subgrid">
                    <div className="col-span-full">
                        <H1 heading="Checkout" />
                    </div>
                    <div className='col-span-full border-b border-gray-700 dark:border-gray-100 my-4'>
                        <H2 heading="Order Summary" />
                    </div>
                    { shoppingCart.items.map(item => (
                        <div className="col-span-full grid grid-cols-subgrid justify-items-center border-b border-gray-700 dark:border-gray-100 py-4" key={item.sku}>
                            <div className='col-span-5 h-48 w-40'>
                                <img className="object-cover h-full w-full" src={item.image} />
                            </div>
                            <div className="col-span-5">
                                <div className="p-2 text-xl">{item.name}</div>
                                <div className="p-2">Quanitiy: {item.quantityAdded}</div>
                                {item.discount > 0 ? 
                                    <div className="p-2">Unit Price: <span className='line-through'>{item.unitPrice}</span> {+((item.unitPrice - ((item.unitPrice * item.discount) / 100))).toFixed(2)}</div> 
                                    : <div className="p-2">Unit Price: {item.unitPrice}</div>
                                }
                                <div className="p-2">Total Price: {+(item.totalPrice).toFixed(2)}</div>
                            </div>
                        </div>
                    ))}
                    <div className='col-span-full grid grid-cols-subgrid justify-items-center my-4'>
                        <div className='col-span-full'>
                            <div className="mx-4 my-2 text-lg">SubTotal: {shoppingCart.subTotal}</div>
                            <div className="mx-4 my-2 text-lg">Delivery Charges: {shoppingCart.deliveryCharges}</div>
                            <div className="mx-4 my-2 text-lg">Total Price: {shoppingCart.subTotal - shoppingCart.deliveryCharges}</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-full lg:col-span-5 m-4">
                    <H2 heading="Customer Details" />
                    <form>
                        <div>
                            <div className="py-1 px-2">
                                <label className="block text-sm" htmlFor="name">Full Name</label>
                                <input required className="border border-gray-500 p-2" name="name" type="text" placeholder="Name" onChange={handleCustomerDetailsChange}/>
                            </div>
                            <div className="py-1 px-2">
                                <label className="block text-sm" htmlFor="email">Email: </label>
                                <input required className="border border-gray-500 p-2" name="email" value={customerDetails.email} type="email" placeholder="Email" onChange={handleCustomerDetailsChange}/>
                            </div>
                            <div className="py-1 px-2">    
                                <label className="block text-sm" htmlFor="phone">Phone: </label>
                                <input required className="border border-gray-500 p-2" name="phone" value={customerDetails.phone} type="tel" inputMode="numeric" pattern="[0-9]*" placeholder="Phone Number" onChange={handleCustomerDetailsChange}/>
                            </div>
                            <div className="py-1 px-2">    
                                <label className="block text-sm" htmlFor="address">Shipping Address: </label>
                                <input required className="border border-gray-500 p-2" name="address" value={customerDetails.address} type="text" placeholder="Your Shipping Address" onChange={handleCustomerDetailsChange}/>
                            </div>
                            <div className="py-1 px-2">    
                                <label className="block text-sm" htmlFor="city">City: </label>
                                <input ref={cityRef} required className="border border-gray-500 p-2" value={customerDetails.city} name="city" type="text" placeholder="Your City" onChange={handleCustomerDetailsChange}/>
                            </div>
                            <div className="py-1 px-2">
                                <label className="block text-sm" htmlFor="country">Country: </label>
                                <select ref={countryRef} required autoComplete="country" name="country" value={customerDetails.country} className={ countryRef.current?.value === 'Select Country' ? `text-gray-400 border border-gray-500 p-2` : `text-gray-900 border border-gray-500 p-2`} 
                                onChange={handleCustomerDetailsChange}
                                >
                                    <option>Select Country</option>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Åland Islands">Åland Islands</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">American Samoa</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antarctica">Antarctica</option>
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Aruba">Aruba</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bermuda">Bermuda</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia (Plurinational State of)">Bolivia (Plurinational State of)</option>
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Bouvet Island">Bouvet Island</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cabo Verde">Cabo Verde</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Caribbean Netherlands">Caribbean Netherlands</option>
                                    <option value="Cayman Islands">Cayman Islands</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Christmas Island">Christmas Island</option>
                                    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
                                    <option value="Cook Islands">Cook Islands</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Curaçao">Curaçao</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Eswatini (Swaziland)">Eswatini (Swaziland)</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                    <option value="Faroe Islands">Faroe Islands</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="French Guiana">French Guiana</option>
                                    <option value="French Polynesia">French Polynesia</option>
                                    <option value="French Southern Territories">French Southern Territories</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Gibraltar">Gibraltar</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Greenland">Greenland</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guadeloupe">Guadeloupe</option>
                                    <option value="Guam">Guam</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guernsey">Guernsey</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran">Iran</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Isle of Man">Isle of Man</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jersey">Jersey</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Korea, North">Korea, North</option>
                                    <option value="Korea, South">Korea, South</option>
                                    <option value="Kosovo">Kosovo</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libya">Libya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Macao">Macao</option>
                                    <option value="Macedonia North">Macedonia North</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Martinique">Martinique</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Micronesia">Micronesia</option>
                                    <option value="Moldova">Moldova</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montenegro">Montenegro</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar (Burma)">Myanmar (Burma)</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                                    <option value="New Caledonia">New Caledonia</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Niue">Niue</option>
                                    <option value="Norfolk Island">Norfolk Island</option>
                                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau">Palau</option>
                                    <option value="Palestine">Palestine</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Pitcairn Islands">Pitcairn Islands</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Puerto Rico">Puerto Rico</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Reunion">Reunion</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russian Federation">Russian Federation</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="Saint Barthelemy">Saint Barthelemy</option>
                                    <option value="Saint Helena">Saint Helena</option>
                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option value="Saint Lucia">Saint Lucia</option>
                                    <option value="Saint Martin">Saint Martin</option>
                                    <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Serbia and Montenegro">Serbia and Montenegro</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leone">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Sint Maarten">Sint Maarten</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                                    <option value="South Sudan">South Sudan</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syria">Syria</option>
                                    <option value="Taiwan">Taiwan</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania">Tanzania</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Timor-Leste">Timor-Leste</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tokelau">Tokelau</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey (Türkiye)">Turkey (Türkiye)</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="U.S. Outlying Islands">U.S. Outlying Islands</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Vatican City Holy See">Vatican City Holy See</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Virgin Islands, British">Virgin Islands, British</option>
                                    <option value="Virgin Islands, U.S">Virgin Islands, U.S</option>
                                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                                    <option value="Western Sahara">Western Sahara</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                                </select>
                            </div>
                            <div className="py-1 px-2">    
                                <label className="block text-sm" htmlFor="zip">Zip code: </label>
                                <input ref={zipRef} required className="border border-gray-500 p-2" name="zip" type="text" inputMode="numeric" pattern="[0-9]*" placeholder="Your zip-code" onChange={handleCustomerDetailsChange}/>
                            </div>                                                        
                        </div>
                        {/* <button type="submit"></button> */}
                    </form>
                </div>

                <div className="col-span-full lg:col-span-5 m-4">
                    <H2 heading="Choose your payment method" />
                    <div className='flex flex-row'>
                        <div className="py-1 px-2">    
                            <label htmlFor="credit-card">Credit Card</label>
                            <input type="radio" name="payment-type" onChange={() => setPaymentType("Credit Card")}/>
                        </div>
                        <div className="py-1 px-2">
                            <label htmlFor="cash-on-delivery">Cash On Delivery</label>
                            <input type="radio" name="payment-type" onChange={() => setPaymentType("Cash on Delivery")}/>
                        </div>
                    </div>
                    {paymentType === 'Cash on Delivery' && (
                        <>
                            <H3 heading="Cash on Delivery" />
                            <form>
                                <div className="py-1 px-2">
                                    <div className="py-1 px-2">    
                                        <input className="inline-block mr-2" type="checkbox" name="is shipping-billing-address-same" onChange={() => setIsAddressSame(!isAddressSame)}/>
                                        <label htmlFor="is shipping-billing-address-same" className="inline-block" >Shipping address the same as your billing address? </label>
                                    </div>
                                    {
                                        isAddressSame ? (
                                            <div className="py-1 px-2">    
                                                 <p>Your Order will be delivered and billed to the same address.</p>
                                            </div>
                                        ) : (
                                            <div className="py-1 px-2">    
                                                <label htmlFor="billing-address" className="inline-block text-sm" >Billing Address</label>
                                                <input className="block border border-gray-500 p-2" name="billing-address" type="text" placeholder="Your Billing Address" onChange={handleCardDetailsChange}/>        
                                            </div>
                                        )
                                    }
                                </div>
                            </form>
                        </>
                    )}
                    {paymentType === 'Credit Card' && (
                        <>
                            <H3 heading="Credit Card" />
                            <form>
                                <div className="py-1 px-2">
                                    <label className="block text-sm" >16-digit Card Number: </label>
                                    <input className="border border-gray-500 p-2" name="cardNumber" type="text" placeholder="Card Number" onChange={handleCardDetailsChange}/>
                                </div>
                                <div className="py-1 px-2">
                                    <label className="block text-sm">Expiration Date: </label>
                                    <input className="border border-gray-500 p-2" name="expiryDate" type="text" placeholder="Expiration Date" onChange={handleCardDetailsChange}/>
                                </div>
                                <div className="py-1 px-2">
                                    <label className="block text-sm">Name: </label>
                                    <input className="border border-gray-500 p-2" name="cardName" type="text" placeholder="Card Name" onChange={handleCardDetailsChange}/>
                                </div>
                                <div className="py-1 px-2">
                                    <label className="block text-sm">CVC: </label>
                                    <input className="border border-gray-500 p-2" name="cvv" type="text" placeholder="CVC" onChange={handleCardDetailsChange}/>
                                </div>
                            </form>
                        </>
                    )}
                </div>
                <div className='col-span-full mx-auto mt-10 mb-20'>
                    <button onClick={handlePayment} className="inline-block border border-gray-800 dark:border-gray-100 text-gray-100 dark:text-gray-800 bg-gray-800 dark:bg-gray-100 px-10 py-5 cursor-pointer hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-100 transition-all">
                        Confirm Order
                    </button>
                </div>
            </>
            : 
            <div className='col-span-full my-40'>
                <div className="mx-4 mt-25 my-30">
                    <H1 heading="Your Shopping Cart is currently empty."/>
                </div>
                <div className="mx-auto">
                    <Link className="w-fit inline-block my-2 mx-2 bg-gray-300 dark:bg-gray-700 px-5 py-3 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all" href="/">
                        Return to Home
                    </Link>
                    <Link className="w-fit inline-block my-2 mx-2 bg-gray-300 dark:bg-gray-700 px-5 py-3 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all" href="/products">
                        Return to Products
                    </Link>
                </div>
            </div>
            }
        </>
    );
}