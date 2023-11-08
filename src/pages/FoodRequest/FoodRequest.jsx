import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import FoodRequestCard from "./FoodRequestCard";
import useAuth from "../../hooks/useAuth";

const FoodRequest = () => {
  const [reqeusts, setRequests] = useState([]);
  const { user } = useAuth();
  // const data = useLoaderData()
  const url = `http://localhost:5000/requests?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, [url]);
  console.log(reqeusts);
  return (
    <div className="my-10">
      <p className="text-center text-4xl font-bold">Food Requests</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reqeusts?.map((request) => (
          <FoodRequestCard
            key={request._id}
            request={request}
            reqeusts={reqeusts}
            setRequests={setRequests}
          ></FoodRequestCard>
        ))}
      </div>
    </div>
  );
};
export default FoodRequest;
