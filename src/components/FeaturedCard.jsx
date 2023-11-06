import PropTypes from 'prop-types'
const FeaturedCard = ({ food }) => {
      const {additionalNotes,expiredDateTime,
        pickupLocation, foodQuantity, donatorName ,donatorImage,foodImage,foodName
    } = food || {}
  return (
    <div className="card card-compact my-12 bg-base-100 shadow-xl">
      <figure>
        <img className='h-60'
          src={foodImage}
          alt="food image"
        />
      </figure>
      <div className="card-body">
              <h2 className="text-2xl font-medium text-center">{foodName}</h2>
              <p className='text-center text-lg font-medium'> {additionalNotes}</p>
              <div className='flex pt-2 items-center justify-center'>
                  <p className='font-medium text-center'>quantity:{ foodQuantity}</p>
                  <p className='font-medium text-center'>expire: { expiredDateTime}</p>
             </div>
              <div className='flex items-center gap-28 text-center mx-auto py-4 '>
                  <img className='w-10 h-10  ' src={donatorImage} alt="" />
                  <p className='font-medium '>Donar: { donatorName}</p>
              </div>
              <p className='text-center font-medium'>Location: {pickupLocation }</p>
        <div className="card-actions py-3 ">
          <button className="btn mx-auto btn-neutral">view details</button>
        </div>
      </div>
    </div>
  );
};

FeaturedCard.propTypes = {
  food: PropTypes.object,
};

export default FeaturedCard;
