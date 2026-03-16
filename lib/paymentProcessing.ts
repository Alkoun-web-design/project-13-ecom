

export default async function paymentProcessing({customerDetails, cardDetails}: {customerDetails: any, cardDetails: any}) {
    console.log('Cusotmer and card details have been received', cardDetails)
    const {cardNumber, cardName, expiryDate, cvv} = cardDetails
    const {name, email, phone, address, city, country, zip} = customerDetails
    try {
        const response = await fetch("https://test-api.kashier.io/v3/payment/sessions",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '{{secret_key}}',
                'api-key': '{{api_key}}', 
            }
        })

    } catch (error) {

    }
    return { success: true, paymentStatus: 'completed', details: cardDetails };
}