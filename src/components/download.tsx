

function Download(){

    return(
        <section className="mt-16  lg:w-8/12 mx-auto">
            <div className=" flex lg:flex-row  items-center">
                {/* text */}
                <div className="flex flex-1 flex-col">
                    <h1 className="text-5xl  ">Download our  <br/>  mobile apps 
                        <div className="hidden lg:flex w-16 h-1 bg-black my-8"></div>
                    </h1>
                    <p className="text-gray-500  text-xl">Our dedicated patient engagement app and <br/>  web portal allow you to access information <br/>  instructions instantanously (no tedeus for ,long calls, <br/>  or administative hassels) and securely</p>

                    <button className="border border-useBlue w-4/12 flex py-3 rounded-full items-center justify-center mt-6 text-useBlue text-xl hover:text-blue-600 " >Download  <span className="px-2"><img src="src/assets/download/Vector.svg"/></span></button>
                </div>
                {/* image */}
                <div>
                    <img src=" src/assets/download/trafalgar-illustration sec03 1.svg"/>
                </div>

            </div>

        </section>
    )
}
export default Download;