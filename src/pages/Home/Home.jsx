import Banner from "../../components/Banner";
import NewsLetter from "../../components/NewsLetter";
import Stat from "../../components/Stat";
import Team from "../../components/Team";
import Testimonial from "../../components/Testimonial";
import Featured from "../../components/featured";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <Team></Team>
      <Stat></Stat>
      <Testimonial></Testimonial>
      <NewsLetter></NewsLetter>
    </div>
  );
};
export default Home;
