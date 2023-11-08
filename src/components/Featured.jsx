import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";
import { Link } from "react-router-dom";

const Featured = () => {
  const [availableFoods, setAvailableFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/first-six")
      .then((res) => res.json())
      .then((data) => setAvailableFoods(data));
  }, []);
  // console.log(availableFoods);
  return (
    <div className="my-20">
      <h3 className="text-4xl font-bold text-center">Featured Foods</h3>
      <div
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {availableFoods?.map((food) => (
          <FeaturedCard key={food._id} food={food}></FeaturedCard>
        ))}
      </div>
      <Link to="/available-foods">
        <button className="btn btn-neutral text-center mx-auto block">
          see all
        </button>
      </Link>
    </div>
  );
};
export default Featured;
