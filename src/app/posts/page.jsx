import React from "react";
import { getPosts } from "../api/postsApi";
import Link from "next/link";

const page = async () => {
  const postsData = await getPosts();
  return (
    <div className="min-h-screen">
      <h6>All Posts</h6>
      <div className="grid grid-cols-4 gap-6">
        {postsData?.slice(0, 20)?.map(({ title, body, id }) => (
          <div key={id} className="border-2 p-6">
            <h5>Title: {title}</h5>
            <h5>Description: {body}</h5>
            <button className="btn bg-red-400 p-1">
              <Link href={`/posts/${id}`}> See Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
