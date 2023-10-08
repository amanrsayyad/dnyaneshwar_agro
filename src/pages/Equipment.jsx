import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
import img5 from "../assets/img5.jpeg";
import EquipmentCompo from "../components/EquipmentCompo/EquipmentCompo";

const Equipment = ({ value }) => {
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
        <title>Dnyaneshwar Agro - Equipments</title>
      </Helmet>
      {value === "Marathi" ? (
        <Banner img={img5} root="होम" title="उपकरणे" />
      ) : null}
      {value === "English" ? (
        <Banner img={img5} root="Home" title="Equipment" />
      ) : null}
      <EquipmentCompo value={value} />
    </div>
  );
};

export default Equipment;
