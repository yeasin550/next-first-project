// import Link from "next/link";

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
  return (
    <nav className="flex items-center justify-between mx-auto px-10 sticky top-0 z-50 bg-white">
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
      <div className="bg-gray-300 rounded-full px-4 py-2 border border-purple-700 hover:border-2">
        P
      </div>
    </nav>
  );
};

export default Navbar;
