import React, {useState} from 'react';
import './Contact.css';
import baseURL from '../components/config';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        contactNumber: ''
    });

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${baseURL}/api/contact_us`, formData);
            console.log(response.data)

            alert("Your enquiry has been sent!");
            window.location.reload()
        } catch (error) {
            console.error('Error in sending enquiry:', error);
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    
    return (
        <div className="main-body">
            <div className="contact-title-container">
                <h1 className="contact-title">Contact Us</h1>
            </div>

            <div className="contact-form-container">
                <div className="contact-form-details">
                    <div className="contact-form">
                        <div className="contact-field">
                            <label htmlFor="email" className="contact-label">Email</label>
                            <input type="email" id="email" name="Email" placeholder="Enter your email address" className="contact-input" onChange={handleChange} />
                        </div>
                        <div className="contact-field">
                            <label htmlFor="name" className="contact-label">Name</label>
                            <input type="text" id="name" name="Name" placeholder="Enter your name" className="contact-input" onChange={handleChange}/>
                        </div>
                        <div className="contact-field">
                            <label htmlFor="contactNumber" className="contact-label">Contact Number</label>
                            <input type="text" id="name" name="contactNumber" placeholder="Enter your Contact Number" className="contact-input" onChange={handleChange}/>
                        </div>
                        <button onClick={handleSubmit} className="contact-submit-mobile">Contact Us</button>
                    </div>
                    <div className="alter-contact">
                        <div className="alter-title">Alternatively contact us via</div>
                        <p>info@jo-enmedia.com</p>
                        <p>+61 402 530 666</p>
                        <p>2203, 233 Castlereagh Street, 2000, Sydney, NSW</p>
                        <p>Mon - Fri 12:00-18:00</p>
                    </div>
                </div>
                <button onClick={handleSubmit} className="contact-submit">Contact Us</button>
            </div>
        </div>
    );
}

export default Contact;
