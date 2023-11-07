import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import FoodRequestCard from "./FoodRequestCard";

const FoodRequest = () => {
  const [reqeusts,setRequests] = useState([])
  const data = useLoaderData()
  useEffect(() => {
    if (data) {
      setRequests(data)
    }
  }, [data])
  console.log(reqeusts);
  return (
    <div>
      <p>Hello, I am FoodRequest</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {
          reqeusts?.map(request => <FoodRequestCard
            key={request._id}
            request={request}
            reqeusts={reqeusts}
            setRequests={setRequests}
          ></FoodRequestCard>)
        }
      </div>
    </div>
  );
};
export default FoodRequest;