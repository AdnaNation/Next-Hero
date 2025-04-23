"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },

    {
      title: "Services",
      path: "/services",
    },

    {
      title: "Contacts",
      path: "/contacts",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Categories",
      path: "/categories",
    },
  ];
  const handleLogin = () => {
    router.push("/login");
  };

  if (pathName.includes("dashboard")) {
    return <div className="bg-green-400">Dashboard layout</div>;
  }

  return (
    <nav className=" bg-gray-400 flex justify-between h-16 ">
      <h6 className="text-3xl font-bold">
        Next.<span className="text-yellow-200">js</span>
      </h6>
      <ul className="flex gap-2 justify-evenly">
        {links?.map((link) => (
          <Link
            className={` ${
              link.path === pathName && "font-bold text-red-950 shadow-lg"
            }`}
            key={link.path}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </ul>
      <button onClick={handleLogin} className="bg-orange-200 px-2">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
