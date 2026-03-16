'use client'

import {useState} from "react"

export default function ContactForm() {
    
    const [form, setForm] = useState({name: '', email: '', phone: '', comments: ''})

    function handleFormChange(e:  React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        setForm({...form, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e: React.FormEvent<HTMLButtonElement>){
        e.preventDefault()
        console.log('client side', form)
        try {
            const response = await fetch(`http://localhost:3000/api/contact`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(form)
            })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className="col-span-full justify-self-center mb-20">
            <form className="" >
                <div className="py-1 px-2">
                  <label className="block text-sm" htmlFor="name">Full Name</label>
                  <input required className="border border-gray-500 p-2" name="name" type="text" placeholder="Name" onChange={handleFormChange}/>
                </div>
                <div className="py-1 px-2">
                  <label className="block text-sm" htmlFor="email">Email: </label>
                  <input required className="border border-gray-500 p-2" name="email" type="email" placeholder="Email" onChange={handleFormChange}/>
                </div>
                <div className="py-1 px-2">    
                  <label className="block text-sm" htmlFor="phone">Phone: </label>
                  <input required className="border border-gray-500 p-2" name="phone" type="tel" inputMode="numeric" pattern="[0-9]*" placeholder="Phone Number" onChange={handleFormChange}/>
                </div>
                <div className="py-1 px-2">    
                  <label htmlFor="comments" className="block text-sm">Comments</label>
                  <textarea name="comments" id="comments" required className="border border-gray-500 p-2" onChange={handleFormChange}/>
                </div>
                <button onClick={handleSubmit}>
                    Submit Form
                </button>
            </form>
      </div>
    )
}
