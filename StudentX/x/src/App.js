import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import {Routes,Route, BrowserRouter} from "react-router-dom";
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import About from './Component/About';
import InformationForm from './Component/InformationForm';
import DocView from './Component/DocView';
import Profile from './Component/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route  path='/about' element={<About />}></Route>
      <Route  path='/informationform' element={<InformationForm/>}></Route>
      <Route  path='/docview' element={<DocView/>}></Route>
      <Route  path='/profile' element={<Profile/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
