import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { AboutMain, AboutGrid, AboutCard } from "../styles/CompoStyles";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import profile from "../assets/profile.jpeg";

const AboutCompo = ({ value }) => {
  return (
    <AboutMain>
      <AboutGrid>
        <AboutCard>
          <img src={profile} alt="" className="flex-center" />
          <div className="data flex-center flex-col">
            <h4>Founder - <span>Dnyaneshwar Agro</span></h4>
            <h2>Shankar Bharat Shinde</h2>
          </div>
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
                शेतकऱ्याला त्याच्या शेतीसाठी मदत करू शकेल अशा सेवा पुरवते, आम्ही
                उत्कृष्ट आणि स्वस्त ट्रॅक्टर उपकरणे आणि बरेच काही देतो.
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
                Established as a propriter firm in the year of 2007 Dnyaneshwar
                Agro provide the services to the farmer that can help the farmer
                with his farming, we give excellent and affordable tractor
                equipments and many more.
              </p>
              <Link to="#" className="btn flex-center">
                Learn More <BsArrowRight className="iconRight" />
              </Link>
            </>
          ) : null}
        </AboutCard>
      </AboutGrid>
    </AboutMain>
  );
};

export default AboutCompo;
