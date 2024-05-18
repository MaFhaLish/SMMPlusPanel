import { SignUp } from "@clerk/nextjs";
import Header from "@/Components/Sections/Header";

export default function Page() {
  return (
    <>
      <Header />
      <div className="flex mt-10 items-center flex-col gap-10">
        <SignUp path="/sign-up" />
      </div>
    </>
  );
}
