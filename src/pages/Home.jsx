import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Headings from "../components/Headings";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Home - Gadget Heaven</title>
      </Helmet>
      {/* banner */}
      <Banner></Banner>
      {/* heading */}
      <Headings title={"Explore Cutting-Edge Gadgets"}></Headings>
      {/* categories side bar */}
      <div className="grid grid-cols-12 w-11/12 mx-auto mt-10">
        <aside className="col-span-2 ">
          <Categories categories={categories}></Categories>
        </aside>
        <div className="col-span-10">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
