import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const DetailsPage = () => {
    const [details,setDetails] = useState({})
    const loadedDetails = useLoaderData()
    
    useEffect(() => {
        if (loadedDetails) {
             setDetails(loadedDetails)
         }
    }, [loadedDetails])
  
    
  return (
    <div>
          <div>
              <DetailsCard details={details}></DetailsCard>
       </div>
    </div>
  );
};
export default DetailsPage;