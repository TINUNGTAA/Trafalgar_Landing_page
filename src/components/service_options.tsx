function ServiceOptions() {
  return (
    <section className="lg:mt-12 px-5 md:px-16   mt-16 ">
      <div className="bg-contain  bg-no-repeat h-screen lg:flex items-center  justify-center " style={{ backgroundImage: "url('src/assets/service/Vector.svg') ", backgroundSize:"937.95px 671.23px" }}> 
      <div className=" flex-col items-center mx-auto">
        <div className="flex  md:flex-col lg:flex-row  items-center flex-col  gap-10">
          <div className="flex flex-col w-[350px] lg:w-[350px] border rounded-lg  h-[300px]  lg:h-[350px]  border-white shadow-lg p-10  hover:border-useBlue">
            <img src="src/assets/service/search.svg" className="w-[60px]" />
            <h1 className="lg:mt-10 mt-5 font-semibold lg:text-xl"> Search doctor </h1>
            <p className="text-gray-500  lg:leading-loose lg:mt-5  mt-3">
              Chose your doctor from thousands of spacialist, general, and
              trusted hospitals
            </p> 
          </div>

          <div className="flex flex-col w-[350px] border rounded-lg h-[350px]  border-white shadow-lg p-10 hover:border-useBlue">
            <img src="src/assets/service/Frame.svg" className="w-[60px]" />
            <h1 className="mt-10 font-semibold text-xl">Online pharmacy </h1>
            <p className="text-gray-500  lg:leading-loose mt-5">
              Buy your medicines with our mobile application with a simple
              delivery system
            </p>
          </div>

          <div className="flex flex-col w-[350px] border rounded-lg h-[350px]  border-white shadow-lg p-10 hover:border-useBlue">
            <img src="src/assets/service/Frame (1).svg" className="w-[60px]" />
            <h1 className="mt-10 font-semibold text-xl">Consultation </h1>
            <p className="text-gray-500  lg:leading-loose mt-5">
              Free consultation with our trusted doctors and get the best
              recomendations
            </p>
          </div>
        </div>

        {/* down */}

        <div className="flex lg:flex-row mb-12 lg:mb-0 items-center flex-col mx-auto mt-10 gap-10">
          <div className="flex flex-col w-[350px] border rounded-lg h-[350px]  border-white shadow-lg p-10 hover:border-useBlue">
            <img src="src/assets/service/Frame (3).svg" className="w-[60px] " />
            <h1 className="mt-10 font-semibold text-xl"> Details info </h1>
            <p className="text-gray-500  lg:leading-loose  mt-5">
              Free consultation with our trusted doctors and get the best
              recomendations
            </p>
          </div>

          <div className="flex flex-col w-[350px] border rounded-lg h-[350px]  border-white shadow-lg p-10 hover:border-useBlue">
            <img src="src/assets/service/Frame (4).svg" className="w-[60px]" />
            <h1 className="mt-10 font-semibold text-xl">Emergency care </h1>
            <p className="text-gray-500  lg:leading-loose mt-5 ">
              You can get 24/7 urgent care for yourself or your children and
              your lovely family
            </p>
          </div>

          <div className="flex flex-col w-[350px] border rounded-lg h-[350px]  border-white shadow-lg p-10 hover:border-useBlue">
            <img src="src/assets/service/Group.svg" className="w-[60px]" />
            <h1 className="mt-10 font-semibold text-xl">Tracking</h1>
            <p className="text-gray-500  lg:leading-loose mt-5 ">
              Track and save your medical history and health data{" "}
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default ServiceOptions;
