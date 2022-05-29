import React from "react";

const AboutUs = () => {
    return(
    <div>
    <section className='breadcrumbs-section'>
            <div className='container'>
                 <div className='row'>
                     <div className='col 12'>
                        <h1>About Us</h1>
                    </div>
                </div>
            </div>
        
        
    </section>

    <section className='breadcrumbs-section'>
        <div className='container'>
            <div className='row'>
                <div className='col 12'>
                    <p>About Me Section or Maybe Photo
                        <hr/>
                   </p>
                </div>
            </div>
        </div>
    </section>

    <section className='form-section'>
        <div className='container'>
            <div className='row'>
                <div className='col md-3'>
                <img src="/Raven512.png"  class="img-fluid" alt="Responsive"/>
                </div>

                <div className='col md-6 History Section'>
                    <h5>My History</h5>
                    <p>
                    I opened my doors in April of 2019 with the goal of creating a full-service mobile and
                    comprehensive dog boarding destination. Over the past 7 years in the industry, 
                    i’ve focused on continuously improving my processes and 
                    procedures to provide the best care for your dogs!
                    </p>
                    <h5>The Name</h5>
                    <p>
                    Pet Stylist of Atlanta. 
                    These words reflect my love of dogs and my thirst for understanding
                     and sharing everything there is to know about dogs. I see it as a a seed for future manifestions!
                     As I become the go to Groomer for Atlanta and surrounding areas. 
                    </p>
                    
                </div>

            </div>
        </div>
    </section>
    <br/>

    <section className='form-section'>
        <div className='container'>
            <div className='row'>

            <div className='col md-6 Facility'>
                    <h5>The Facility</h5>
                    <p>
                    At 2,000 square feet, my facility is considerably larger than most indepent boarders. 
                    Within the vast space provided are various safety conscious constructions 
                    specifically tailored for our four legged guests. With such a large facility 
                    I never fill up for daycare and generally very accommodating for short notice boarding stays.
                    </p>
                    
                </div>

                <div className='col md-6'>
                <img src="https://res.cloudinary.com/ianlovelace1/image/upload/v1652187879/kennel-shot-1024x682_mhs5sg.jpg" alt="Dog Boarding" width="700" height="600"/>
                </div>

                

            </div>
        </div>
    </section>
    <br/>
    <br/>
                
   </div>
    )
}

export default AboutUs;