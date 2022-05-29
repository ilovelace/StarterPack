import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';

const SettingsPage =()=>{

    const Navigate = useNavigate();
    // const UserLogin = useSelector((state.UserLogin))
    const[user, setUser] = useState({
        first_name: "",
        last_name: "",
        phone_number: "",
        address:{
            street: "",
            city: "",
            state: "",
            zip: "",
        },
        email: "",
        password: "",
    })

     useEffect(() => {
     console.log('step 1');
 
         const params = {
            id:  localStorage.getItem('loggedInUser')
         }
     axios.get(`/profile/${params.id}`//{headers: {'Content-Type': 'application/json', 'Accept':'application/json'}},
     )
     .then(response => {
         console.log('step 2');
         //Spring returns a user obj...hence the save
         //state variable calls the user .
         console.log(response.data)
 
         setUser(response.data);
          
     }).catch(error =>{
         console.log('error' + error);
     });
     }, [] );
   

    //const navigate = useNavigate()
    

    
const userChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const tempUser = { ...user };
    tempUser[name]= value;
    tempUser.address[name]=value;
  
    setUser(tempUser)


}

const updateSubmitHandler = () => {
    console.log(user, 'Step 1 Submit');


    axios.post(`/profile/update`, user)
    
    .then((response) => {
        console.log(response.data, 'Step 2 Submit Post Axios')
        
        setUser(response.data)
            
    }).catch((error) => {
    console.log(error);
    });
}

const deleteSubmitHandler = () => {
    console.log(user);
    console.log('step 1');
        
    axios.delete(`/profile/delete`,  {data: {user}})
    
    .then((response) => {
        console.log('step 2');
        localStorage.clear()
        Navigate("/")
            
    }).catch((error) => {
    console.log(error);
    });
}

    return(
    
        <div className='container'>
                    <br />
                    <h5>Update User Profile</h5>
                    <form>
                <div className="form-inline">
                <div className="col-md-4 mb-3">
                    <label for="inputFirstName4">First name</label>
                    <input type="text" class="form-control"  placeholder="First name" name="first_name" value={user.first_name} onChange={userChangeHandler} />
                 </div>
                <div className="col-md-4 mb-3">
                    <label for="inputLastName4">Last name</label>
                    <input type="text" class="form-control"  placeholder="Last name" name="last_name" value={user.last_name} onChange={userChangeHandler} />
                </div>
                <div className="col-md-4 mb-3">
                    <label for="inputPhoneNumber4">Phone Number</label>
                    <input type="number" class="form-control" placeholder="Phone Number" name="phone_number" value={user.phone_number} onChange={userChangeHandler} />
                 </div>

                </div>
                <div class="form-row">
                <div className="col-md-4 mb-3">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" placeholder="Email Address" name="email" value={user.email} onChange={userChangeHandler} />
                 </div>
            
                <div className="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" placeholder="Password" name="password"value={user.password} onChange={userChangeHandler} />
                 </div>
                </div>

             
                <div className="form-inline">
                <div className="col-md-6 mb-3">
                        <label for="inputAddress">Address</label>
                        <input type="text" class="form-control" placeholder="1234 Main St" name="street" value={user.address.street} onChange={userChangeHandler} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control"  placeholder="City" name="city" value={user.address.city} onChange={userChangeHandler} />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" class="form-control" name="state" value={user.address.state} onChange={userChangeHandler}>
                            <option selected>Choose State...</option>
                            <option value= "Georgia" name="state"> Georgia </option>
                            <option value= "Alabama"> Alabama </option>
                            <option value= "Tennessee"> Tennessee </option>
                        </select>
                    </div>
                    <div className="col-md-2 mb-3">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" placeholder="Zip" name="zip" value={user.address.zip} onChange={userChangeHandler} />
                    </div>
                </div>
                
                <button className="btn btn-primary"  type="button" onClick={updateSubmitHandler}> Submit </button><br/><br/>  <button className="btn btn-primary"  type="button" onClick={deleteSubmitHandler}> Delete Profile </button>
                </form>
        </div>
         
        
           

    )
}
export default SettingsPage;