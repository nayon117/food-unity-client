
const Stat = () => {
  return (
    <div   className="my-12">
      <div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container">
        <h1 className="text-xl md:text-2xl  lg:text-4xl font-bold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
          Community Statistics
        </h1>
        <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
          <img
            src="https://i.ibb.co/KjrPCyW/map.png"
            alt="world map image"
            className="w-full xl:h-full h-96 object-cover  sm:block hidden"
          />
          <img
            src="https://i.ibb.co/SXKj9Mf/map-bg.png"
            alt="mobile-image"
            className="sm:hidden -mt-10 block w-full h-96 object-cover  absolute z-0"
          />
          <div  data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500" className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
            <p className="text-3xl font-semibold text-gray-800">50k+</p>
            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
              Food Shared
            </p>
          </div>
          <div data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500" className="shadow-lg xl:p-6 p-4 w-48 sm:w-auto  bg-white sm:absolute relative z-20 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
            <p className="text-3xl text-center font-semibold text-gray-800">
              60%
            </p>
            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
              Reduce Waste
            </p>
          </div>
          <div data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500" className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
            <p className="text-3xl font-semibold text-gray-800">5k+</p>
            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
              Participants
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stat;
