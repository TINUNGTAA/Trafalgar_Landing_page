import { useState } from "react";


const testimonials = [
  {
    name: "Edward Newgate",
    position: "Founder Circle",
    feedback:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously and securely.",
    image: "/customer/Group 5.svg",
  },
  {
    name: "Alfred Sosu",
    position: "Assistant Funder",
    feedback:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously and securely.", 
    image: "https://media.istockphoto.com/id/1480071948/photo/image-of-young-businessman-male-on-gray-background.jpg?s=612x612&w=0&k=20&c=jKa4JgBwzNqId9BRcliMSIQYPTPSo9gmzkJdTfunaZ0=",
  },
  {
    name: "Carlos White",
    position: "Web Head",
    feedback:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously and securely.",
    image: "https://media.istockphoto.com/id/1288538088/photo/portrait-young-confident-smart-asian-businessman-look-at-camera-and-smile.jpg?s=612x612&w=0&k=20&c=qkOwVHZFC-fbtbTnufVGaXFhnQBcfEjzbu5ThSXVLR0=",
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full px-4">
      <div className="mt-16 w-full max-w-4xl mx-auto bg-useBlue lg:py-12 py-6 px-6 lg:px-12 rounded-xl text-white bg-gradient-to-b from-blue-300 to-blue-600">
        <h1 className="text-center text-xl lg:text-3xl font-semibold">
          What our customers are saying
          <div className="hidden lg:block w-16 h-1 bg-white mx-auto rounded-full my-3"></div>
        </h1>

        <div className="flex flex-col lg:flex-row items-center mt-8 lg:mt-12 lg:gap-16">
          {/* Image and Name Section */}
          <div className="flex flex-col lg:flex-row items-center gap-6">

            <div className="w-[141px] h-[141px] rounded-full bg-white overflow-hidden">
            <img
              src={testimonials[currentIndex].image }
              alt={testimonials[currentIndex].name}
             className="w-full h-full  items-center "
            />
            </div>
          
            <div className="text-center lg:text-left">
              <h2 className="font-semibold text-lg lg:text-xl">
                {testimonials[currentIndex].name}
              </h2>
              <p className="text-sm lg:text-base">
                {testimonials[currentIndex].position}
              </p>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="flex-1 mt-6 lg:mt-0">
            <p className="text-center lg:text-left text-sm lg:text-base lg:leading-loose">
              {testimonials[currentIndex].feedback}
            </p>
          </div>
        </div>
      </div>

      {/* Arrows and Dots */}
      <div className="flex justify-center items-center mt-6 gap-4">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="p-2 text-white transition "
        >
         <img src="/background/left.svg" className="h-6"/>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full transition ${
                currentIndex === index ? "bg-blue-300 scale-110" : "bg-blue-500"
              }`}
            ></span>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="p-2 text-blue-200 transition "
        >
         <img src="/background/right.svg" className="hover:color-blue-200 h-6 "/>
        </button>
      </div>
    </section>
  );
}

export default Carousel;