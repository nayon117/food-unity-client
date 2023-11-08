import { useEffect, useState } from "react";
import FeaturedCard from "../../components/FeaturedCard";

const AvailableFoods = () => {
  const [availableFoods, setAvailableFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    fetch(`https://food-unity-server.vercel.app/foods?sort=${sortOrder}`)
      .then((res) => res.json())
      .then((data) => setAvailableFoods(data));
  }, [sortOrder]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  //  handlesort functionality
  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };

  // Filter availableFoods based on the search query
  const filteredFoods = availableFoods.filter((food) =>
    food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  useEffect(() => {
    document.title = "FoodUnity | Available Foods";
  }, []);

  return (
    <div className="my-16">
      <div className="flex items-center mb-10">
        <input
          type="text"
          placeholder="search here ..."
          className="input input-bordered   block mx-auto
        w-full max-w-xs"
          onChange={handleSearchChange}
          value={searchQuery}
        />
        <button className="btn  btn-neutral" onClick={handleSort}>
          Sort by Expire Date
        </button>
      </div>
      <p className="text-4xl font-bold text-center">Available Foods</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredFoods?.map((food) => (
          <FeaturedCard key={food._id} food={food}></FeaturedCard>
        ))}
      </div>
    </div>
  );
};
export default AvailableFoods;
