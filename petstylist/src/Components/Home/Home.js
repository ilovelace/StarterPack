import React from 'react';



const Home = () => {
    return(
        <div>
            <div className="container">
                 <div className="row">
                    <div className="col-sm">
                    </div>
                    <div className="col-sm">             
                    </div>
                    <div className="col-sm">
                            <ol className="breadcrumb">
                                        <li className='breadcrumb-item'><a href="/gallery">Gallery</a></li>
                                        <li className='breadcrumb-item'><a href="/camera">Dog Cams</a></li>

                            </ol>
                                     
                    </div>
                </div>
           

            <div className='container'>
                <div>
                    <div className="row">
                         <div className="col col-lg-2">
                            1 of 3
                        </div>
                        <div className="col-md-auto">
                                    <h2>Welcome to The Pet Stylist of Atlanta!</h2>
                                        <div className='col-6 mx-auto'>
                                        <h4>Grooming & Boarding</h4>
                                        <h2>Book Appt Today!</h2>
                                                <div className='col-5 mx-auto'>
                                                    <a className="btn btn-primary" href="/signup" role="button">Book Appt</a>
                                                </div>
                                         </div>
                        </div>
                         <div className="col col-lg-2">
                         3 of 3
                        </div>
                    </div>
                </div>
             </div>  
             <div className='container'>
                <div>
                    <div className="row">
                         <div className="col col-lg-2">
                        1 of 3
                        </div>
                        <div className="col col-lg-6">
                        <img src="/Raven512.png"  alt="Responsive"/>
                        </div>
                         <div className="col col-lg-3">
                         3 of 3
                        </div>
                    </div>
                </div>
             </div>  
             </div> 

            
             <div className='Gallery Section'>
                 <div>
                 Gallery
                 </div>
             </div>
        </div>        
           
    )
}

export default Home;