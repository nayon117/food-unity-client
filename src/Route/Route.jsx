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
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import Update from "../components/Update";

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
                element: <PrivateRoute><FoodRequest></FoodRequest></PrivateRoute>,
                loader:()=>fetch('http://localhost:5000/requests')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/details/:_id",
                element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/foods/${params._id}`)
            },
            {
                path: "/update/:_id",
                element: <Update></Update>,
                loader:({params})=>fetch(`http://localhost:5000/update/${params._id}`)
            },
        ]
        
    }
])

export default myCreatedRoute;