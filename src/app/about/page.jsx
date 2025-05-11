import React from "react";
import AboutContent from "../components/AboutContent";
import Link from "next/link";
export const metadata = {
  title: "About",
  description: "This is about page",
};

const page = () => {
  return (
    <div>
      <div className=" flex flex-col justify-between">
        <Link href="/about/history">History</Link>
        <Link href="/about/mission">Mission</Link>
      </div>
      <AboutContent></AboutContent>
    </div>
  );
};

export default page;
