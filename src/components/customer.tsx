function Customer() {
  return (
    <section className="  ">
      <div className="mt-16  w-6/12 lg:w-8/12 bg-useBlue lg:py-12 mx-auto py-3 lg:py-6 px:6 lg:px-12 rounded-xl text-white  bg-gradient-to-b from-blue-300 to-blue-600 ">
        <h1 className="text-center mt-6 text-xl lg:text-3xl font-semibold mx-auto lg:leading-loose">
          What our customer are saying
          <div className="hidden lg:flex w-16 h-1 bg-white mx-auto rounded-full my-3"></div>
        </h1>

        <div className="flex flex-col lg:flex-row  items-center mt-12  lg:gap-16">
          <div className="flex flex-row gap-8 items-center">
            <img src="/customer/Group 5.svg" />

            <div className="flex-col ">
              <h2 className="font-semibold text-xl lg:leading-loose">Edward Newgate </h2>
              <p>Founder Circle</p>
            </div>
          </div>

          <div className="flex flex-col flex-1 ">
            <p className=" mx-auto px-3 lg:leading-loose">
              “Our dedicated patient engagement app and web portal allow you to{" "}
              <br />
              access information instantaneously (no tedious forms, long calls,
              <br />
              or administrative hassle) and securely.”
            </p>
          </div>
        </div>
      </div>

      <div className=" flex justify-center mt-6 ">
        <img src="/customer/arrow nav.svg" className="" />
      </div>
    </section>
  );
}
export default Customer;
