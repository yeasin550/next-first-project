// import Link from "next/link";
"use client"
import  { useState } from 'react';
import NavLink from "./NavLink";
import { FaHeartBroken } from "react-icons/fa";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/appoinment",
    title: "Appoinment",
  },
  // {
  //   path: "/blogs",
  //   title: "Blogs",
  // },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex items-center justify-between mx-auto px-10 sticky top-0 z-50 bg-white shadow-md shadow-purple-300">
      <h1 className="text-2xl flex items-center gap-2 font-bold text-purple-700">
        <FaHeartBroken /> Doctris
      </h1>
      <ul className="flex justify-center items-center">
        {navLinks.map(({ path, title }) => (
          <li key={path} className="mx-2 py-3 text-lg hover:font-bold">
            <NavLink
              exact={'path === "/'}
              activeClassName="text-purple-500 font-bold border-b-2 border-b-purple-700"
              href={path}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* <div className="bg-gray-300 cursor-pointer rounded-full border hover:border-2 border-purple-700">
                  <img
            src="https://img.freepik.com/free-photo/young-male-doctor-wearing-stethoscope-medical-gown-points-side-isolated-white-wall_141793-36176.jpg?w=740&t=st=1709101772~exp=1709102372~hmac=6144d43fb4bf9eb7a8bf56f793ef17fd5723101cb6a3a1b5f3aeb65ac6900b45"
            alt="Image 1"
            className="rounded-full w-12 h-12 "
          />
      </div> */}
          <div className="relative">
      <div className="bg-gray-300 cursor-pointer rounded-full border hover:border-2 border-purple-700" onClick={toggleDropdown}>
        <img
          src="https://img.freepik.com/free-photo/young-male-doctor-wearing-stethoscope-medical-gown-points-side-isolated-white-wall_141793-36176.jpg?w=740&t=st=1709101772~exp=1709102372~hmac=6144d43fb4bf9eb7a8bf56f793ef17fd5723101cb6a3a1b5f3aeb65ac6900b45"
          alt="Image 1"
          className="rounded-full w-12 h-12"
        />
      </div>
      {isOpen && (
        <div className="absolute z-10 right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-md">
         
          <button className="block w-full text-lg text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 focus:outline-none focus:bg-gray-100">
            Profile
          </button>
           <button className="block w-full text-lg text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 focus:outline-none focus:bg-gray-100">
            Login
          </button>
        </div>
      )}
    </div>
    </nav>
  );
};

export default Navbar;
