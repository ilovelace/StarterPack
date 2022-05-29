import {useState, useEffect} from 'react';
import axios from 'axios';
//import { useNavigate } from 'react-router';
import './Uprofile.scss';
import * as React from 'react';






const UserProfile =()=> {


    //const Navigate = useNavigate();
   
    const[user, setUser] = useState(0)



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
 

 




  




        return(
        <div>
            <div class="container">
                    <div class="row">
                        <div class="col-12">
                        <p><h1>Welcome Back {user.first_name}</h1>
                            <hr/>
                       </p>
                        </div>
                        
                    </div>
            </div>

            <div class="container">
                    <div class="row">
                        <div class="col-sm">
                        Schedule you next appointment
                        </div>
                        <div class="col-sm">
                        2 of 3
                        </div>
                        <div class="col-sm">
                        3 of 3
                        </div>
                    </div>
            </div>

            <div class="container">
                      
                                
                      <div class="row">
                      <div class="col-12">
                          <div class="card">
                              <div class="card-body text-center">
                                  <h5 class="card-title m-b-0">Your Appointments</h5>
                              </div>
                                  <div class="table-responsive">
                                      <table class="table">
                                          <thead class="thead-light">
                                              <tr>
                                                  <th>
                                                      <label class="customcheckbox m-b-20">
                                                          <input type="checkbox" id="mainCheckbox"/>
                                                          <span class="checkmark"></span>
                                                      </label>
                                                  </th>
                                                  <th scope="col">Name</th>
                                                  <th scope="col">Date(s)</th>
                                                  <th scope="col">Description</th>
                                              </tr>
                                          </thead>
                                          <tbody class="customtable">
                                              <tr>
                                                  <th>
                                                      <label class="customcheckbox">
                                                          <input type="checkbox" class="listCheckbox"/>
                                                          <span class="checkmark"></span>
                                                      </label>
                                                  </th>
                                                  <td>India</td>
                                                  <td>Chrome OS</td>
                                                  <td>MAC OS</td>
                                                  <td>76</td>
                                              </tr>
                                              <tr>
                                                  <th>
                                                      <label class="customcheckbox">
                                                          <input type="checkbox" class="listCheckbox"/>
                                                          <span class="checkmark"></span>
                                                      </label>
                                                  </th>
                                                  <td>USA</td>
                                                  <td>Internet Explorer</td>
                                                  <td>Win 2010</td>
                                                  <td>10</td>
                                              </tr>
                                              <tr>
                                                  <th>
                                                      <label class="customcheckbox">
                                                          <input type="checkbox" class="listCheckbox"/>
                                                          <span class="checkmark"></span>
                                                      </label>
                                                  </th>
                                                  <td>UK</td>
                                                  <td>Safari</td>
                                                  <td>Mac OS</td>
                                                  <td>16</td>
                                              </tr>
                                              <tr>
                                                  <th>
                                                      <label class="customcheckbox">
                                                          <input type="checkbox" class="listCheckbox"/>
                                                          <span class="checkmark"></span>
                                                      </label>
                                                  </th>
                                                  <td>UAE</td>
                                                  <td>Google Chrome</td>
                                                  <td>Win 2013</td>
                                                  <td>76.12</td>
                                              </tr>
                                              <tr>
                                                  <th>
                                                      <label class="customcheckbox">
                                                          <input type="checkbox" class="listCheckbox"/>
                                                          <span class="checkmark"></span>
                                                      </label>
                                                  </th>
                                                  <td>Canada</td>
                                                  <td>Internet Explorer</td>
                                                  <td>Win 2010</td>
                                                  <td>10</td>
                                              </tr>
                                              <tr>
                                                  <th>
                                                      <label class="customcheckbox">
                                                          <input type="checkbox" class="listCheckbox"/>
                                                          <span class="checkmark"></span>
                                                      </label>
                                                  </th>
                                                  <td>Turkey</td>
                                                  <td>Internet Explorer 8</td>
                                                  <td>Win 2010</td>
                                                  <td>8</td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                          </div>
                      </div>
                  </div>
  
                     </div> 
                               
            </div>
        
   
             
)

}

export default UserProfile;