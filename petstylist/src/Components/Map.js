import React from 'react';


 const AddressMap=()=>{
    return (
        <div className="google-map-code">
    
          <iframe title='map' width="450" height="300" style={{border:0}} loading="lazy" 
  allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJfxV1LE8C9YgRb80HM3jAdKI&key=AIzaSyDJcudgRltywgdjRPSC1Dd9UuE7FCXoBro"></iframe>
        </div>
    );
 }
 export{AddressMap}