import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoCloseOutline } from "../utils/Icon";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

const MobileMenu = ({ setToggleMenu, value, setValue }) => {
  const [indexTab, setIndexTab] = useState(1);
  const toggleIndex = (index) => {
    setIndexTab(index);
  };
  useEffect(() => {
    if (window.location.pathname === "/") {
      setIndexTab(1);
    } else if (window.location.pathname === "/equipment") {
      setIndexTab(2);
    } else if (window.location.pathname === "/solution") {
      setIndexTab(3);
    } else if (window.location.pathname === "/about-us") {
      setIndexTab(4);
    } else if (window.location.pathname === "/contact") {
      setIndexTab(5);
    } else {
      setIndexTab(1);
    }
  }, []);

  return (
    <MenuContainer>
      <div className="menuCard">
        <h3>
          Dnyaneshwar <br />
          Agro
        </h3>
        <div className="border"></div>
        <div className="listUl">
          {value === "Marathi" ? (
            <ul>
              <li onClick={() => toggleIndex(1)}>
                {indexTab === 1 ? (
                  <Link to="/" className="active">
                    [ होम ]
                  </Link>
                ) : (
                  <Link to="/">होम</Link>
                )}
              </li>
              <li onClick={() => toggleIndex(2)}>
                {indexTab === 2 ? (
                  <Link to="/equipment" className="active">
                    [ उपकरणे ]
                  </Link>
                ) : (
                  <Link to="/equipment">उपकरणे</Link>
                )}
              </li>
              {/* <li onClick={() => toggleIndex(3)}>
                {indexTab === 3 ? (
                  <Link to="/solution" className="active">
                    [ आमचे उपाय ]
                  </Link>
                ) : (
                  <Link to="/solution">आमचे उपाय</Link>
                )}
              </li> */}
              <li onClick={() => toggleIndex(4)}>
                {indexTab === 4 ? (
                  <Link to="/about-us" className="active">
                    [ आमच्या बद्दल महिती ]
                  </Link>
                ) : (
                  <Link to="/about-us">आमच्या बद्दल महिती</Link>
                )}
              </li>
              <li onClick={() => toggleIndex(5)}>
                {indexTab === 5 ? (
                  <Link to="/contact" className="active">
                    [ संपर्क ]
                  </Link>
                ) : (
                  <Link to="/contact">संपर्क</Link>
                )}
              </li>
            </ul>
          ) : null}
          {value === "English" ? (
            <ul>
              <li onClick={() => toggleIndex(1)}>
                {indexTab === 1 ? (
                  <Link to="/" className="active">
                    [ Home ]
                  </Link>
                ) : (
                  <Link to="/">Home</Link>
                )}
              </li>
              <li onClick={() => toggleIndex(2)}>
                {indexTab === 2 ? (
                  <Link to="/equipment" className="active">
                    [ Equipment ]
                  </Link>
                ) : (
                  <Link to="/equipment">Equipment</Link>
                )}
              </li>
              {/* <li onClick={() => toggleIndex(3)}>
                {indexTab === 3 ? (
                  <Link to="/solution" className="active">
                    [ Our Solution ]
                  </Link>
                ) : (
                  <Link to="/solution">Our Solution</Link>
                )}
              </li> */}
              <li onClick={() => toggleIndex(4)}>
                {indexTab === 4 ? (
                  <Link to="/about-us" className="active">
                    [ About ]
                  </Link>
                ) : (
                  <Link to="/about-us">About</Link>
                )}
              </li>
              <li onClick={() => toggleIndex(5)}>
                {indexTab === 5 ? (
                  <Link to="/contact" className="active">
                    [ Contact ]
                  </Link>
                ) : (
                  <Link to="/contact">Contact</Link>
                )}
              </li>
            </ul>
          ) : null}
        </div>
        <div className="contactInfo">
          {value === "Marathi" ? <h3>संपर्क माहिती</h3> : null}
          {value === "English" ? <h3>Contact Info</h3> : null}
          <div className="borderList"></div>
          <ul className="contactList">
            <li>
              <IoMdCall className="icon" />
              <a href="tel:9850591117">98505 91117</a>
            </li>
            <li>
              <IoMdCall className="icon" />
              <a href="tel:8007700018">80077 00018</a>
            </li>
            <li>
              <IoMdCall className="icon" />
              <a href="tel:9922648764">99226 48764</a>
            </li>
            <li>
              <IoIosMail className="iconMail" />
              <a href="mailto:official@dnyaneshwaragro.in">official@dnyaneshwaragro.in</a>
            </li>
          </ul>
        </div>
        {/* <div className="langContainer">
          {value === "Marathi" ? <h3>भाषा</h3> : null}
          {value === "English" ? <h3>Language</h3> : null}
          <div className="borderList"></div>
          <select onChange={(e) => setValue(e.target.value)}>
            <option>Marathi</option>
            <option>English</option>
          </select>
        </div> */}
      </div>
      <div className="overlay" onClick={() => setToggleMenu(false)}></div>
      <div className="closeIcon" onClick={() => setToggleMenu(false)}>
        <IoCloseOutline className="icon" />
      </div>
    </MenuContainer>
  );
};

export default MobileMenu;

const MenuContainer = styled.div`
  overflow: hidden;
  .menuCard {
    position: fixed;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 310px;
    background-color: #fff;
    z-index: 1015;
    overflow: hidden;
    transition: all 0.2s ease-out 0s;
    padding: 10px 17px;

    h3 {
      color: var(--green-color);
      font-family: var(--font-alice);
      font-size: 22px;
      font-weight: 700;
      text-transform: uppercase;
    }
    .border {
      background-color: var(--green-color);
      width: 100px;
      height: 3px;
      margin-top: 10px;
    }
    .listUl {
      margin-top: 2rem;
      ul {
        list-style: none;
        li {
          margin-bottom: 25px;
          .active {
            color: var(--green-color);
          }
          a {
            font-weight: 600;
            color: #333;
            font-size: 20px;

            &:hover {
              color: var(--green-color);
            }
          }
        }
      }
    }
  }
  .overlay {
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1005;
  }
  .closeIcon {
    position: fixed;
    right: 3%;
    top: 7%;
    z-index: 1015;
    color: rgb(255, 255, 255) !important;
    cursor: pointer;

    .icon {
      font-size: 34px;
    }
    @media only screen and (max-width: 991px) {
      position: fixed;
      right: 3%;
      top: 11%;
    }
  }
  .borderList {
    margin-top: 6px;
    height: 2px;
    width: 95%;
    background-color: var(--green-color);
  }
  .contactInfo {
    h3 {
      font-size: 20px;
    }
    .contactList {
      margin-top: 1rem;
      margin-bottom: 1.2rem;
      li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 10px;
        margin-bottom: 15px;

        .icon {
          font-size: 20px;
          margin-right: 5px;
        }
        .iconMail {
          font-size: 28px;
          margin-right: 5px;
        }
        a {
          color: #333;
          font-size: 20px;
          font-weight: 500;
        }
      }
    }
  }
  .langContainer {
    select {
      width: 100%;
      margin-top: 10px;
      padding: 10px;
      border: 1px solid var(--green-color);
    }
  }
`;
