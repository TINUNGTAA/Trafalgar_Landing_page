function Health() {
  return (
    <section className="mt-16  px-5 lg:px-28 grap-16 ">
      <div className="   flex items-center flex-col lg:flex-row justify-between lg:items-start ">
        <div className="flex flex-1  flex-col items-center lg:justify-start mb-6 lg:mb-0 mt-16 lg:mt-0">
          {/* image */}
          <img src="/healthcare/trafalgar-illustration sec02 1.svg" />
        </div>

        <div className="flex flex-1 flex-col items-center  ">
          <h1 className="lg:text-5xl lg:leading-loose text-xl font-semibold  ">
            Leading Healthcare <br />
            Providers
            <div className="hidden lg:flex  bg-black w-16 h-1 rounded-full my-6"></div>
          </h1>
          <p className="text-gray-500  lg:text-xl  lg:eading-loose  mt-3 lg:mt-6">
            Trafalgar provides progressive, and affordable <br />
            healthcare , accessible on mobileand on online for <br />
            everyone. To us, it's not just work. We take pride <br />
            in the solutions we deliver
          </p>

          <a
            href="#"
            className="border border-blue-400 px-12 text-useBlue hover:text-blue-600  font-bold py-3 rounded-full mt-8"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
}
export default Health;
