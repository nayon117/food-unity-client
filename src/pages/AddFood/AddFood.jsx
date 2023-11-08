import axios from "axios";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect } from "react";

const AddFood = () => {
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user.email;
    const donatorImage = user.photoURL;
    const donatorName = user.displayName;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodQuantity = form.foodQuantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expiredDateTime = form.expiredDateTime.value;
    const foodStatus = form.foodStatus.value;

    const addData = {
      email,
      donatorImage,
      donatorName,
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expiredDateTime,
      foodStatus,
    };

    axios.post("http://localhost:5000/foods", addData).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("you have added successfully");
      }
    });
  };

  useEffect(() => {
    document.title = 'FoodUnity | Add Food';
  }, []);

  return (
    <div className="px-24 py-10 bg-[#F4F3F0]">
      <h2 className="text-center font-bold text-2xl py-10">Add a Food</h2>
      <form onSubmit={handleSubmit}>
        {/* row */}
        <div className="md:flex mb-6">
          <div className="  md:w-1/2">
            <label className="label" htmlFor="foodName">
              <span className="label-text">Food Name</span>
            </label>

            <input
              className="input w-full input-bordered"
              name="foodName"
              placeholder="Food Name"
            />
          </div>
          <div className="md:w-1/2 md:ml-4">
            <label className="label" htmlFor="foodImage">
              <span className="label-text">Food Image</span>
            </label>
            <input
              className="input w-full input-bordered"
              name="foodImage"
              placeholder="photo url"
            />
          </div>
        </div>
        {/*  quantity pickup location */}
        <div className="md:flex mb-6">
          <div className="  md:w-1/2">
            <label className="label" htmlFor="foodQuantity">
              <span className="label-text">Quantity</span>
            </label>

            <input
              className="input w-full input-bordered"
              name="foodQuantity"
              placeholder="quantity"
            />
          </div>
          <div className=" md:w-1/2 md:ml-4">
            <label className="label" htmlFor="pickupLocation">
              <span className="label-text">Pickup Location</span>
            </label>
            <input
              className="input w-full input-bordered  "
              name="pickupLocation"
              placeholder="Enter Pickup Location"
            />
          </div>
        </div>
        {/* expiredDateTime Additional Notes */}
        <div className="md:flex mb-6">
          <div className=" md:w-1/2">
            <label className="label" htmlFor="expiredDateTime">
              <span className="label-text">Expire Date</span>
            </label>

            <input
              className="input w-full input-bordered"
              type="date"
              name="expiredDateTime"
              placeholder=" expiredDateTime"
            />
          </div>
          <div className=" md:w-1/2 md:ml-4">
            <label className="label" htmlFor="foodStatus">
              <span className="label-text">Food Status</span>
            </label>
            <input
              className="input w-full input-bordered  "
              name="foodStatus"
              defaultValue="available"
            />
          </div>
        </div>

        <input
          className="btn btn-block my-3 btn-neutral"
          type="submit"
          value="Add Food"
        />
      </form>
    </div>
  );
};
export default AddFood;
