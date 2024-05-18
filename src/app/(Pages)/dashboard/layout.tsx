import React from "react";
import HeaderAndSideBar from "@/Components/dashboard/HeaderAndSidebar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`panel`}>
      <HeaderAndSideBar />

      { children }
      {/* Header Container For Box Shadow */}
      {/* <>
        <div className="header_container">
          <header className="flex justify-between max-w-6xl py-6	mx-auto px-5 items-center test">
            <Link href="/">
              <h1 className="text-2xl md:text-1xl lg:text-2xl uppercase cursor-pointer font-bold tracking-tighter">
                Buzz Blasters
              </h1>
            </Link>
            <div>
              <div className="flex gap-6 items-center">
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </header>
        </div>
      </> */}
    </main>
  );
}

export default layout;
