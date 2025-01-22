import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const Statistic = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="text-center bg-[#9538E2] py-4 mt-6">
      <Helmet>
        <title>Statistic - Gadget Heaven</title>
      </Helmet>
      <h1 className="text-3xl font-semibold">Statistic</h1>
      <p className="text-base font-normal">
        Explore the latest gadgets that will take your experience to <br /> the
        next level. From smart devices to the coolest accessories, we have it
        all!
      </p>
    </div>
  );
};

export default Statistic;
