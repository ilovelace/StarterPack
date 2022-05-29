import React from "react";
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';

const SettingsDog =()=>{

    //const Navigate = useNavigate();
    // const UserLogin = useSelector((state.UserLogin))
    const[dog, setDog] = useState({
        name: "",
        breed: "",
        age: "",
        description:""
    })

     useEffect(() => {
     console.log('step 1');
 
         const params = {
            id:  localStorage.getItem('loggedInUser')
         }
     axios.get(`/profile/dog/update${params.id}`//{headers: {'Content-Type': 'application/json', 'Accept':'application/json'}},
     )
     .then(response => {
         console.log('step 2');
         //Spring returns a user obj...hence the save
         //state variable calls the user .
         console.log(response.data)
 
         setDog(response.data);
          
     }).catch(error =>{
         console.log('error' + error);
     });
     }, [] );
   

    //const navigate = useNavigate()
    

    
const dogChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const tempDog = { ...dog };
    tempDog[name]= value;
  
    setDog(tempDog)


}

const updateSubmitHandler = () => {
    console.log(dog);


    axios.post(`/profile/dog/update`, dog)
    
    .then((response) => {
        console.log(response.data)
        
        setDog(response.data)
            
    }).catch((error) => {
    console.log(error);
    });
}



    return(
    
        <div className='container'>
                    <br />
                    <h5>Update Dog </h5>
            <form>

                <div className="form-inline">
                    <div className="col-md-4 mb-3">
                        <label for="inputFirstName4">Dog Name</label>
                        <input type="text" class="form-control"  placeholder="Dog name" name="name" value={dog.name} onChange={dogChangeHandler} />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="inputLastName4">Breed</label>
                        <input type="text" class="form-control"  placeholder="Breed" name="breed" value={dog.breed} onChange={dogChangeHandler} />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="inputPhoneNumber4">Age</label>
                        <input type="number" class="form-control" placeholder="Age" name="age" value={dog.age} onChange={dogChangeHandler} />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="inputPhoneNumber4">Description</label>
                        <input type="text" class="form-control" placeholder="Description" name="description" value={dog.description} onChange={dogChangeHandler} />
                    </div>
                </div>
                        <button className="btn btn-primary"  type="button" onClick={updateSubmitHandler}> Submit </button><br/> 
                </form>
        </div>
         
        
           

    )
}
export default SettingsDog;