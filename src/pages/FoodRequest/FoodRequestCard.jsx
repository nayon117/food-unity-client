import PropTypes from "prop-types";
import Swal from "sweetalert2";

const FoodRequestCard = ({ request, reqeusts, setRequests }) => {
  const {
    foodImage,
    expiredDateTime,
    DonationMoney,
    donatorName,
    pickupLocation,
    _id,
  } = request || {};

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/requests/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your request has been deleted.",
                "success"
              );
              const remaining = reqeusts.filter((req) => req._id !== _id);
              setRequests(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="my-12">
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
        className="relative  flex w-full max-w-[50rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <div className="relative flex-1 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img
            src={foodImage}
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6 flex-1">
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
            Donator: {donatorName}
          </h6>

          <h4 className="text-xl font-semibold"> Location: {pickupLocation}</h4>

          <p className="block py-3 text-base antialiased font-medium leading-relaxed ">
            Expire: {expiredDateTime}
          </p>
          <p className="block py-3 text-base antialiased font-medium leading-relaxed ">
            Donation: {DonationMoney}
          </p>
          <div className="flex items-center gap-5">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm btn-neutral"
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

FoodRequestCard.propTypes = {
  request: PropTypes.object,
  reqeusts: PropTypes.array,
  setRequests: PropTypes.func,
};

export default FoodRequestCard;
