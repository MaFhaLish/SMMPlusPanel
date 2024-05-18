import { SiTelegram } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <section className="footer_shadow">
        <footer className="pb-8 pt-14 max-w-6xl flex-col mx-auto px-5 md:mt-16 mt-10">
          <div className="flex lg:flex-row lg:justify-between gap-10 flex-col justify-center lg:items-start items-center w-full">
            <div className="lg:w-2/6 flex flex-col gap-4 py-4 w-full">
              <h4 className="logo_background text-2xl md:text-1xl lg:text-2xl uppercase cursor-pointer font-bold tracking-tighter">
                SMMPLUSPANEL
              </h4>
              <p className="text-[0.8rem] text-[#d1d1d1ce] leading-5">
                Experience the power of the Best SMM panel with MoreThanPanel.
                Elevate your social media strategy with the Cheapest SMM panel
                in the market. Join us today and dominate the digital world!
              </p>
              <div className="flex items-center gap-8">
                <FaFacebook className="w-7 h-7 cursor-pointer" />
                <FaInstagram className="w-7 h-7 cursor-pointer" />
                <FaPinterest className="w-7 h-7 cursor-pointer" />
              </div>
            </div>
            <div className="lg:w-1/6 font-light text-[#d1d1d1] text-[0.9rem] flex flex-col gap-3 w-full">
              <h6 className="text-[#f3f3f3]">Useful Links</h6>
              <ul className="flex flex-col gap-2">
                <li>• Home</li>
                <li>• Pricing</li>
                <li>• Our Story</li>
                <li>• How it Works</li>
                <li>• Terms & Conditions</li>
                <li>• Blog</li>
                <li>• Contact</li>
              </ul>
            </div>
            <div className="lg:w-1/6 font-light text-[#d1d1d1] text-[0.9rem] flex flex-col gap-3 w-full">
              <h6 className="text-[#f3f3f3]">Services</h6>
              <ul className="flex flex-col gap-2">
                <li>• Instagram SMM</li>
                <li>• Twitter SMM</li>
                <li>• Spotify SMM</li>
                <li>• SoundCloud SMM</li>
                <li>• Facebook SMM</li>
                <li>• YouTube SMM</li>
                <li>• TikTok SMM</li>
                <li>• Telegram SMM</li>
                <li>• Twitch Smm</li>
                <li>• Threads Followers</li>
              </ul>
            </div>
            {/* <div className="w-1/6 font-light text-[#d1d1d1] text-[0.9rem] flex flex-col gap-3">
              <h6 className="text-[#f3f3f3]">Free Generator Tools</h6>
              <ul className="flex flex-col gap-2">
                <li>• Streaming Calculatorl</li>
                <li>• Soundcloud Calculator</li>
                <li>• Onlyfans Calculator</li>
                <li>• Linkedin Calculator</li>
                <li>• Twitch Calculator</li>
                <li>• Twitter Character</li>
                <li>• Youtube Calculator</li>
                <li>• Tiktok Calculator</li>
                <li>• Instagram Calculator</li>
              </ul>
            </div> */}
            <div className="lg:w-2/6 font-light text-[#d1d1d1] text-[0.9rem] flex flex-col gap-3 py-4 w-full">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <SiTelegram className="w-5 h-5 cursor-pointer" />
                  116 George St, London PA34 5NT, United Kingdom
                </li>
                <li className="flex items-center gap-3">
                  <IoIosMail className="w-5 h-5 cursor-pointer" />
                  hello@morethanpanel.com
                </li>
                <li className="flex items-center gap-3">
                  <FaWhatsapp className="w-5 h-5 cursor-pointer" />
                  +1707 606 1868
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
