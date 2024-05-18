"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { IoMdClose } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import { IoPricetagsOutline, IoBookOutline } from "react-icons/io5";
import { GoLightBulb } from "react-icons/go";

function header() {
  const [drop, setDrop] = useState(false);

  function menuDrop() {
    setDrop(!drop);
  }
  return (
    <>
      {/* Header Container For Box Shadow */}
      <div className="header_container">
        <header className="relative flex justify-between max-w-6xl py-6 flex-col md:flex-row mx-auto px-5 md:items-center">
          <div className="flex justify-between items-center">
            <Link href="/">
              <h1 className="text-2xl logo_background md:text-1xl lg:text-2xl uppercase cursor-pointer font-bold tracking-tighter">
                SMMPLUSPANEL
              </h1>
            </Link>
            <span
              className="text-2xl cursor-pointer md:hidden block"
              onClick={() => menuDrop()}
            >
              {drop ? (
                <IoMdClose className="text-[#ae3fd6] text-3xl" />
              ) : (
                <IoMenuSharp className="text-[#ae3fd6] text-3xl" />
              )}
            </span>
          </div>

          {/* Drop Menu */}
          {drop && (
            <div className="md:hidden absolute top-20 w-full left-0 z-10">
              <ul className="flex flex-col justify-center items-center font-light py-4 bg-[#0a0a15] transition-all ease-in duration-500">
                <li className="cursor-pointer my-6 md:my-0 hover:text-[#d1d1d1] flex justify-center items-center gap-2">
                  <IoPricetagsOutline />
                  Pricing
                </li>
                <span className="w-[80%] h-[2px] bg-[#8119a5] "></span>
                <li className="cursor-pointer my-6 md:my-0 hover:text-[#d1d1d1] flex justify-center items-center gap-2">
                  <GoLightBulb />
                  How it Works
                </li>
                <span className="w-[80%] h-[2px] bg-[#8119a5] "></span>
                <li className="cursor-pointer my-6 md:my-0 hover:text-[#d1d1d1] flex justify-center items-center gap-2 ">
                  <IoBookOutline />
                  Our Story
                </li>
                <span className="w-[80%] h-[2px] bg-[#8119a5] "></span>
                <li className="flex gap-6 items-center my-6 md:my-0 hover:text-[#d1d1d1] ">
                  <SignedOut>
                    <Link href="/sign-in hover:text-[#d1d1d1]">Sign In</Link>
                    <Link
                      href="/sign-up"
                      className="btn_Effect px-5 py-[6px] font-normal text-base"
                    >
                      Sign Up
                    </Link>
                  </SignedOut>
                  <SignedIn>
                    <Link
                      href="/dashboard"
                      className="btn_Effect px-5 py-[6px] font-normal text-base"
                    >
                      Dashboard
                    </Link>
                    <UserButton />
                  </SignedIn>
                </li>
              </ul>
            </div>
          )}

          {/* Menu */}
          <div className="hidden md:block md:text-sm lg:text-base">
            <ul className="md:flex md:gap-10 md:items-center font-light md:py-0 py-4 pl-7 md:pl-0 transition-all ease-in duration-500">
              <li className="hover:text-[#d1d1d1] cursor-pointer my-6 md:my-0 flex justify-center items-center gap-2">
                <IoPricetagsOutline />
                Pricing
              </li>
              <li className="hover:text-[#d1d1d1]  cursor-pointer my-6 md:my-0 flex justify-center items-center gap-2">
                <GoLightBulb />
                How it Works
              </li>
              <li className="hover:text-[#d1d1d1]  cursor-pointer my-6 md:my-0 flex justify-center items-center gap-2">
                <IoBookOutline />
                Our Story
              </li>
            </ul>
          </div>
          {/* Sign in and Sign out */}
          <div className="font-extralight">
            <li className="hidden md:flex gap-6 items-center my-6 md:my-0  z-20">
              <SignedOut>
                <Link
                  href="/sign-in"
                  className="md:ml-23 hover:text-[#d1d1d1]  "
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="btn_Effect px-5 py-[6px] font-normal text-base"
                >
                  Sign Up
                </Link>
              </SignedOut>
              <SignedIn>
                <Link
                  href="/dashboard"
                  className="md:ml-23 btn_Effect px-5 py-[6px] font-normal text-base"
                >
                  Dashboard
                </Link>
                <UserButton />
              </SignedIn>
            </li>
          </div>
        </header>
      </div>
    </>
  );
}

export default header;
