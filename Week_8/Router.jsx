import React from "react";
import {Routes,Route,BrowserRouter,Link} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact';
function Router(){
    return(
        <BrowserRouter>
          
            <Link to="/">Home</Link> |{""}
            <Link to="/about">About</Link> |{""}
            <Link to="/contact">Contact</Link>
           
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default Router;