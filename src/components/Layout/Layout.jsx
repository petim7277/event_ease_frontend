import Footer from "../Resuseables/Footer/Footer";
import NavBar from "../Resuseables/Navbar/NavBar";
import {Outlet} from "react-router-dom";

const Layout = ()=>{
    return(

        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export  default  Layout;