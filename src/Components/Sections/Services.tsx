import StepCard from "@/Components/StepCard";
import { FiUserCheck } from "react-icons/fi";

function Services() {
  return (
    <section className="mt-16 md:mt-0 min-w-3xl max-w-5xl py-6 mx-auto px-5">
      <div className="flex flex-col justify-center w-full items-center gap-10 text-center">
        <h3 className="text-[1.4rem] leading-7 lg:text-[1.4rem] md:text-lg md:leading-6 font-semibold uppercase">
          How It Work ?
        </h3>
        <p className="text-sm lg:text-sm md:text-xs text-[#d1d1d1] uppercase">
          a few steps to promote your Business or personal page
        </p>
        <div className="w-full card_container flex flex-col md:flex-row gap-10 md:gap-2 items-center justify-between">
          <StepCard />
        </div>
      </div>
    </section>
  );
}

export default Services;
