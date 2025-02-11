function Footer() {
  return (
    <section className="bg-gradient-to-b from-blue-300 to-blue-600 py-8 mt-16 px-28 ">
      <div className=" mx-auto  pt-10 pb-20  ">
        <div className="flex flex-col lg:flex-row text-white items-start ">
          <div className="flex flex-col w-[460px]  pt-">
            <div className=" flex flex-row items-center">
            <span className="flex items-center justify-center bg-white text-useBlue w-8 h-8 rounded-full font-bold">
                T
              </span>
              <h1 className="text-white text-2xl font-semibold px-5">
                {" "}  
                Trafalgar{" "}
              </h1>
            </div>
            <p className="mt-5 lg:leading-loose ">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <p className="mt-5 lg:leading-loose ">©Trafalgar PTY LTD 2025. All rights reserved</p>
          </div>
          <div className="flex gap-16  mt-12 lg:mt-0 ">

          <div className="flex flex-col   ">
          <h1 className="font-bold">Company</h1>

            <ul className="mt-5 lg:space-y-5 ">
              <li>About</li>
              <li>Testimonials</li>
              <li>Find a doctor</li>
              <li>Apps</li>
            </ul>
          </div>

          <div className="flex flex-col ">
            <h1 className="font-bold">Region</h1>
            <ul className="mt-5 space-y-5 ">
              <li>Indonesia</li>
              <li>Sigapore</li>
              <li>Hongkong</li>
              <li>Canada</li>
            </ul>
          </div>

          <div className="flex flex-col ">
            <h1 className="font-bold"> Help</h1>
            <ul className="mt-5 space-y-5">
              <li>Help center</li>
              <li>Contact support</li>
              <li>Instructions</li>
              <li>How it works</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
