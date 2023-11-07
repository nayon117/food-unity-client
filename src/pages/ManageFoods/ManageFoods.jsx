import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const ManageFoods = () => {
  const [foods, setFoods] = useState([]);
  const { user } = useAuth()
  const url = `http://localhost:5000/foods?email=${user.email}`

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) =>  setFoods(data))
  },[url])
 console.log(foods);

  return (
    
    <div>
      <p>Hello, I am ManageFoods</p>
    </div>
  );
};
export default ManageFoods;