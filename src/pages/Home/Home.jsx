import Banner from "../../components/Banner";
import NewsLetter from "../../components/NewsLetter";
import Stat from "../../components/Stat";
import Team from "../../components/Team";
import Testimonial from "../../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Team></Team>
      <Stat></Stat>
      <Testimonial></Testimonial>
      <NewsLetter></NewsLetter>
    </div>
  );
};
export default Home;
