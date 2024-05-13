import Footer from "../reusableComponents/footer/Footer";
import Navbar from "../reusableComponents/navbar/Navbar";
import SearchPage from "./searchPage/SearchPage";
import PropertiesForYou from "./propertiesForYou/PropertiesForYou";
import TrendingProperties from "./trendingProperties/TrendingProperties";

function Home() {
  return (
    <div>
      <Navbar />
      <SearchPage />
      <PropertiesForYou />
      <TrendingProperties />
      <Footer />
    </div>
  );
}

export default Home;
