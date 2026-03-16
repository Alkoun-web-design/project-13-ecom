import React from 'react';

function handlePayment() {

}

export default function CardForm() {
    
    const [cardDetails, setCardDetails] = React.useState<{cardNumber: string, expiryDate: string, cvv: string}>({cardNumber:"", expiryDate:"", cvv:""});

    React.useEffect(() => {
        // const timeOutFunction = setTimeout(() => {
        //     handleCardDetailsChange;
        // }, 2000);
        console.log(cardDetails)
        
        // return(() => clearTimeout(timeOutFunction));
    },[cardDetails])

    function handleCardDetailsChange(e:React.ChangeEvent<HTMLInputElement>):void {
        setCardDetails({...cardDetails, [e.target.name]: e.target.value})
    }

    return (
        <>
            <h2>Credit Card</h2>
            <form>
                <div className="py-1 px-2">
                    <label>16-digit Card Number: </label>
                    <input name="cardNumber" type="text" placeholder="Card Number" onChange={handleCardDetailsChange}/>
                </div>
                <div className="py-1 px-2">
                    <label>Expiration Date: </label>
                    <input name="expiryDate" type="text" placeholder="Expiration Date" onChange={handleCardDetailsChange}/>
                </div>
                <div className="py-1 px-2">
                    <label>CVC: </label>
                    <input name="cvv" type="text" placeholder="CVC" onChange={handleCardDetailsChange}/>
                </div>
                <button onClick={() => handlePayment}className="my-2 bg-gray-300 dark:bg-gray-700 px-5 py-3 cursor-pointer hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all">
                    Make Payment
                </button>
            </form>
        </>
    )
}