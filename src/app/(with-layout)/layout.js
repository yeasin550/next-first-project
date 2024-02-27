import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const WithLayout = ({ children }) => {
  return (
    <main className="">
      <Navbar />
      {children}
      <Footer/>
    </main>
  );
};
export default WithLayout;
