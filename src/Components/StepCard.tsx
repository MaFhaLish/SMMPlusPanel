import { FiUserCheck, FiShoppingCart } from "react-icons/fi";
import { IoGiftOutline } from "react-icons/io5";

function StepsCard() {
  return (
    <>
      <div id="card">
        <div className="relative card_shadow flex flex-col w-60 h-56 px-3 py-5 bg-[#0A0A15] larg_raduis gap-1 justify-center items-center">
          <div className="absolute left-3 top-4">
            <div className="relative">
              <div className="absolute z-0 text-xl font-bold">Step</div>
              <div className="absolute z-10 -top-3 left-4 text-4xl font-bold text-[#d1d1d154]">
                1
              </div>
            </div>
          </div>
          <FiUserCheck className="w-36 h-36 text-[#0F1729]" />
          <h4 className=" font-semibold uppercase">Register an account</h4>
          <p className="text-[0.6rem] px-5 text-[#d1d1d193] leading-3">
            Go to the registration page and fill in all the fields and register
          </p>
        </div>
      </div>
      {/*  */}
      <div id="card">
        <div className="relative card_shadow flex flex-col w-60 h-56 px-3 py-5 bg-[#0A0A15] larg_raduis gap-1 justify-center items-center">
          <div className="absolute left-3 top-4">
            <div className="relative">
              <div className="absolute z-0 text-xl font-bold">Step</div>
              <div className="absolute z-10 -top-3 left-4 text-4xl font-bold text-[#d1d1d154]">
                2
              </div>
            </div>
          </div>
          <FiShoppingCart className="w-36 h-36 text-[#0F1729]" />
          <h4 className=" font-semibold uppercase">Order a service</h4>
          <p className="text-[0.6rem] px-5 text-[#d1d1d193] leading-3">
            Choose any of services that you like and place your order
          </p>
        </div>
      </div>
      {/*  */}
      <div id="card">
        <div className="relative card_shadow flex flex-col w-60 h-56 px-3 py-5 bg-[#0A0A15] larg_raduis gap-1 justify-center items-center">
          <div className="absolute left-3 top-4">
            <div className="relative">
              <div className="absolute z-0 text-xl font-bold">Step</div>
              <div className="absolute z-10 -top-3 left-4 text-4xl font-bold text-[#d1d1d154]">
                3
              </div>
            </div>
          </div>
          <IoGiftOutline className="w-36 h-36 text-[#0F1729]" />
          <h4 className=" font-semibold uppercase">Get Your Popularity</h4>
          <p className="text-[0.6rem] px-5 text-[#d1d1d193] leading-3">
            Monitor How your Services are performed efficiently and quickly
          </p>
        </div>
      </div>
    </>
  );
}

export default StepsCard;
