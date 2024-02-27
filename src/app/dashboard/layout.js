import Sidebar from "./Sidebar";

export const metadata = {
  title: "Dashboard | Next Project",
  description: "Generated by create next app",
};

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex container mx-auto">
      {/* <a href="/add-product">Add Product</a>
           <a href="/manage-product">Manage Product</a> */}
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
