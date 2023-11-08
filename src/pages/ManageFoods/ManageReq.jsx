import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
const ManageReq = () => {
 
  const { foodId } = useParams()
  console.log(foodId);
  const [foodRequests,setFoodRequests] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/requests`)
    .then((res) => res.json())
    .then((data) => {
      // Filter the requests to only include those with a matching foodId
      const filteredRequests = data.filter((request) => request._id === foodId);
      setFoodRequests(filteredRequests);
    })
  }, [foodId])
  console.log(foodRequests);

  return (
    <div>
      <p>Hello, I am ManageReq</p>
    </div>
  );
};
export default ManageReq;