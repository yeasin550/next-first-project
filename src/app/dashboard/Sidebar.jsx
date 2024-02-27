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
    <aside className="mr-10">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <ul>
        {navLinks.map(({ path, title }) => (
          <li key={path} className="my-2 hover:font-bold">
            <NavLink
              exact={'path === "/'}
              activeClassName="text-purple-500"
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
