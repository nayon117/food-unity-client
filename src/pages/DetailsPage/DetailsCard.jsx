import PropTypes from 'prop-types';

const DetailsCard = ({ details }) => {
    const {additionalNotes,expiredDateTime,
        pickupLocation, foodQuantity, donatorName,foodImage,foodName
    } = details || {}
    return (
        <div className='my-20'>
            <h2 className='font-medium'>Donar Name: {donatorName}</h2>
            <h3 className='font-medium'>pickup Location:{pickupLocation}</h3>
            <img src={foodImage} alt="" />
            <div className='space-y-3'>
            <h3 className='font-medium'>Food Name: {foodName}</h3>
            <h3 className='font-medium'>Food Quantity: {foodQuantity}</h3>
            <h3 className='font-medium'>Additional Notes: {additionalNotes}</h3>
            <h3 className='font-medium'>Expire Date: {expiredDateTime}</h3>
            </div>
            <button className='btn btn-neutral my-3'>Request</button>
            
        </div>
    );
};

DetailsCard.propTypes = {
    details:PropTypes.object
};

export default DetailsCard;