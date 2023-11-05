import { Link } from "react-router-dom";
import errorPage from '../../assets/errorpage.json'
import Lottie from "lottie-react";

const ErrorPage = () => {
    return (
        <div className="flex flex-col h-screen items-center">
            <Lottie animationData={errorPage}></Lottie>
           <Link to="/"><button className="text-white btn bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300   shadow-lg  font-medium rounded-lg text-sm px-5  text-center mr-2 mb-2">Back TO HOMEPAGE</button></Link>
           </div>
        
    );
};

export default ErrorPage;