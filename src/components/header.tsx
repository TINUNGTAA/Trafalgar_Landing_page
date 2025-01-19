
function Header(){
    return(
        <header className="bg-white  flex flex-row justify-between  px-28 py-5 items-center  " >
            <div>
              <img src="src/assets/header/logo.svg"/>
            </div>
            <div className="flex  space-x-10  text-gray-500  " >
              <button className="    hover:font-bold "><a  href="#">Home </a></button>  
              <button className=" hover:font-bold "><a  href="#">Find a doctor </a></button>  
              <button className="   hover:font-bold "><a href="#">App </a></button>  
              <button className="  hover:font-bold "><a  href="#">Testimonials </a></button> 
              <button className="  hover:font-bold "><a  href="#">About Us  </a></button>  
            </div>
            <div>

            </div>

        </header>

    )
}

export default Header;