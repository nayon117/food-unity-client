import { useEffect, useState } from "react";
import FeaturedCard from "../../components/FeaturedCard";

const AvailableFoods = () => {
  const [availableFoods, setAvailableFoods] = useState([])
  

  useEffect(() => {
    fetch('http://localhost:5000/foods')
      .then(res => res.json())
       .then(data=>setAvailableFoods(data))
  }, [])
  console.log(availableFoods);
  return (
    <div className="my-20">
      <input type="text" placeholder="search here ..." className="input input-bordered   block mx-auto
      my-10 w-full max-w-xs" />
      <p className="text-4xl font-bold text-center">Available Foods</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          availableFoods?.map(food => <FeaturedCard
            key={food._id}
            food={food}
          ></FeaturedCard>)
        }
      </div>
    </div>
  );
};
export default AvailableFoods;