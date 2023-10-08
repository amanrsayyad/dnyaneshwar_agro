import React, { useState } from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import ReactWhatsapp from "react-whatsapp";
import { toast } from "react-toastify";
import { CATEGORIES, CATEGORIES2 } from "../utils/Data";

const Contact = ({ value }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [enquiry, setEnquiry] = useState("");

  const data = [name, phone, subject, enquiry];

  const ContactFormMar = () => {
    if (name === "") {
      toast.error("पूर्ण नाव प्रविष्ट करा");
    }
    if (phone.length > 10 || phone === "") {
      toast.error("एक वैध फोन नंबर प्रविष्ट करा");
    }
    if (subject === "") {
      toast.error("एक विषय प्रविष्ट करा");
    }
    localStorage.setItem("dataKey", JSON.stringify(data));
  };

  const ContactFormEng = () => {
    if (name === "") {
      toast.error("Enter your Full Name");
    }
    if (phone.length > 10 || phone === "") {
      toast.error("Enter a valid mobile name");
    }
    if (subject === "") {
      toast.error("Enter a Subject");
    }
    localStorage.setItem("dataKey", JSON.stringify(data));
  };

  return (
    <ContactMain>
      <ContactGrid>
        {value === "Marathi" ? (
          <>
            <ContactCard>
              <div className="labelName">[ आमच्याशी संपर्क साधा ]</div>
              <h3>एखादे उपकरण हवे आहे? तज्ञांची मदत घ्या</h3>
              <p>तुमचा प्रश्न आजच पाठवा</p>
            </ContactCard>
            <ContactCard>
              <form>
                <div className="grid">
                  <input
                    type="text"
                    placeholder="तुमचे नाव"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="फोन #"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    maxlength="10"
                    pattern="\d{10}"
                  />
                </div>
                <select onChange={(e) => setSubject(e.target.value)}>
                  <option>विषय</option>
                  <option>उपकरण चौकशी</option>
                  <option>सपोर्ट</option>
                </select>
                <select onChange={(e) => setEnquiry(e.target.value)}>
                  <option>उपकरण चौकशी</option>
                  {CATEGORIES2.map((item) => {
                    return <option>{item}</option>;
                  })}
                </select>
                <div onClick={() => ContactFormMar()}>
                  <ReactWhatsapp
                    number="7986996229"
                    message={data}
                    className="btn2 flex-center"
                  >
                    आता पाठवा <BsArrowRight className="iconRight" />
                  </ReactWhatsapp>
                </div>
              </form>
            </ContactCard>
          </>
        ) : null}
        {value === "English" ? (
          <>
            <ContactCard>
              <div className="labelName">[ Contact Us ]</div>
              <h3>Need an Equipment? Get Expert’s Help</h3>
              <p>
                Send your query today & our team would be happy to assist you
                because we care industry to utilizing tractor equipment
              </p>
            </ContactCard>
            <ContactCard>
              <form>
                <div className="grid">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Phone #"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    maxlength="10"
                    pattern="\d{10}"
                  />
                </div>
                <select onChange={(e) => setSubject(e.target.value)}>
                  <option>Subject</option>
                  <option>Product Enquiry</option>
                  <option>Support</option>
                </select>
                <select onChange={(e) => setEnquiry(e.target.value)}>
                  <option>Select Product</option>
                  {CATEGORIES.map((item) => {
                    return <option>{item}</option>;
                  })}
                </select>
                <div onClick={() => ContactFormEng()}>
                  <ReactWhatsapp
                    number="9325423557"
                    message={data}
                    className="btn2 flex-center"
                  >
                    Send Now <BsArrowRight className="iconRight" />
                  </ReactWhatsapp>
                </div>
              </form>
            </ContactCard>
          </>
        ) : null}
      </ContactGrid>
    </ContactMain>
  );
};

export default Contact;

const ContactMain = styled.div`
  padding: 3.5rem calc(-625px + 50vw) 1.5rem;

  @media only screen and (max-width: 991px) {
    margin: 0px 15px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-gap: 0rem;
  }
`;

const ContactCard = styled.div`
  h3 {
    margin-top: 8px;
    font-size: 34px;
    width: 55%;
  }
  p {
    margin: 0.7rem 0rem;
    color: #000;
    width: 98%;
    font-weight: 400;
    font-size: 24px;
  }
  form {
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
    }
    input,
    select {
      width: 100%;
      height: 62px;
      margin-top: 16px;
    }
    .inputMargin {
      margin-top: 1rem;
    }
    textarea {
      width: 100%;
      height: 150px;
      margin-top: 16px;
      padding-top: 15px;
    }
  }
  @media only screen and (max-width: 991px) {
    h3 {
      margin-top: 8px;
      font-size: 22px;
      width: 97%;
    }
    p {
      margin: 1.7rem 0rem;
      color: #555;
      width: 95%;
      font-weight: 400;
      font-size: 17px;
    }
    form {
      .grid {
        grid-template-columns: 1fr;

        input {
          width: 100%;
          height: 50px;
        }
      }
      textarea {
        width: 100%;
        height: 110px;
        margin-top: 16px;
        padding-top: 15px;
      }
    }
  }
`;
