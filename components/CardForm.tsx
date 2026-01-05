import React from 'react';

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
                <div>
                    <label>16-digit Card Number: </label>
                    <input name="cardNumber" type="text" placeholder="Card Number" onChange={handleCardDetailsChange}/>
                    <label>Expiration Date: </label>
                    <input name="expiryDate" type="text" placeholder="Expiration Date" onChange={handleCardDetailsChange}/>
                    <label>CVC: </label>
                    <input name="cvv" type="text" placeholder="CVC" onChange={handleCardDetailsChange}/>
                </div>
                <button>Make Payment</button>
            </form>
        </>
    )
}