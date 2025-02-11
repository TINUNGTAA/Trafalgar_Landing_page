import { useState } from "react";

function Header() {
  const[openMenu, setMenu]  = useState(false)
  return (
    <header className="bg-white  flex flex-row justify-between  px-5 lg:px-28 py-5 items-center   font-family-mulish">
      <div>
        <img src="/header/logo.svg" alt="Logo" />

      </div>
      <div className="  space-x-10  text-gray-500 ml-auto hidden  md:block lg:block">
        <button className="    hover:font-bold ">
          <a href="#">Home </a>
        </button>
        <button className=" hover:font-bold ">
          <a href="#">Find a doctor </a>
        </button>
        <button className="   hover:font-bold ">
          <a href="#">App </a>
        </button>
        <button className="  hover:font-bold ">
          <a href="#">Testimonials </a>
        </button>
        <button className="  hover:font-bold ">
          <a href="#">About Us </a>
        </button>
      </div>
      <div className="flex  flex-1 justify-end lg:hidden md:hidden cursor-pointer">
    
      <img src="/header/bars-solid.svg" className="w-10 h-5"  onClick={()=>setMenu(!openMenu)}/>
      </div>
      <div className={`absolute lg:hidden top-20 right-0 rounded-lg bg-gray-100 flex flex-col items-center  font-semibold text-lg transform transition-transform ${ openMenu? 
      "opacity-100" :"opacity-0"}`}>

        <li className=" list-none w-full text-center p-4 hover:bg-gray-300 hover:text-white cursor-pointer transition-all">Home</li>
        <li className=" list-none w-full text-center p-4 hover:bg-gray-300 hover:text-white cursor-pointer transition-all">Find a Doctor</li>
        <li className=" list-none w-full text-center p-4 hover:bg-gray-300 hover:text-white cursor-pointer transition-all">App</li>
        <li className=" list-none w-full text-center p-4 hover:bg-gray-300 hover:text-white cursor-pointer transition-all">Testimonials</li>
        <li className=" list-none w-full text-center p-4 hover:bg-gray-300 hover:text-white cursor-pointer transition-all">About Us</li>




         
      </div>
    </header>
  );
}

export default Header;
