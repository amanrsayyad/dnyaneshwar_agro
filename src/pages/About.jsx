import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { AboutMain, AboutGrid, AboutCard } from "../styles/CompoStyles";
import { BsArrowRight } from "react-icons/bs";
import Banner from "../components/Banner";
import img5 from "../assets/img5.jpeg";
import profile from "../assets/profile.jpeg";

const About = ({ value }) => {
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
        <title>Dnyaneshwar Agro - About</title>
      </Helmet>
      {value === "Marathi" ? (
        <Banner img={img5} root="होम" title="आमच्या बद्दल महिती" />
      ) : null}
      {value === "English" ? (
        <Banner img={img5} root="Home" title="About" />
      ) : null}
      <AboutMain>
        <AboutGrid>
          <AboutCard>
            <img src={profile} alt="" />
          </AboutCard>
          <AboutCard className="cardDiv">
            {value === "Marathi" ? (
              <>
                <div className="labelName">[ कंपनी तपशील ]</div>
                <h3>
                  केव्हाही उपलब्ध असलेल्या विस्तृत श्रेणीतील ट्रॅक्टर उपकरणांसह
                  कृषी उद्योगाला मदत करणे
                </h3>
                <p>
                  2007 मध्ये मालकी कंपनी म्हणून स्थापन झालेली ज्ञानेश्वर अॅग्रो
                  शेतकऱ्याला त्याच्या शेतीसाठी मदत करू शकेल अशा सेवा पुरवते,
                  आम्ही उत्कृष्ट आणि स्वस्त ट्रॅक्टर उपकरणे आणि बरेच काही देतो.
                </p>
                <Link to="#" className="btn flex-center">
                  अधिक जाणून घ्या <BsArrowRight className="iconRight" />
                </Link>
              </>
            ) : null}
            {value === "English" ? (
              <>
                <div className="labelName">[ Company Overview ]</div>
                <h3>
                  Helping the Agriculture Industry with wide range Tractor
                  Equipments available for Anytime
                </h3>
                <p>
                  Established as a propriter firm in the year of 2007
                  Dnyaneshwar Agro provide the services to the farmer that can
                  help the farmer with his farming, we give excellent and
                  affordable tractor equipments and many more.
                </p>
                <Link to="#" className="btn flex-center">
                  Learn More <BsArrowRight className="iconRight" />
                </Link>
              </>
            ) : null}
          </AboutCard>
        </AboutGrid>
      </AboutMain>
    </div>
  );
};

export default About;
