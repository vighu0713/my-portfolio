import React, { useState } from 'react'
import '../contact/contact.css'

const Contact = () => {
    const [value,setValue]=useState({
        Fullname:'',
        email:'',
        msg:''
    })
    const inputData = (event) => {
        const { name,value } = event.target;
        setValue((preVal) => {
            return {
                ...preVal,
                [name]: value             
            }
        })
    }
    const submitForm=(e)=>{
        // e.preventDefault()
        alert(`Thank You ${value.Fullname} Your Message has been sent`)
    }
    return (
        <>
            <div className="contact d-flex">
                <div className="contactWrapper">
                    <div className="contactTitle">
                        <h2 className="title">Write To Me</h2>
                    </div>
                    <div className="contactWrapper">
                    <div className="contactForm">
                        <form action="" onSubmit={submitForm}>
                        <input type="text" name="Fullname" id="" placeholder="Your Name" value={value.Fullname} onChange={inputData}/>
                        <input type="email" name="email" id="" placeholder="Your Email" value={value.email} onChange={inputData}/>
                        <textarea name="msg" id="" cols="30" rows="10" placeholder="write your message" value={value.msg} onChange={inputData}/>
                        <button type="submit" className="Contactbtn">Send Message</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
