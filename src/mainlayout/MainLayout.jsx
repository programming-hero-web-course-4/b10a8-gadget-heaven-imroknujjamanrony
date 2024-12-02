import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar></Navbar>
      {/* dynamic */}
      <div className="">
        {/* dynamic */}
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <div className="mt-52">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
