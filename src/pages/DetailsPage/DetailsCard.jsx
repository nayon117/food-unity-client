import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import { useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";

const DetailsCard = ({ details }) => {
  const { user } = useAuth();
  ``;
  const {
    additionalNotes,
    expiredDateTime,
    pickupLocation,
    foodQuantity,
    donatorName,
    foodImage,
    foodName,
  } = details || {};

  const dialogRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const donatorName = form.donatorName.value;
    const pickupLocation = form.pickupLocation.value;
    const userEmail = form.userEmail.value;
    const expiredDateTime = form.expiredDateTime.value;
    const AdditionalNotes = form.AdditionalNotes.value;
    const DonationMoney = form.DonationMoney.value;

    const requestData = {
      foodName,
      foodImage,

      donatorName,
      pickupLocation,
      userEmail,
      expiredDateTime,
      AdditionalNotes,
      DonationMoney,
    };

    axios
      .post("http://localhost:5000/requests", requestData)
      .then((res) => {
        console.log("Response data:", res.data);
        if (res.data.acknowledged === true) {
          toast.success("your request has been successfull");
        } else {
          toast.error("Failed");
        }
      })
      .catch((err) => {
        console.error("Request error:", err);
      });

    dialogRef.current.close();
  };

  return (
    <div className="my-20">
      <h2 className="font-medium">Donar Name: {donatorName}</h2>
      <h3 className="font-medium">pickup Location:{pickupLocation}</h3>
      <img src={foodImage} alt="" />
      <div className="space-y-3">
        <h3 className="font-medium">Food Name: {foodName}</h3>
        <h3 className="font-medium">Food Quantity: {foodQuantity}</h3>

        <h3 className="font-medium">Additional Notes: {additionalNotes}</h3>
        <h3 className="font-medium">Expire Date: {expiredDateTime}</h3>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <button
        className="btn btn-neutral"
        onClick={() => dialogRef.current.showModal()}
      >
        Request
      </button>
      <dialog id="my_modal_1" className="modal" ref={dialogRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Request Form</h3>
          <form method="dialog" onSubmit={handleSubmit} className="space-y-4">
            <label className="font-medium">Food Name: </label>
            <input
              className="font-medium border border-black px-2  rounded-md"
              type="text"
              name="foodName"
              readOnly
              defaultValue={foodName}
            />
            <br />
            <label className="font-medium">Food Image URL: </label>
            <input
              className="font-medium border border-black px-2  rounded-md"
              type="text"
              name="foodImage"
              readOnly
              defaultValue={foodImage}
            />
            <br />

            <label className="font-medium">Donar Name: </label>
            <input
              className="font-medium border border-black px-2  rounded-md"
              type="text"
              name="donatorName"
              readOnly
              defaultValue={donatorName}
            />
            <br />
            <label className="font-medium">Pickup Location: </label>
            <input
              className="font-medium border border-black px-2 rounded-md"
              type="text"
              name="pickupLocation"
              readOnly
              defaultValue={pickupLocation}
            />
            <br />
            <label className="font-medium">User Email: </label>
            <input
              className="font-medium border border-black px-2  rounded-md"
              type="text"
              name="userEmail"
              readOnly
              defaultValue={user.email}
            />
            <br />
            <label className="font-medium">Expire Date: </label>
            <input
              className="font-medium border border-black px-2  rounded-md"
              type="text"
              name="expiredDateTime"
              readOnly
              defaultValue={expiredDateTime}
            />
            <br />
            <label className="font-medium">Additional Notes: </label>
            <input
              className="border border-black px-2  rounded-md"
              type="text"
              name="AdditionalNotes"
              placeholder="Additonal notes"
            />
            <br />
            <label className="font-medium">Donation Money: </label>
            <input
              className="border border-black px-2 rounded-md"
              type="text"
              name="DonationMoney"
              placeholder="Donation Money"
            />

            <button type="submit" className="btn block mx-auto btn-neutral">
              Request
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

DetailsCard.propTypes = {
  details: PropTypes.object,
};

export default DetailsCard;
