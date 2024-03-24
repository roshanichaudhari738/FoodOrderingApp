import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Header from "../Header/header";
import Footer from "../Footer/Footer";
import About from "../About/about";
import Contact from "../Contact/Contact";
import Menu from "../Menu/Menu";

export default function Router(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/menu" element={<Menu/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}