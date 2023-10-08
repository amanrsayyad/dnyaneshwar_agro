import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import leaf from "../assets/leaf.png";
import { HeaderMain } from "../styles/HeaderStyles";
import { RiMenu3Fill } from "../utils/Icon";
import MobileMenu from "../components/MobileMenu";

const Header = ({ value, setValue }) => {
  const [toogleMenu, setToggleMenu] = useState(false);
  const [index, setIndex] = useState(1);
  const toggleIndex = (index) => {
    setIndex(index);
  };
  return (
    <>
      <HeaderMain className="space-between">
        <div className="logoMain"> 
          <div className="logo_container">
            <img src={leaf} alt="" className="logo" />
          </div>
          <h3>Dnyaneshwar Agro</h3>
        </div>
        <div className="flex-start list">
          {value === "Marathi" ? (
            <ul className="flex-center">
              <li onClick={() => toggleIndex(1)}>
                {index === 1 ? (
                  <Link to="/" className="active">
                    [ होम ]
                  </Link>
                ) : (
                  <Link to="/">होम</Link>
                )}
              </li>
              <li onClick={() => toggleIndex(2)}>
                {index === 2 ? (
                  <Link to="/equipment" className="active">
                    [ उपकरणे ]
                  </Link>
                ) : (
                  <Link to="/equipment">उपकरणे</Link>
                )}
              </li>
              {/* <li onClick={() => toggleIndex(3)}>
                {index === 3 ? (
                  <Link to="/solution" className="active">
                    [ आमचे उपाय ]
                  </Link>
                ) : (
                  <Link to="/solution">आमचे उपाय</Link>
                )}
              </li> */}
              <li onClick={() => toggleIndex(4)}>
                {index === 4 ? (
                  <Link to="/about-us" className="active">
                    [ आमच्या बद्दल महिती ]
                  </Link>
                ) : (
                  <Link to="/about-us">आमच्या बद्दल महिती</Link>
                )}
              </li>
              <li onClick={() => toggleIndex(5)}>
                {index === 5 ? (
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
            <ul className="flex-center">
              <li onClick={() => toggleIndex(1)}>
                {index === 1 ? (
                  <Link to="/" className="active">
                    [ Home ]
                  </Link>
                ) : (
                  <Link to="/">Home</Link>
                )}
              </li>
              <li onClick={() => toggleIndex(2)}>
                {index === 2 ? (
                  <Link to="/equipment" className="active">
                    [ Equipment ]
                  </Link>
                ) : (
                  <Link to="/equipment">Equipment</Link>
                )}
              </li>
              {/* <li onClick={() => toggleIndex(3)}>
                {index === 3 ? (
                  <Link to="/solution" className="active">
                    [ Our Solution ]
                  </Link>
                ) : (
                  <Link to="/solution">Our Solution</Link>
                )}
              </li> */}
              <li onClick={() => toggleIndex(4)}>
                {index === 4 ? (
                  <Link to="/about-us" className="active">
                    [ About ]
                  </Link>
                ) : (
                  <Link to="/about-us">About</Link>
                )}
              </li>
              <li onClick={() => toggleIndex(5)}>
                {index === 5 ? (
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
        {toogleMenu ? null : (
          <div className="menu" onClick={() => setToggleMenu(!toogleMenu)}>
            <RiMenu3Fill className="icoMenu" />
          </div>
        )}
      </HeaderMain>
      {toogleMenu ? (
        <MobileMenu
          setValue={setValue}
          setToggleMenu={setToggleMenu}
          value={value}
        />
      ) : null}
    </>
  );
};

export default Header;
