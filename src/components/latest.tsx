

function Latest() {
    return(
        <section className="mt-16">
            <div className=" flex  flex-col w-8/12 mx-auto">
                <h1 className="text-center">Check out our latest article
                    <div className="hidden w-16 h-1 lg:flex bg-black mx-auto my-6"></div>
                </h1>

                <div className="gap-10  flex flex-row">
                    <div className="flex flex-col">
                    <img src="src/assets/latest/Mask Group ().svg" />
               <div className="p-5 border rounded-b-xl w-[350px] h-[200px]">
                        <h2 className="font-semibold ">Disease detection,check up in the laboratory</h2>
                        <p className="text-gray-500 mt-3" >In this case, the role of the health laboratory is very important to do a Disease detectioon ...<br/>
                        <a href="#" className="text-useBlue flex items-center  mt-2 ">Read more <span className="px-2 "><img src="src/assets/latest/Vector.svg"/></span></a>
                        </p>
                    </div>
                    </div>

                    <div className="flex flex-col">
                    <img src="src/assets/latest/Mask Group.svg"/>
               <div className="p-5 border rounded-b-xl w-[350px] h-[200px]  ">
                        <h2 className="font-semibold ">Herbal medicines that are 
                        safe for consumption</h2>
                        <p className="text-gray-500 mt-3" >Herbal medicine is very widely used at this time because of its very good for your health...<br/>
                        <a href="#" className="text-useBlue flex items-center  mt-2">Read more <span className="px-2"><img src="src/assets/latest/Vector.svg"/></span></a>
                        </p>
                    </div>
                    </div>

                    <div className="flex flex-col">
                    <img src= "src/assets/latest/Mask Group (1).svg"/>
               <div className="p-5 border rounded-b-xl w-[350px] h-[200px]  ">
                        <h2 className="font-semibold  ">Natural care for healthy 
                        facial skin</h2>
                        <p className="text-gray-500 mt-3">A healthy lifestyle should start from now and also for your skin health.
                        There are some...<br/>
                        <a href="#" className="text-useBlue flex items-center mt-5 ">Read more <span className="px-2"><img src="src/assets/latest/Vector.svg"/></span></a>
                        </p>
                    </div>
                    </div>

                </div>

            </div>

            <div className="flex justify-center">
                <a className="border border-useBlue py-3 px-16 text-useBlue mt-12 rounded-full  hover:text-blue-700">View all</a>
            </div>

        </section>
    )
}
export default Latest;