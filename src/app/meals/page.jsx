import React from "react";
import Meals from "../components/Meals";

const page = () => {
  return (
    <div className="p-12">
      <h1 className="text-3xl font-semibold text-red-400">Choose Your Meals</h1>
      <p>Choose meals of you choice by searching....</p>
      <Meals></Meals>
    </div>
  );
};

export default page;
