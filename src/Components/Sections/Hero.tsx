import React from "react";
import Image from "next/image";
import hero from "../../../public/hero.svg";

function Hero() {
  return (
    <>
      <section className="mt-16 max-w-6xl py-6 mx-auto px-5 flex justify-between items-center gap-24 flex-col-reverse  md:flex-row md:items-center">
        <div className="md:w-1/2 flex gap-10 md:gap-8 lg:gap-10 flex-col">
          <h2 className="text-2xl lg:text-3xl md:text-2xl text-center md:text-start md:leading-8 lg:leading-10 font-bold uppercase">
            Number One SMM Panel With Cheapest Prices And Instant Delivery
          </h2>
          <button className="btn_Effect px-10 py-3 md:self-start md:px-6 md:py-2 lg:px-8 lg:py-[10px] font-medium text-lg">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2">
          <Image src={hero} width={400} height={400} alt="Hero Image" />
        </div>
      </section>
    </>
  );
}

export default Hero;
