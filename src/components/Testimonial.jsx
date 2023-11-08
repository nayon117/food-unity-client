import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { motion } from "framer-motion"
import { fadeIn } from "../variants";
const Testimonial = () => {
  return (
    <motion.div variants={fadeIn("up", 0.3)}
    initial="hidden"
    whileInView={'show'}
    viewport={{once:false, amount:0.7}} className="py-16">
      <div className="space-y-3">
        <h2 className="text-xl md:text-2xl  lg:text-4xl text-center font-bold">
          Stories of Impact
        </h2>
        <p className="text-center font-medium">
          Discover how our community members are making a difference by sharing
          surplus food and reducing waste. Read their inspiring stories and
          learn how FoodUnity has transformed their food-sharing experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
          <BiSolidQuoteSingleLeft></BiSolidQuoteSingleLeft>
          <div className="pl-4 pt-4 flex items-start justify-between">
            <div className="mr-6">
              <p className="xl:text-xl xl:leading-loose text-gray-600">
                Sharing food through FoodUnity is easy and fulfilling. Its a
                win-win
              </p>
              <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                Anna
              </p>
            </div>
            <img
              src="https://i.ibb.co/qRcWFfM/avatar-1.png"
              alt="Display Avatar of Anna Smith"
              role="img"
            />
          </div>
        </div>
        <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
          <BiSolidQuoteSingleLeft></BiSolidQuoteSingleLeft>
          <div className="pl-4 pt-4 flex items-start justify-between">
            <div className="mr-6">
              <p className="xl:text-xl xl:leading-loose text-gray-600">
                FoodUnity connects me to surplus food in my community
                effortlessly.
              </p>
              <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                John
              </p>
            </div>
            <img
              src="https://i.ibb.co/vmqhQZ6/avatar-2.png"
              alt="Display avatar of Dany John"
              role="img"
            />
          </div>
        </div>
        <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
          <BiSolidQuoteSingleLeft></BiSolidQuoteSingleLeft>
          <div className="pl-4 pt-4 flex items-start justify-between">
            <div className="mr-6">
              <p className="xl:text-xl xl:leading-loose text-gray-600">
                FoodUnity: Where neighbors come together to reduce food waste.
              </p>
              <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                Mike
              </p>
            </div>
            <img
              src="https://i.ibb.co/znmdwyv/avatar-3.png"
              alt="Display Avatar of Mike Blake"
              role="img"
            />
          </div>
        </div>

        <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
          <BiSolidQuoteSingleLeft></BiSolidQuoteSingleLeft>
          <div className="pl-4 pt-4 flex items-start justify-between">
            <div className="mr-6">
              <p className="xl:text-xl xl:leading-loose text-gray-600">
                Proud to be a part of FoodUnitys mission for a greener, kinder
                world.
              </p>
              <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                David{" "}
              </p>
            </div>
            <img
              src="https://i.ibb.co/JdVVPk9/avater4.png"
              alt="Display avatar of David"
              role="img"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Testimonial;
