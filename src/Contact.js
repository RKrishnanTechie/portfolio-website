import React from "react";

const Contact = ()=>{
    return(
        
         <section className="page-section" id="contact">
         <div className="container">
           
             <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
            
             <div className="divider-custom">
                 <div className="divider-custom-line"></div>
                 <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                 <div className="divider-custom-line"></div>
             </div>
           
             <div className="row justify-content-center">
             <div className="col-lg-8 col-xl-7">
                

                 <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                   
                     <div className="form-floating mb-3">
                         <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                         <label for="name">Full name</label>
                         <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                     </div>

                     <div className="form-floating mb-3">
                     <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                     <label for="email">Email address</label>
                     <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                     <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                 </div>

                 <div className="form-floating mb-3">
                 <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                 <label for="phone">Phone number</label>
                 <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
             </div>

             <div class="form-floating mb-3">
                                <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height:"10rem"}} data-sb-validations="required"></textarea>
                                <label for="message">Message</label>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>

                            <button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>

                     </form>
                     </div>
                 </div>
         </div>
     </section>
    )
}

export default Contact;