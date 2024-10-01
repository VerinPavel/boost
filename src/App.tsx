import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import OurServices from "./components/OurServices/OurServices";
import Banner from "./components/Banner/Banner";

import SecondSlider from "./components/SecondSlider/SecondSlider";
import MobileSecondarySlider from "./components/mobile/mobileSecondarySlider/mobileSecondarySlider";

import ThirdSlider from "./components/ThirdSlider/ThirdSlider";

import MobileForm from "./components/mobile/MobileForm/MobileForm";
import Form from "./components/Form/Form";

import Footer from "./components/Footer/Footer";
import MobileFooter from "./components/mobile/MobileFooter/MobileFooter";
import Modal from "./components/Modal/Modal";

import { useMediaQuery } from "@react-hook/media-query";
import { useState } from "react";

function App() {
  const Desktop = useMediaQuery("(min-width: 1280px)");

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div className="firstPart">
        <Header />
        <Home />
        <OurServices />
      </div>
      <Banner />
      <div className="secondPart">
        {!Desktop ? <MobileSecondarySlider /> : <SecondSlider />}
        <ThirdSlider />
        {Desktop ? (
          <Form setIsOpenModal={setIsOpenModal} />
        ) : (
          <MobileForm setIsOpenModal={setIsOpenModal} />
        )}
        {isOpenModal ? (
          <Modal
            isOpenModal={isOpenModal}
            handleClose={() => setIsOpenModal(false)}
          />
        ) : null}
        {Desktop ? <Footer /> : <MobileFooter />}
      </div>
    </>
  );
}

export default App;
