import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";
import AddFood from "../pages/AddFood/AddFood";
import ManageFoods from "../pages/ManageFoods/ManageFoods";
import FoodRequest from "../pages/FoodRequest/FoodRequest";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "available-foods",
                element: <AvailableFoods></AvailableFoods>
            },
            {
                path: "add-food",
                element: <AddFood></AddFood>
            },
            {
                path: "manage-foods",
                element: <ManageFoods></ManageFoods>
            },
            {
                path: "food-request",
                element: <FoodRequest></FoodRequest>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
        
    }
])

export default myCreatedRoute;