import { PiCalendarFill } from "react-icons/pi";
import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {

  return (
      <div className="">
          <div className="flex   sticky
                          w-full gap-12 h-20 pt-4 mt-0
                          justify-center items-center">

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
          </div>
      </div>
  );
}
export default NavBar;