import React from "react";
import AboutContent from "../components/AboutContent";
import Link from "next/link";

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
