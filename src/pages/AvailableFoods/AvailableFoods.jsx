import { useEffect, useState } from "react";
import FeaturedCard from "../../components/FeaturedCard";

const AvailableFoods = () => {
  const [availableFoods, setAvailableFoods] = useState([])
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/foods')
      .then(res => res.json())
       .then(data=>setAvailableFoods(data))
  }, [])
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter availableFoods based on the search query
  const filteredFoods = availableFoods.filter((food) =>
    food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="my-20">
      <input type="text" placeholder="search here ..." className="input input-bordered   block mx-auto
      my-10 w-full max-w-xs"
      onChange={handleSearchChange}  
      value={searchQuery}
      />
      <p className="text-4xl font-bold text-center">Available Foods</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
           filteredFoods?.map(food => <FeaturedCard
            key={food._id}
            food={food}
          ></FeaturedCard>)
        }
      </div>
    </div>
  );
};
export default AvailableFoods;