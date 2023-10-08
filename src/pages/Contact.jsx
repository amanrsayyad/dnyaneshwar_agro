import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Container } from "../styles/HeaderStyles";
import { IoLocationOutline, IoCallOutline, BiTimeFive } from "../utils/Icon";
import Banner from "../components/Banner";
import img5 from "../assets/img5.jpeg";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import ReactWhatsapp from "react-whatsapp";
import { CATEGORIES, CATEGORIES2 } from "../utils/Data";

const Contact = ({ value }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [enquiry, setEnquiry] = useState("");

  const data = [name, phone, subject, enquiry];

  const ContactFormMar = () => {
    localStorage.setItem("dataKey", JSON.stringify(data));
  };

  const ContactFormEng = () => {
    localStorage.setItem("dataKey", JSON.stringify(data));
  };
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
        <title>Dnyaneshwar Agro - Contact</title>
      </Helmet>
      {value === "Marathi" ? (
        <Banner img={img5} root="होम" title="संपर्क" />
      ) : null}
      {value === "English" ? (
        <Banner img={img5} root="Home" title="Contact" />
      ) : null}
      <Container>
        <ContactGrid>
          {value === "Marathi" ? (
            <>
              <ContactCard>
                <ul>
                  <li>
                    <div>
                      <IoLocationOutline className="icon" />
                    </div>
                    <div>
                      <h6>मुख्य कार्यालय</h6>
                      <p>
                        V2JF+R84, महादेव नगर बाय पास रोड, अकलूज-माळशिरस रोड,
                        अकलूज, महाराष्ट्र 413101
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <IoCallOutline className="icon" />
                    </div>
                    <div>
                      <h6>एक कॉल द्या</h6>
                      <a href="tel:9850591117">98505 91117</a>
                      <br />
                      <a href="tel:8007700018">80077 00018</a>
                      <br />
                      <a href="tel:9922648764">99226 48764</a>
                    </div>
                  </li>
                  <li>
                    <div>
                      <BiTimeFive className="icon" />
                    </div>
                    <div>
                      <h6>कामाची वेळ</h6>
                      <p>
                        सोमवार ते शनिवार: सकाळी 9 ते संध्याकाळी 7 <br />
                        रविवार: बंद
                      </p>
                    </div>
                  </li>
                </ul>
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
                <ul>
                  <li>
                    <div>
                      <IoLocationOutline className="icon" />
                    </div>
                    <div>
                      <h6>Head Office</h6>
                      <p>
                        V2JF+R84, Mahadev Nagar By Pass Road, Akluj-Malshiras
                        Rd, Akluj, Maharashtra 413101
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <IoCallOutline className="icon" />
                    </div>
                    <div>
                      <h6>Give A Call</h6>
                      <p>98505 91117</p>
                      <p>80077 00018</p>
                      <p>99226 48764</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <BiTimeFive className="icon" />
                    </div>
                    <div>
                      <h6>Work Time</h6>
                      <p>
                        Monday to Saturday: 9am to 7pm <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </li>
                </ul>
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
      </Container>
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15188.293523788654!2d75.0233245!3d17.882022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc47508c62ece15%3A0xf1279419b885a386!2sDnyaneshwar%20Steel%20%26%20Welding%20Works!5e0!3m2!1sen!2sin!4v1692118075838!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0%" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapContainer>
    </div>
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
  grid-template-columns: 1fr 2fr;
  grid-gap: 1.5rem;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
    margin: 0px 15px;
  }
`;

const ContactCard = styled.div`
  &:nth-child(1) {
    background-color: #222;
    box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.2);
    padding: 45px 35px;
    border-radius: 4px;

    ul {
      li {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin-bottom: 18px;
        .icon {
          font-size: 30px;
          color: #fff;
        }
        div {
          &:nth-child(2) {
            width: 80%;
            margin-left: 10px;

            h6 {
              color: yellowgreen;
              font-size: 22px;
              font-weight: 400;
              margin-bottom: 7px;
            }
            a,
            p {
              color: #fff;
              font-size: 20px;
              margin-bottom: 7px;
            }
          }
        }
        @media only screen and (max-width: 991px) {
          .icon {
            font-size: 25px;
          }
          div {
            &:nth-child(2) {
              h6 {
                font-size: 20px;
              }
              p {
                font-size: 18px;
              }
            }
          }
        }
      }
    }
  }
  form {
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
      margin-bottom: 1rem;
    }
    input {
      width: 100%;
      height: 62px;
    }
    select {
      width: 100%;
      height: 62px;
      margin-bottom: 1rem;
    }
    textarea {
      width: 100%;
      height: 150px;
      margin-top: 16px;
      padding-top: 15px;
    }
    .inputMargin {
      margin-top: 1.2rem;
    }
  }
  @media only screen and (max-width: 991px) {
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

const MapContainer = styled.div`
  margin-top: 25px;
  iframe {
    width: 100%;
    margin-bottom: -5px;
  }
`;
