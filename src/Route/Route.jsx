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
import ManageReq from "../pages/ManageFoods/ManageReq";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "available-foods",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "add-food",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-foods",
        element: (
          <PrivateRoute>
            <ManageFoods></ManageFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "food-request",
        element: (
          <PrivateRoute>
            <FoodRequest></FoodRequest>
          </PrivateRoute>
        ),
        loader: () => fetch("https://food-unity-server.vercel.app/requests"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:_id",
        element: (
          <PrivateRoute>
            <DetailsPage></DetailsPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://food-unity-server.vercel.app/foods/${params._id}`),
      },
      {
        path: "/update/:_id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://food-unity-server.vercel.app/update/${params._id}`),
      },
      {
        path: "/manage/:_id",
        element: <ManageReq></ManageReq>,
        loader: ({ params }) =>
          fetch(`https://food-unity-server.vercel.app/manage/${params._id}`),
      },
    ],
  },
]);

export default myCreatedRoute;
