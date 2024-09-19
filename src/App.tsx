import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
// import OurServices from "./components/OurServices/OurServices";
import Banner from "./components/Banner/Banner";
import SecondSlider from "./components/SecondSlider/SecondSlider";
import ThirdSlider from "./components/ThirdSlider/ThirdSlider";
import MobileForm from "./components/mobile/MobileForm/MobileForm";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import MobileFooter from "./components/mobile/MobileFooter/MobileFooter";

import { useMediaQuery } from "@react-hook/media-query";
function App() {
  const Desktop = useMediaQuery("(min-width: 1920px)");
  return (
    <>
      <div className="firstPart">
        <Header />
        <Home />
        {/* <OurServices /> */}
      </div>
      <Banner />
      <div className="secondPart">
        <SecondSlider />
        <ThirdSlider />
        {Desktop ? <Form /> : <MobileForm />}
        {Desktop ? <Footer /> : <MobileFooter />}
      </div>
    </>
  );
}

export default App;
