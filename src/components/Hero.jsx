import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col">
      <img
        src="/assets/Group77.png"
        className="pt-7 pb-9 px-20"
      />
      <div className="not-italic font-poppins text-black text-left">
        <div className=" pl-9 pr-32 font-semibold text-4xl ">
          Online Experiences
        </div>
        <div className="text-base font-light pl-9 pt-4 pr-48">
          Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </div>
      </div>
    </section>
  )
}

export default Hero;