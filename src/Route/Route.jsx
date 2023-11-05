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
import PrivateRoute from "./PrivateRoute";

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
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: "manage-foods",
                element: <PrivateRoute><ManageFoods></ManageFoods></PrivateRoute>
            },
            {
                path: "food-request",
                element: <PrivateRoute><FoodRequest></FoodRequest></PrivateRoute>
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