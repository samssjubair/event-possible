import React from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
    const sendEmail=(e)=>{
        e.preventDefault();
        console.log(e.target);

        emailjs.sendForm('service_zv2e5ie', 'template_3po60zm', e.target, 'user_BRbBMhU7EzvCNwfLmhtui')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();

    }
    return (
        <div className="text-center mt-5 bg-dark p-5">
            <div className="mb-5 text-light">
                <h2>Want to know more?</h2>
                <h1><span className="brand-color">Email</span> Us</h1>
            </div>
            <div className="col-md-8 mx-auto">
                <form onSubmit={sendEmail}>
                    <div className="form-group mb-3">
                        <input placeholder="Name" type="text" name="name" className="form-control"/>
                    </div>
                    <div className="form-group mb-3">
                        <input placeholder="Your Contact Number" type="text" name="number" className="form-control"/>
                    </div>
                    <div className="form-group mb-3">
                        <input placeholder="Subject" type="text" name="subject" className="form-control"/>
                    </div>
                    <div className="form-group mb-5">
                        <textarea cols="30" rows="7" name="message" placeholder="message" type="text" className="form-control"/>
                    </div>
                    <div className="form-group text-center ">
                        <button className="btn btn-outline-danger px-4" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <hr style={{color: 'white',marginTop: '50px'}}/>
        </div>
    );
};

export default ContactUs;