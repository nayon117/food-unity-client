import PropTypes from "prop-types";
import { useState } from "react";

const ManageReqRow = ({ request}) => {
  const { email, requesterName, requesterImg, currentDate } = request || {};
  const [status, setStatus] = useState('available')
  const handlebutton = () => {
    if (status === 'available') {
      setStatus('requested')
      
    } else {
      setStatus('available')
    }
  }

  return (
    <tr className="my-20">
      <td>
        <div className="flex items-center  space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
             {requesterImg && <img src={requesterImg} alt="Avatar Tailwind CSS Component" />}
            </div>
          </div>
          <div></div>
        </div>
      </td>
      <td>{requesterName}</td>
      <td>{email}</td>
          <td>{ currentDate}</td>
      <th>
        <button onClick={handlebutton} className="btn btn-ghost btn-xs">
         {status==='available' ? 'available':'delivered'}
        </button>
      </th>
    </tr>
  );
};

ManageReqRow.propTypes = {
  request: PropTypes.object,
  // onDelete:PropTypes.func
};

export default ManageReqRow;
