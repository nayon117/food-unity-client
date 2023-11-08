import PropTypes from "prop-types";

const ManageReqRow = ({ request }) => {
  console.log(request);
  const { email, requesterName, requesterImg,currentDate } = request || {};
  return (
    <tr className="my-20">
      <td>
        <div className="flex items-center  space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={requesterImg} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div></div>
        </div>
      </td>
      <td>{requesterName}</td>
      <td>{email}</td>
          <td>{ currentDate}</td>
      <th>
        <button className="btn btn-ghost btn-xs">available</button>
      </th>
    </tr>
  );
};

ManageReqRow.propTypes = {
  request: PropTypes.object,
};

export default ManageReqRow;
