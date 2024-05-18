import Image from "next/image";
import gift from "../../../public/gift.png";

function Discount() {
  return (
    <>
      <section className="mt-16 md:mt-0 max-w-6xl py-6 mx-auto px-5">
        <div className="relative w-full h-fit lg:py-20 lg:px-16 md:py-16 md:px-5 py-10 px-5 md:text-start text-center flex flex-col md:flex-row gap-10 md:gap-0 justify-center md:justify-between  items-center">
          <div className="flex flex-col md:text-center md:gap-3 lg:gap-5 gap-3 items-center">
            <h3 className="text-[1.4rem] leading-7 lg:text-[1.4rem] md:text-lg md:leading-6 font-extrabold">
              Do You have a large number of orders ?
            </h3>
            <p className=" text-sm lg:text-sm md:text-xs text-[#d1d1d1]">
              Write To us in Telegram and Get Your Discount!
            </p>
          </div>
          <Image
            src={gift}
            objectFit="contain"
            alt="Hero Image"
            className="w-64 h-64 md:w-[10rem] md:h-[10rem] lg:w-52 lg:h-52"
          />
          <div className="">
            <button className="px-10 py-3 rounded-xl lg:rounded-xl lg:px-8 lg:py-2 lg:text-lg md:text-base md:px-5 md:py-2 md:rounded-lg bg-white text-black text-xl font-medium default_shadow hover:opacity-95 ">
              Get Discount
            </button>
          </div>
          <div className="absolute w-full h-[38rem] lg:h-40 bg_color left-0 -z-10 larg_raduis md:h-36"></div>
        </div>
      </section>
    </>
  );
}

export default Discount;
