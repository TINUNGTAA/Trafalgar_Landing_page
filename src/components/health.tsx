function Health(){
    return(
        <section className="mt-16 px-28 grap-16 " > 
            <div className="   flex items-center lg:flex-row justify-between  ">
                <div className="flex flex-1  lg:flex-col items-center lg:items-start">
                {/* image */}
                <img src="src/assets/healthcare/trafalgar-illustration sec02 1.svg"/>


                </div>  
           
            <div className="flex flex-1 lg:flex-col items-center  lg:items-start" >
           

                <h1 className="text-5xl  ">Leading Healthcare <br/>Providers 
                    <div className="hidden lg:flex  bg-black w-16 h-1 rounded-full my-6"></div>
                </h1>
                <p className="text-gray-500 text-xl  mt-6">Trafalgar provides progressive, and affordable <br/>
                    healthcare , accessible on mobileand on online for <br/>
                    everyone. To us, it's not just work. We take pride <br/>
                    in the solutions we deliver</p>

                    <a href="#" className="border border-blue-400 px-12 text-useBlue hover:text-blue-600  font-bold py-3 rounded-full mt-8">Read more</a>

           
            </div>

            </div>

        </section>
    )
}
export default Health;