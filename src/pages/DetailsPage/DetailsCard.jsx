import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";

const DetailsCard = ({ details }) => {
    const {user} = useAuth()
  const { _id,
    additionalNotes,
    expiredDateTime,
    pickupLocation,
    foodQuantity,
    donatorName,
    foodImage,
    foodName,
  } = details || {};
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
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Request
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box space-y-4">
                  <h3 className="font-bold text-lg">Request Form</h3>
                  <label className="font-medium">Food Name: </label>
                  <input className="font-medium border border-black px-2  rounded-md" type="text" readOnly defaultValue={foodName} /><br />
                  <label className="font-medium">Food Image URL: </label>
                  <input className="font-medium border border-black px-2  rounded-md" type="text" readOnly defaultValue={foodImage} /><br />
                  <label className="font-medium">Food Id: </label>
                  <input className="font-medium border border-black px-2 rounded-md" type="text" readOnly defaultValue={_id} /><br />
                  <label className="font-medium">Donar Name: </label>
                  <input className="font-medium border border-black px-2  rounded-md" type="text" readOnly defaultValue={donatorName} /><br />
                  <label className="font-medium">Pickup Location: </label>
                  <input className="font-medium border border-black px-2 rounded-md" type="text" readOnly defaultValue={pickupLocation} /><br />
                  <label className="font-medium">User Email: </label>
                  <input className="font-medium border border-black px-2  rounded-md" type="text" readOnly defaultValue={user.email} /><br />  
                  <label className="font-medium">Expire Date: </label>
                  <input className="font-medium border border-black px-2  rounded-md" type="text" readOnly defaultValue={expiredDateTime} /><br />
                  <label className="font-medium">Additional Notes: </label>
                  <input  className="border border-black px-2  rounded-md" type="text" placeholder="Additonal notes"/><br />
                  <label className="font-medium">Donation Money: </label>
                  <input className="border border-black px-2 rounded-md" type="text" placeholder="Donation Money" />
                 
           
          <div className="modal-action">
            <form method="dialog">
              <button className="btn block mx-auto btn-neutral">Request</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

DetailsCard.propTypes = {
  details: PropTypes.object,
};

export default DetailsCard;
