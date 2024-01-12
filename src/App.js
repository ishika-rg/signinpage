import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import Home from './pages/Home'


function App() {
  return (
    <div className="App">

 
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path = '/signin' element= {<SignIn />}> </Route>
        <Route path = '/forgetpassword' element = {<ForgetPassword />}></Route>
        <Route path = '/resetpassword' element = {<ResetPassword /> }></Route>
        <Route path ='/home' element = {<Home />}> </Route>


        </Routes>
     
      
    </div>
  );
}

export default App;
