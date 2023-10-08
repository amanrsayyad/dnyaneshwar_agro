import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF, FaYoutube } from "../utils/Icon";
import { Link } from "react-router-dom";

const Footer = ({ value }) => {
  return (
    <FooterMain>
      <div className="grid">
        <div className="dataCard">
          <div className="data">
            <img src={logo} alt="" />
            {value === "Marathi" ? (
              <p>
                रोटाव्हेटर, ट्रॅक्टर ट्रॉली, चाफ कटरच्या विस्तृत श्रेणीचे
                आघाडीचे घाऊक व्यापारी
              </p>
            ) : null}
            {value === "English" ? (
              <p>
                Leading Wholesaler Trader of wide range of Rotavator,Tractor
                Trolly,Chaff Cutter & Tractor equipment
              </p>
            ) : null}
            <ul className="dataList">
              <li>
                <IoCallOutline className="icon" />
                <a href="tel:9850591117">98505 91117</a>
              </li>
              <li>
                <IoCallOutline className="icon" />
                <a href="tel:8007700018">80077 00018</a>
              </li>
              <li>
                <IoCallOutline className="icon" />
                <a href="tel:9922648764">99226 48764</a>
              </li>
              <li>
                <IoMailOutline className="icon" />
                <a href="mailto:official@dnyaneshwaragro.in">
                  official@dnyaneshwaragro.in
                </a>
              </li>
            </ul>
            <ul className="socialData">
              <li>
                <a href="" target="_blank" className="socialList">
                  <div className="icoMain flex-center">
                    <FaFacebookF className="ico" />
                  </div>
                </a>
              </li>
              <li>
                <a href="" target="_blank" className="socialList">
                  <div className="icoMain flex-center">
                    <FaYoutube className="ico" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="title">
            {value === "Marathi" ? <h3>लिंक</h3> : null}
            {value === "English" ? <h3>QUICK LINKS</h3> : null}
            <div className="border"></div>
          </div>
          {value === "Marathi" ? (
            <ul>
              <li>
                <Link to="/">होम</Link>
              </li>
              <li>
                <Link to="/equipment">उपकरणे</Link>
              </li>
              <li>
                <Link to="/about-us">आमच्या बद्दल महिती</Link>
              </li>
              <li>
                <Link to="/contact">संपर्क</Link>
              </li>
            </ul>
          ) : null}
          {value === "English" ? (
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/equipment">Equipment</Link>
              </li>
              <li>
                <Link to="/about-us">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          ) : null}
        </div>
        <div className="card">
          <div className="title">
            {value === "Marathi" ? <h3>कंपनी माहिती</h3> : null}
            {value === "English" ? <h3>COMPANY INFO</h3> : null}
            <div className="border"></div>
          </div>
          {value === "Marathi" ? (
            <ul>
              <li>
                <Link to="/">ज्ञानेश्वर ऍग्रो महिती</Link>
              </li>
              <li>
                <Link to="/equipment">अटी आणि परिस्थिती</Link>
              </li>
              <li>
                <Link to="/about-us">गोपनीयता धोरण</Link>
              </li>
            </ul>
          ) : null}
          {value === "English" ? (
            <ul>
              <li>
                <Link to="/">About Dnyaneshwar Agro</Link>
              </li>
              <li>
                <Link to="/equipment">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/about-us">Privacy Policy</Link>
              </li>
            </ul>
          ) : null}
        </div>
        <div className="card">
          <div className="title">
            {value === "Marathi" ? <h3>कंपनीचे स्थान</h3> : null}
            {value === "English" ? <h3>MAP LOCATION</h3> : null}
            <div className="border"></div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15188.293523788654!2d75.0233245!3d17.882022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc47508c62ece15%3A0xf1279419b885a386!2sDnyaneshwar%20Steel%20%26%20Welding%20Works!5e0!3m2!1sen!2sin!4v1692118075838!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0%" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </FooterMain>
  );
};

export default Footer;

const FooterMain = styled.div`
  position: relative;
  background-color: #111;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;

  .grid {
    display: grid;
    grid-template-columns: 530px 200px 200px 1fr;
    grid-gap: 2rem;
    padding: 3rem 3.5rem;

    .dataCard {
      background-color: #222;
      height: 530px;
      border-radius: 4px;
      margin-top: -4rem;
      margin-right: 5rem;

      .data {
        padding: 1rem 2rem;
        img {
          width: 150px;
          height: 150px;
        }
        p {
          font-size: 18px;
          font-weight: 400;
          color: rgba(231, 231, 231, 0.7);
          width: 100%;
        }
        .dataList {
          margin-top: 2rem;
          li {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-bottom: 1.2rem;

            .icon {
              font-size: 22px;
              margin-right: 15px;
            }
            a {
              font-size: 19px;
              color: #fff;
            }
          }
        }
        .socialData {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-top: 2rem;

          li {
            margin-right: 15px;
            .socialList {
              margin-right: 10px;
              cursor: pointer;
              .icoMain {
                width: 45px;
                height: 45px;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.1);
                color: var(--green-color);
                .ico {
                  font-size: 20px;
                  color: #fff;
                }
              }
              &:hover {
                .icoMain {
                  background-color: var(--green-color);

                  .ico {
                    color: #fff;
                  }
                }
              }
            }
          }
        }
      }
    }
    .card {
      padding: 4rem 0rem;

      .title {
        h3 {
          color: #fff;
          font-size: 23px;
          font-weight: 500;
        }
        .border {
          width: 125px;
          height: 3px;
          background-color: var(--green-color);
          margin: 0.8rem 0rem;
        }
      }
      ul {
        margin-top: 1.5rem;
        li {
          margin-bottom: 1rem;
          a {
            color: #fff;
            font-size: 18px;
          }
        }
      }
      iframe {
        width: 100%;
        height: 90%;
      }
    }

    @media only screen and (max-width: 991px) {
      grid-template-columns: 1fr;
      padding: 3rem 0rem;
      margin: 0px 10px;
      .dataCard {
        width: 100%;
        margin-right: 0rem;
        margin-left: 0rem;
      }
      .card {
        padding: 0rem;

        &:nth-child(4) {
          margin-bottom: 2rem;
        }

        iframe {
          margin-bottom: 2rem;
        }
      }
    }
  }
`;
