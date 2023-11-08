import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const [updateForms, setUpdateForms] = useState({});
  const data = useLoaderData();

  useEffect(() => {
    if (data) {
      setUpdateForms(data);
    }
  }, [data]);

  console.log(updateForms);
  const {
    _id,
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
    foodStatus,
  } = updateForms || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodQuantity = form.foodQuantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expiredDateTime = form.expiredDateTime.value;
    const foodStatus = form.foodStatus.value;

    const updateData = {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expiredDateTime,
      foodStatus,
    };
    console.log(updateData);

    axios.put(`http://localhost:5000/update/${_id}`, updateData).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast.success("you have update data successfully");
      }
    });
  };

  return (
    <div className="px-24 py-10 bg-[#F4F3F0]">
      <h2 className="text-center font-bold text-2xl py-10">Update a Food</h2>
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
              defaultValue={foodName}
            />
          </div>
          <div className="md:w-1/2 md:ml-4">
            <label className="label" htmlFor="foodImage">
              <span className="label-text">Food Image</span>
            </label>
            <input
              className="input w-full input-bordered"
              name="foodImage"
              defaultValue={foodImage}
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
              defaultValue={foodQuantity}
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
              defaultValue={pickupLocation}
              placeholder="Enter Pickup Location"
            />
          </div>
        </div>
        {/* expiredDateTime status */}
        <div className="md:flex mb-6">
          <div className=" md:w-1/2">
            <label className="label" htmlFor="expiredDateTime">
              <span className="label-text">Expire Date</span>
            </label>

            <input
              className="input w-full input-bordered"
              type="date"
              name="expiredDateTime"
              defaultValue={expiredDateTime}
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
              defaultValue={foodStatus}
            />
          </div>
        </div>

        <input
          className="btn btn-block my-3 btn-neutral"
          type="submit"
          value="Update Food"
        />
      </form>
    </div>
  );
};
export default Update;
