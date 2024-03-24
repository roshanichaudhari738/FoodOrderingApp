import React  from "react";
import ContactImage from "../../assets/fooda.jpeg";
import "../Style/Contact.css";


function Contact(){
    console.log("Image URL:",ContactImage);
   
    return(
        <div className='contact'>
                <img src="/static/media/fooda.875b8ccf56acb74c6e73.jpeg"/> 
            <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact_form'>
                <label>Full Name</label>
                <input type='text' id='name' name='name' placeholder='Enter your name'/>
                <label>Email</label>
                <input type='text' id='email' name='email' placeholder='Emter Email'/>
                <label>Message</label>
                <textarea name='message' id='message' placeholder='Enter your message' rows="7"></textarea>
                <button type="submit">Send Message</button>
                
            </form>
        </div>
        
    </div>
    )
}
export default Contact