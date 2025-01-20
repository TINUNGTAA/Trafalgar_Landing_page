

function ServiceOptions(){
    return(
        <section className="mt-12 px-[380px] ">
            <div className="w-10/12 flex-col  ">
            <div className="flex flex-row items-center  gap-10">
                <div className="flex flex-col w-[350px] border rounded-lg h-[350px]  p-10  hover:border-useBlue">
                    <img src="src/assets/service/search.svg" className="w-[60px]"/>
                    <h1 className="mt-10 font-semibold text-xl"> Search doctor </h1>
                    <p className="text-gray-500  leading-loose mt-5 " >Chose your doctor from thousands of spacialist, general, and ttrusted hospitals</p>

                </div>  

                <div className="flex flex-col w-[350px] border rounded-lg h-[350px]  p-10 hover:border-useBlue">
                    <img src="src/assets/service/Frame.svg" className="w-[60px]"/>
                    <h1 className="mt-10 font-semibold text-xl">Online pharmacy </h1>
                    <p className="text-gray-500  leading-loose mt-5" >Buy  your medicines with our mobile application with a simple delivery system</p>

                </div>

                <div className="flex flex-col w-[350px] border rounded-lg h-[350px]  p-10 hover:border-useBlue">
                    <img src="src/assets/service/Frame (1).svg" className="w-[60px]"/>
                    <h1 className="mt-10 font-semibold text-xl"> 
                    Consultation </h1>
                    <p className="text-gray-500  leading-loose mt-5" >Free consultation with our trusted doctors and get the best recomendations</p>

                </div>



            </div>

            {/* down */}

            <div className="flex flex-row items-center  mx-auto mt-10 gap-10">
                <div className="flex flex-col w-[350px] border rounded-lg h-[350px]  p-10 hover:border-useBlue">
                    <img src="src/assets/service/Frame (3).svg" className="w-[60px] "/>
                    <h1 className="mt-10 font-semibold text-xl"> Details info </h1>
                    <p className="text-gray-500  leading-loose  mt-5" >Free consultation with our trusted doctors and get the best recomendations</p>

                </div>  

                <div className="flex flex-col w-[350px] border rounded-lg h-[350px]  p-10 hover:border-useBlue">
                    <img src="src/assets/service/Frame (4).svg" className="w-[60px]"/>
                    <h1 className="mt-10 font-semibold text-xl">Emergency care </h1>
                    <p className="text-gray-500  leading-loose mt-5 " >You can get 24/7 urgent care for yourself or your children and your
                    lovely family</p>

                </div>

                <div className="flex flex-col w-[350px] border rounded-lg h-[350px]  p-10 hover:border-useBlue">
                    <img src="src/assets/service/Group.svg" className="w-[60px]"/>
                    <h1 className="mt-10 font-semibold text-xl"> 
                    Tracking</h1>
                    <p className="text-gray-500  leading-loose mt-5 " >Track and save your medical history and health data </p>

                </div>



            </div>

            </div>
        </section>

    )
}

export default ServiceOptions;