import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";

const Statistic = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <Banner></Banner>
      <h2>hey im from Statistic</h2>
    </div>
  );
};

export default Statistic;
