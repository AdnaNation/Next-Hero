import React from "react";

const page = ({ params }) => {
  if (params.feathure.length == 3) {
    return <div>{params.feathure[2]}</div>;
  }
  return <div>categories details page</div>;
};

export default page;
