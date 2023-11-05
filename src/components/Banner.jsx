// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="">
      <Swiper
        pagination={{
                  dynamicBullets: true,
                  el: ".swiper-pagination",
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className="relative ">
          <img
            className="block hero-overlay opacity-50 mx-auto w-full h-[75vh] rounded-md  object-cover"
            src="https://i.ibb.co/p3CvB43/lily-banse-YHSwy6uqvk-unsplash.jpg"
            alt=""
          />
          <div className="absolute space-y-4 top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-center whitespace-nowrap font-semibold">
              Save Food, Share Food
            </h2>
            <p className="text-base sm:text-xl font-medium text-center">
              Contribute to a sustainable future by sharing and rescuing excess
              food in your community.
            </p>
            <button className="btn block mx-auto btn-neutral">Know More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="block hero-overlay opacity-50 rounded-md mx-auto w-full h-[75vh]  object-cover"
            src="https://i.ibb.co/V26bs35/food2.webp"
            alt=""
          />
          <div className="absolute space-y-4 top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-center whitespace-nowrap font-semibold">
              Make a Difference Today
            </h2>
            <p className="text-base sm:text-xl font-medium text-center">
              Help us divert perfectly good food from going to waste and provide
              it to those in need.
            </p>
            <button className="btn block mx-auto btn-neutral">Know More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="block hero-overlay opacity-50 rounded-md mx-auto w-full h-[75vh]  object-cover"
            src="https://i.ibb.co/5vfsZP3/portuguese-gravity-qq3h-T-CYD1-I-unsplash.jpg"
            alt=""
          />
          <div className="absolute space-y-4 top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-center whitespace-nowrap font-semibold">
              Deprived of Food
            </h2>
            <p className="text-base sm:text-xl font-medium text-center">
              Connect with neighbors and local businesses to share surplus food
              and reduce waste.
            </p>
            <button className="btn block mx-auto btn-neutral">Know More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="block hero-overlay opacity-50 mx-auto rounded-md w-full h-[75vh]  object-cover"
            src="https://i.ibb.co/4J5Mck2/todd-quackenbush-x5-SRhk-Fajr-A-unsplash.jpg"
            alt=""
          />
          <div className="absolute space-y-4 top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-center whitespace-nowrap font-semibold">
              Ready to join hands ?
            </h2>
            <p className="text-base sm:text-xl font-medium text-center">
              Join the movement to reduce food waste and promote a more
              equitable, eco-friendly world.
            </p>
            <button className="btn block mx-auto btn-neutral">Know More</button>
          </div>
        </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination absolute bottom-4 right-4 z-10" />
    </div>
  );
};
export default Banner;
