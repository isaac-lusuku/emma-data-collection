import Banner from "../../components/Banner/Banner";
import Body3 from "../../components/home/Body3/Body3";
import Body2 from "../../components/home/Body2/Body2";
import Body4 from "../../components/home/Body4/Body4";
import Body1 from "../../components/home/Body1/Body1"

const Home = () => {

  return (
    <div>
      <div className="w-full mx-auto">
      <Banner />
      <div className="max-w-container mx-auto px-4">
      <Body1 />
        <Body2 />
        <Body3 />
        <Body4 />
        </div>
        </div>     
    </div>
  );
};

export default Home;
