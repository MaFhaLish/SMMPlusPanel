import Image from "next/image";
import giftbox from "../../../public/giftbox.jpg";
import trophy from "../../../public/trophy.png";
import rocket from "../../../public/rocket.png";
import headset from "../../../public/headset.png";

function Featured() {
  return (
    <>
      <section className="mt-16 max-w-6xl py-6 mx-auto px-5">
        <div className="text-center flex gap-10 flex-col">
          <h3 className="text-[1.4rem] leading-7 lg:text-[1.4rem] md:text-lg md:leading-6 font-semibold uppercase">
            Why Choose us ?
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-36 md:gap-3 ">
            <div className="md:w-1/2 w-full h-full relative">
              <Image
                src={giftbox}
                objectFit="contain"
                alt="Gift Box Image"
                className="larg_raduis"
              />
              <div className="absolute top-4 -right-12 lg:top-14 lg:-right-4 md:top-9 md:-right-6 w-72 flex flex-col lg:gap-2 md:gap-0 items-center">
                <h4 className="font-semibold lg:text-xl md:text-lg text-sm uppercase ">
                  We Prefer Quality
                </h4>
                <p className="lg:text-[0.8rem] md:text-[0.7rem] text-[0.6rem] w-56 px-5 text-[#d1d1d193] lg:leading-4 md:leading-3 lg:w-52 md:w-56">
                  We Care About Our Users So We Give The Best and are Ready to
                  answer every Question 24/7
                </p>
              </div>
            </div>
            <div className="md:w-1/2 w-full flex lg:gap-8 md:gap-3 gap-5 flex-col">
              <div className="bg-white w-full h-16 larg_raduis bg_featured flex md:px-5 px-1 py-[2.25rem] items-center">
                <div>
                  <Image
                    src={trophy}
                    objectFit="contain"
                    width={80}
                    alt="Trophy Icon"
                  />
                </div>
                <div className="flex flex-col">
                  <h5 className="lg:text-base text-[0.8rem] uppercase font-semibold">
                    High Quality Promotion
                  </h5>
                  <p className="lg:text-[0.7rem] text-[0.5rem] md:px-5 px-2 text-[#d1d1d1ce] leading-3 md:text-[0.6rem]">
                    We use only proven account promotion tactics without losing
                    the trust of the audience.
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="bg-white w-full h-16 larg_raduis bg_featured flex md:px-5 px-1 py-[2.25rem] items-center">
                <div>
                  <Image
                    src={rocket}
                    objectFit="contain"
                    width={80}
                    alt="Trophy Icon"
                  />
                </div>
                <div className="flex flex-col">
                  <h5 className="lg:text-base text-[0.8rem] uppercase font-semibold">
                    Fast Start
                  </h5>
                  <p className="lg:text-[0.7rem] text-[0.5rem] md:px-5 px-2 text-[#d1d1d1ce] leading-3 md:text-[0.6rem]">
                    if you dreamed of becoming popular then very soon your dream
                    will come true with us.
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="bg-white w-full h-16 larg_raduis bg_featured flex md:px-5 px-1 py-[2.25rem] items-center">
                <div>
                  <Image
                    src={headset}
                    objectFit="contain"
                    width={80}
                    alt="Trophy Icon"
                  />
                </div>
                <div className="flex flex-col">
                  <h5 className="lg:text-base text-[0.8rem] uppercase font-semibold">
                    24/7 Support
                  </h5>
                  <p className="lg:text-[0.7rem] text-[0.5rem] md:px-5 px-2 text-[#d1d1d1ce] leading-3 md:text-[0.6rem]">
                    We will solve the issues of our costomers in the shortest
                    possible time sure satisfied.
                  </p>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Featured;
