import NavLink from "@/components/NavLink";

const navLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/add-product",
    title: "Add Products",
  },
  {
    path: "/dashboard/manage-product",
    title: "Manage Products",
  },
  {
    path: "/",
    title: "Home",
  },
];
const Sidebar = () => {
  return (
    <aside className="mr-10 h-screen px-5 py-4 border-2 border-white bg-purple-700 text-white rounded-md">

      <h1 className="text-2xl font-bold">Dashboard</h1>
      <ul>
        {navLinks.map(({ path, title }) => (
          <li key={path} className="my-2 border py-2 px-3 rounded-md">
            <NavLink
              exact={'path === "/'}
              activeClassName="text-yellow-300 font-bold"
              href={path}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
