import { PiCalendarFill } from "react-icons/pi";
import React, {useState} from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
   const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
          <nav className="flex  fixed pt-16 w-full gap-12 h-32   bg-white justify-center items-center ">

                  <div className="float-left flex ">
                      <PiCalendarFill className="text-4xl text-orange-600"/>
                      <p className="text-black text-2xl" >EventEase</p>
                  </div>

                  <Link to='/' className= "cursor-pointer  hover:text-orange-600  hover:border-2  text-black  rounded-md  border-black hover:w-24  hover:text-center hover:h-10 hover:pt-1">  Home</Link>
                  <Link to='event' className= "cursor-pointer  hover:text-orange-600  hover:border-2  text-black  rounded-md  border-black  hover:w-24  hover:text-center hover:h-10 hover:pt-1">  Events</Link>
                  <Link to='/myTicket' className= "cursor-pointer  hover:text-orange-600  hover:border-2  text-black  rounded-md  border-black  hover:w-24  hover:text-center hover:h-10 hover:pt-1">  My Tickets</Link>
                  <Link to='/categories' className= "cursor-pointer  hover:text-orange-600  hover:border-2  text-black  rounded-md  border-black  hover:w-24  hover:text-center hover:h-10 hover:pt-1">  Categories</Link>
                  <Link to='/search' className= "cursor-pointer  hover:text-orange-600  hover:border-2  text-black  rounded-md  border-black  hover:w-24  hover:text-center hover:h-10 hover:pt-1">  Search</Link>
                  <Link to='/about'  className= "cursor-pointer  hover:text-orange-600  hover:border-2  text-black  rounded-md  border-black  hover:w-24  hover:text-center hover:h-10 hover:pt-1">  About us</Link>
                  <Link to='contactUs' className= "cursor-pointer  hover:text-orange-600  hover:border-2  text-black  rounded-md  border-black  hover:w-24  hover:text-center hover:h-10 hover:pt-1">  Contact us</Link>
                  <button className= "cursor-pointer text-base w-24 h-9 border-2  text-black
                  rounded-md border-orange-600 hover:w-28">Login</button>
                  <button className= "cursor-pointer text-base w-24 h-9 border-2  text-black
                  rounded-md border-orange-600 hover:w-28">SignUp</button>

                   <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>

                 {isOpen && (
                     <div className="md:hidden bg-white shadow-md">
                          <Link to='/' className="block text-black hover:text-orange-600 p-2 border-b">Home</Link>
                           <Link to='/event' className="block text-black hover:text-orange-600 p-2 border-b">Events</Link>
                           <Link to='/myTicket' className="block text-black hover:text-orange-600 p-2 border-b">My Tickets</Link>
                           <Link to='/categories' className="block text-black hover:text-orange-600 p-2 border-b">Categories</Link>
                           <Link to='/search' className="block text-black hover:text-orange-600 p-2 border-b">Search</Link>
                           <Link to='/about' className="block text-black hover:text-orange-600 p-2 border-b">About us</Link>
                           <Link to='/contactUs' className="block text-black hover:text-orange-600 p-2 border-b">Contact us</Link>
                          <button className="block w-full text-base p-2 border-2 text-black rounded-md border-orange-600 hover:w-full">Login</button>
                     </div>)}
          </nav>
  );
}
export default NavBar;






