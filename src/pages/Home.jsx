import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import AboutCompo from "../components/AboutCompo";
import Contact from "../components/Contact";
import Video from "../components/Video";
import Newsletter from "../components/Newsletter";
import EquipmentMain from "../components/EquipmentMain";

const Home = ({ value }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <meta
          name="title"
          content="Dnyaneshwar Agro Leading Wholesaler Trader of wide range of Rotavator, Tractor Trolly, Chaff Cutter & Tractor equipment, Akluj, Maharashtra 413101"
        />
        <meta
          name="description"
          content="Dnyaneshwar Agro is a Leading Wholesaler Trader of a wide range of Rotavators, Tractor Trolly, Chaff Cutters, and tractor equipment Enquiry Now for agriculture equipment all the equipment of swan agro"
        />
        <meta
          name="keywords"
          content="Dnyaneshwar Agro, Agriculture, Farmer, Swan Agro, Rotavator, Tractor Trolly, Chaff Cutter, Tractor equipment, Potato Planter, Turmeric Digger, Mulcher, Banana Cutter, Enquiry Now, "
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <title>Dnyaneshwar Agro - Home</title>
      </Helmet>
      <Hero value={value} />
      <AboutCompo value={value} />
      <EquipmentMain value={value} />
      <Video value={value} />
      <Contact value={value} />
      <Newsletter value={value} />
    </div>
  );
};

export default Home;
