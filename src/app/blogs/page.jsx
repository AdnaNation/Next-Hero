import Link from "next/link";
import React from "react";

const page = () => {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with React",
      author: "Azizul Islam Adnan",
      date: "2025-04-22",
      thumbnail:
        "https://blog.e-zest.com/hs-fs/hubfs/sonal-getting-started-with-reactjs-20170705.png?width=767&name=sonal-getting-started-with-reactjs-20170705.png",
      summary:
        "An introduction to the basics of React.js including components, JSX, and state management.",
      tags: ["React", "JavaScript", "Frontend"],
      link: "/vlogs/react-intro",
    },
    {
      id: 2,
      title: "Deploying Node.js Apps with Docker and Coolify",
      author: "Azizul Islam Adnan",
      date: "2025-04-20",
      thumbnail:
        "https://blog.e-zest.com/hs-fs/hubfs/sonal-getting-started-with-reactjs-20170705.png?width=767&name=sonal-getting-started-with-reactjs-20170705.png",
      summary:
        "Learn how to containerize your Node.js application and deploy it using Coolify with GitHub CI/CD.",
      tags: ["Node.js", "Docker", "Coolify", "DevOps"],
      link: "/vlogs/docker-coolify-deploy",
    },
    {
      id: 3,
      title: "Understanding MongoDB for Beginners",
      author: "Azizul Islam Adnan",
      date: "2025-04-18",
      thumbnail:
        "https://blog.e-zest.com/hs-fs/hubfs/sonal-getting-started-with-reactjs-20170705.png?width=767&name=sonal-getting-started-with-reactjs-20170705.png",
      summary:
        "This vlog breaks down the basics of MongoDB and shows how to perform CRUD operations in your app.",
      tags: ["MongoDB", "Database", "Backend"],
      link: "/vlogs/mongodb-basics",
    },
    {
      id: 4,
      title: "Building a Portfolio with Next.js",
      author: "Azizul Islam Adnan",
      date: "2025-04-15",
      thumbnail:
        "https://blog.e-zest.com/hs-fs/hubfs/sonal-getting-started-with-reactjs-20170705.png?width=767&name=sonal-getting-started-with-reactjs-20170705.png",
      summary:
        "A walkthrough on how to build and deploy a beautiful portfolio site using Next.js and Tailwind CSS.",
      tags: ["Next.js", "Portfolio", "Tailwind CSS"],
      link: "/vlogs/nextjs-portfolio",
    },
  ];

  return (
    <div className="p-4">
      {blogs.map((blog) => (
        <div className="border" key={blog.id}>
          <p>{blog.title}</p> <h3>{blog.author}</h3> <p>{blog.summary}</p>
          <button className="bg-red-400 p-3">
            <Link href={`/blogs/${blog.id}`}>View Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default page;
