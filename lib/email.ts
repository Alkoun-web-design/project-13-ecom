import nodemailer from 'nodemailer'
import type { ShoppingCart, ShoppingCartItem } from '@/components/ShoppingCartProvider';
import type { CustomerDetails } from '@/components/CheckoutSection'; 

// type CustomerDataRequest = {
//   customerDetails: CustomerDetails,
//   shoppingCart: ShoppingCart,
//   cardDetails: CardDetails
// }

const testAccount = await nodemailer.createTestAccount();

// Create a transporter using the test account
const transporter = nodemailer.createTransport({
  host: testAccount.smtp.host,
  port: testAccount.smtp.port,
  secure: testAccount.smtp.secure,
  auth: {
    user: testAccount.user,
    pass: testAccount.pass,
  },
});

export default async function sendEmail({customerDetails, shoppingCart}:{customerDetails: CustomerDetails, shoppingCart: ShoppingCart}) {
  console.log('Email data has been received', shoppingCart);
    // const {customerDetails, shoppingCart} = data
    const {name, email, phone, address, city, country, zip} = customerDetails
    const {items, subTotal, deliveryCharges, netTotal} = shoppingCart
    const sellerEmail=""
    const businessEmail="hassam.dvlpr@proton.me"
    const businessName="NEW STITCH"

// Create a transporter using the test account
// const transporter = nodemailer.createTransport({
//   service: 'Hotmail',
//   pool: true, // Enable connection pooling
//   maxConnections: 5, // Maximum number of simultaneous connections (default: 5)
//   maxMessages: 100, // Messages per connection before reconnecting (default: 100)
//   // auth: {
//   //   user: process.env.STORE_EMAIL_USER,
//   //   pass: process.env.STORE_EMAIL_PASSWORD,
//   // },
//   auth: {
//     type: "OAuth2",
//     user: process.env.STORE_EMAIL_USER,
//     accessToken: "ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x",
//   },
// });

  // Email options
  const emailDetails = {
    from: businessEmail,
    to: email,
    bcc: sellerEmail,
    subject: 'Customer Order',
    html: `<h1>'Your Order from ${businessName}'<h1>
    <p>Name:${name}</p>
    <p>Phone Number: ${phone}</p>
    <p>Address: ${address}</p>
    <p>City: ${city}</p>
    <p>Country: ${country}</p>
    <p>Zip: ${zip}</p>
    <h1>Order Details</h1>
    ${items.map((item:ShoppingCartItem) => 
      `<p>Product Name: ${item.name}</p>
      <p>Quantity: ${item.quantityAdded}</p>
      <p>Color: ${item.color}</p>
      <p>Size: ${item.size}</p>
      <p>Fit: ${item.fit}</p>
      <p>Unit Price: ${item.unitPrice}</p>
      <p>Discount: ${item.discount}</p>
      <p>Price: ${item.totalPrice}</p>`)}
      <p>Sub Total: ${subTotal}</p>
      <p> ${deliveryCharges}</p>
      <p>Net Total: ${netTotal}</p>`,
  };

  try {
    const info = await transporter.sendMail(emailDetails);
    console.log('Email sent: ' + info.response);
    // Get the Ethereal URL to preview this email
    const previewUrl = nodemailer.getTestMessageUrl(info);
    console.log("Preview URL: %s", );
    // Output: https://ethereal.email/message/...
    return { success: true, messageId: info.messageId};
  } catch (error:  any) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}