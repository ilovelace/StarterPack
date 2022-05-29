import React from 'react';
// import ReactDOM from 'react-dom';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import UserProfile from '../Profile/UProfile';
//import Navbar from '../../NavBar/Navbar';
import Services from '../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
import UserLogin from '../Profile/UserLogin';
import SignUp from '../SignUp/SignUp';
import ContactPage from '../ContactMe/ContactPage';
import ThankYouPage from '../ThankYou/Thanks';
import NavBarUser from '../../NavBar/test';
import DogProfile from '../Profile/DogProfile';
import SettingsPage from '../Settings/SettingPage';
import ApptBookPage from '../Appt/Appt';
import SettingsDog from '../Settings/SettingDog';




const Layout = () => {


    const toggleRoutes = () => {

    
        if(localStorage.getItem('loggedInUser')){
                    return(
                        <div>
                        <Routes>
                        <Route path="/profile/update" element={<SettingsPage/>}/>
                        <Route path="/profile/" element={<UserProfile />} />
                        <Route path="/profile/dog/update" element={<SettingsDog/>}/>
                        <Route path="/profile/dogs/" element={<DogProfile/>}/>
                        <Route path="/apptbook/" element={<ApptBookPage/>}/>
                        <Route path="/home" element={<Home/>} />
                        </Routes>
                        </div>
                          )
                    }else {
                    return(
                        <div>
                        <Routes>
                        <Route path="/aboutus" element={<AboutUs/>} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contactme" element={<ContactPage />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<UserLogin />} />
                        <Route path="/home" element={<Home />} />
                        <Route exact path="/" element={<Home />} />
                        <Route path="/thank-you" element={<ThankYouPage/>}/>
                        </Routes>
                        </div>
                          );
                   }
    
    
    }



            return (
                <div>
                   
                    <NavBarUser/>
                    {toggleRoutes()}
                   
                </div>
            );
        }

export default Layout;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
