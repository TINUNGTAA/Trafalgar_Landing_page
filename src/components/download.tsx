function Download() {
  return (
    <section className="mt-16    px-5 ">
      <div className=" flex lg:flex-row  flex-col-reverse   items-center">
        {/* text */}
        <div className="flex flex-1 flex-col items-center  mt-12">
          <h1 className="lg:text-5xl lg:leading-loose text-xl  font-semibold  ">
            Download our  mobile apps
            <div className="hidden lg:flex w-16 h-1 bg-black my-8"></div>
          </h1>
          <p className="text-gray-500 lg:leading-loose mt-3  lg:text-xl">
            Our dedicated patient engagement app and <br /> web portal allow you
            to access information <br /> instructions instantanously (no tedeus
            for ,long calls, <br /> or administative hassels) and securely
          </p>

          <button className="border border-useBlue w-4/12 flex py-2 lg:py-3 rounded-full items-center justify-center mt-6 text-useBlue lg:text-xl hover:text-blue-600 ">
            Download{" "}
            <span className="px-2">
              <img src="/download/VectorD.svg" />
            </span>
          </button>
        </div>
        {/* image */}
        <div className="flex flex-1">
          <img src=" /download/downloadImage.svg"/>
        </div>
      </div>
    </section>
  );
}
export default Download;
