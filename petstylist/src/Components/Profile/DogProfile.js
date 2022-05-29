import {useState, useEffect} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
//import { useNavigate } from 'react-router';


/*componentDidMount(){

    const{searchDog} = this.state;
    axios.get(get(`/profile/dogs/${params.id}`
    )

}
*/



const DogProfile =()=> {

    //const Navigate = useNavigate();
   // const UserLogin = useSelector((state.UserLogin))
    const[user, setUser] = useState(0)
    useEffect(() => {
    console.log('step 1');

    const params = {
        id:  localStorage.getItem('loggedInUser')
     }
     console.log(`${params.id}`,'Step 2')
    axios.get(`/profile/dogs/${params.id}`,//{headers: {'Content-Type': 'application/json', 'Accept':'application/json'}},
    )
    .then(response => {
        
        //Spring returns a user obj...hence the save
        //state variable calls the user .
        console.log(response.data, 'Step 3');

        setUser(response.data);
    }).catch(error =>{
        console.log('error' + error);
    });
    }, [] );

    const dogChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempDog = { ...dog };
        tempDog[name]= value;
      
        setDog(tempDog)
    }

    const[dog, setDog] = useState({
        name: "",
        breed: "",
        age: "",
        description:""
    })

    const updateSubmitHandler = () => {
        console.log(dog, ' Submit step 1')

        const params = {
            id:  localStorage.getItem('loggedInUser')
         }


        console.log(`${params.id}`,'Submit step 2')
      
        //axios.post(`/dog/save/${params.id}`, dog)  ///500 {user_id} in path
        console.log(params)
        axios.post('/dog/save/', dog, `${{params:{params}}}`)  // 404 {user_id} in path


        .then((response) => {
            console.log(response.data, 'step3')
            
            setDog(response.data)

                
        }).catch((error) => {
        console.log(error);
        });
      }



    


        return(
            <div>
                    <div class="container">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                        <p><h1>Welcome Back <FontAwesomeIcon icon={faPaw}/> </h1>
                            <hr/>
                       </p>
                        </div>
                        
                    </div>
            </div>
            </div>

            <div className='container'>
                <br />
                <h5>Add Dog</h5>
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
                <br/>
                <hr/>
         </div>
            <div class="container">
                    <div class="row">
                        <div class="col-sm">
                        One of three columns
                        </div>
                        <div class="col-sm">
                        One of three columns
                    
                        </div>
                        <div class="col-sm">
                        Three of Three columns
                        </div>
                    </div>
            </div>

            <div class="container">
                      
                                
                    <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5 class="card-title m-b-0">Your Kennel <FontAwesomeIcon icon={faPaw}></FontAwesomeIcon></h5>
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
                                                <th scope="col">Breed(s)</th>
                                                <th scope="col">Age</th>
                                                <th scope="col">Comments</th>
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

export default DogProfile;