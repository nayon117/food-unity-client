import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-2 md:px-4 lg:px-8">
                <Navbar></Navbar>
            </div>
            <div className="min-h-screen max-w-screen-xl mx-auto px-2 md:px-4 lg:px-8">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;