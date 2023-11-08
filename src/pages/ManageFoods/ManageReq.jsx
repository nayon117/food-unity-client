import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ManageReqRow from "./ManageReqRow";

const ManageReq = () => {
  const [requests, setRequests] = useState([]);
  const loadedData = useLoaderData();
  console.log(loadedData);

  useEffect(() => {
    if (loadedData) {
      setRequests(loadedData);
    }
  }, [loadedData]);

  return (
    <div>
      <p className="text-4xl font-bold text-center my-10">
        Requester for this food:{requests.length}
      </p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              requests?.map(request => <ManageReqRow
                key={request._id}
                request={request}
              ></ManageReqRow>)
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ManageReq;
