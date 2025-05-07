import React from "react";

const getDetailsPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const { title, body } = await getDetailsPost(params.id);
  return (
    <div>
      <h5> Title: {title}</h5>
      <h5>{body}</h5>
    </div>
  );
};

export default page;
