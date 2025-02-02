function Virtual() {
  return (
    <section className="flex gap-12 lg:flex-row flex-col items-center mt-12   px-5 lg:px-28  lg:items-start">
      <div className="flex  flex-col flex-1  items-start ">
        <h1 className=" lg:leading-loose lg:text-5xl   text-xl lg:mb-10 mb-3 font-medium">
          Virtual healthcare <br /> for you
        </h1>
        <p className="lg:text-xl text-gray-500 mb-12  lg:leading-loose ">
          Trafalgar provides progressive, and affordable <br /> healthcare,
          accessible on mobile and online <br /> for everyone{" "}
        </p>

        <button className="bg-blue-500 py-2 lg:py-3  px-3 lg:px-6  text-white  font-semibold    lg:text-2xl  border  text-center rounded-full  hover:bg-blue-300">
          Consult today{" "}
        </button>
      </div>

      <div className="flex flex-1">
        <img src="src/assets/virtual/illustration.svg"/>

      </div>
      
    </section>
  );
}
export default Virtual;
