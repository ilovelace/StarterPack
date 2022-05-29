import React from 'react';
import { AddressMap } from '../Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons'

  


const ContactPage = () => {
    
    
    
    
    
    
    
    
    
    
    return(       
    <div>
        <section className='breadcrumbs-section'>
                <div className='container'>
                     <div className='row'>
                         <div className='col 12'>
                            <h2>Contact Me</h2>
                                    <ol className="breadcrumb">
                                        <li className='breadcrumb-item'><a href="/">Home</a></li>
                                        <li className='breadcrumb-item active'>Contact Me</li> 
                                     </ol>
                        </div>
                    </div>
                </div>
            
            
        </section>

        <section className='breadcrumbs-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col 12'>
                        <p>I am happy to help. If your you pet has any special requirements/or 
                            any questions about my services; please submit inquiry below. I will do my best to reply with in 24 hours.
                            Or simply give me a call.
                            <hr/>
                       </p>
                    </div>
                </div>
            </div>
        </section>

        <section className='form-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col md-6'>
                        <form action=''>
                            <div className='form-row'>
                            <div className='form-group col md-6'>
                                <input type='text' class='form-control' placeholder='Full Name'/>
                            </div>
                            <div className='form-group col md-6'>
                                <input type='email' class='form-control' placeholder='Email Address'/>
                            </div>
                            </div>

                            <div className='form-row'>
                            <div className='form-group col md-4'>
                                <input type='number' class='form-control' placeholder='Phone Number'/>
                            </div>
                            <div className='form-group col md-4'>
                                <select id="inputCountry" class="form-control">       
                                <option selected>Country Code</option>
                                <option value= "1">+1 United States</option>
                                <option value= "2">+52 Mexico</option>
                                <option value= "3">+1 Canada</option>
                                </select>
                            </div>
                            </div>

                            <div className='form-row'>
                            <div className='form-group col md-12'>
                                <input type='text' class='form-control' placeholder='Subject' />
                            </div>
                            </div>

                            <div className='form-row'>
                            <div className='form-group col md-12'>
                                <textarea className='form-control' rows='5'></textarea>
                            </div>
                            </div>

                            <div className='form-row'>
                            <div className='form-group col pt-2 md-12 text-center'>
                                <button type='submit' className='btn btn-primary'><i class='fas fa-paper-plane'></i>
                                Send Message
                                </button>
                            </div>
                            </div>
                            

                        </form>
                    </div>

                    <div className='col md-6 address'>
                        <h5>Call Me / WhatsApp</h5>
                        <p><a href="tel: +14045551234"><FontAwesomeIcon icon={faPhone}/> +1(404)6781234 </a>
                        </p>
                        <h5>Instagram</h5>
                        <p><a href="tel: +14045551234"><FontAwesomeIcon icon={faCamera}/> @atlgroomsbyraven </a>
                        
                        </p>
                        <h5>Email</h5>
                        <p>
                            <a href='mailto:petstylistATL@gmail.com'><FontAwesomeIcon icon={faMailBulk} /> @ petstylistATL@gmail.com</a><br>
                            </br>
                            <a href='mailto:clementine789@gmail.com'><FontAwesomeIcon icon={faMailBulk}/> @ clementine789@gmail.com</a>
                 
                        </p>
                        <h5> Hours </h5>
                        <p>
                            Tues - Sat : 8am - 7pm(EST) <br>
                            </br>
                            Sun - Monday: By Special Request 
                        </p>
                        <h5>Address</h5>
                        <p>
                            1811 Lakewood Ave Se, Atlanta, GA 30315
                        </p>
                        
                    </div>

                </div>
            </div>
        </section>
        <br/>
        <section>
            <div className='container-fluid'>
                <div className='row'>
                     <div class="col">
                         1 of 3
                    </div>
                    <div className="col-8">
                    <AddressMap/>
                    </div>
                    <div class="col">
                     3 of 3
                    </div>
                </div>
            </div>
           
            
        </section>
        </div>
    )   

        

}

export default ContactPage;