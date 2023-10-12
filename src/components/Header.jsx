import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
  useEffect(() => {
    if (window.location.pathname === "/") {
      setIndex(1);
    } else if (window.location.pathname === "/equipment") {
      setIndex(2);
    } else if (window.location.pathname === "/solution") {
      setIndex(3);
    } else if (window.location.pathname === "/about-us") {
      setIndex(4);
    } else if (window.location.pathname === "/contact") {
      setIndex(5);
    } else {
      setIndex(1);
    }
  }, []);
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
                  <NavLink to="/" ClassName="active">
                    [ होम ]
                  </NavLink>
                ) : (
                  <NavLink to="/">होम</NavLink>
                )}
              </li>
              <li onClick={() => toggleIndex(2)}>
                {index === 2 ? (
                  <NavLink to="/equipment" ClassName="active">
                    [ उपकरणे ]
                  </NavLink>
                ) : (
                  <NavLink to="/equipment">उपकरणे</NavLink>
                )}
              </li>
              {/* <li onClick={() => toggleIndex(3)}>
                {index === 3 ? (
                  <NavLink to="/solution" ClassName="active">
                    [ आमचे उपाय ]
                  </NavLink>
                ) : (
                  <NavLink to="/solution">आमचे उपाय</NavLink>
                )}
              </li> */}
              <li onClick={() => toggleIndex(4)}>
                {index === 4 ? (
                  <NavLink to="/about-us" ClassName="active">
                    [ आमच्या बद्दल महिती ]
                  </NavLink>
                ) : (
                  <NavLink to="/about-us">आमच्या बद्दल महिती</NavLink>
                )}
              </li>
              <li onClick={() => toggleIndex(5)}>
                {index === 5 ? (
                  <NavLink to="/contact" ClassName="active">
                    [ संपर्क ]
                  </NavLink>
                ) : (
                  <NavLink to="/contact">संपर्क</NavLink>
                )}
              </li>
            </ul>
          ) : null}
          {value === "English" ? (
            <ul className="flex-center">
              <li onClick={() => toggleIndex(1)}>
                {index === 1 ? (
                  <NavLink to="/" ClassName="active">
                    [ Home ]
                  </NavLink>
                ) : (
                  <NavLink to="/">Home</NavLink>
                )}
              </li>
              <li onClick={() => toggleIndex(2)}>
                {index === 2 ? (
                  <NavLink to="/equipment" ClassName="active">
                    [ Equipment ]
                  </NavLink>
                ) : (
                  <NavLink to="/equipment">Equipment</NavLink>
                )}
              </li>
              {/* <li onClick={() => toggleIndex(3)}>
                {index === 3 ? (
                  <NavLink to="/solution" ClassName="active">
                    [ Our Solution ]
                  </NavLink>
                ) : (
                  <NavLink to="/solution">Our Solution</NavLink>
                )}
              </li> */}
              <li onClick={() => toggleIndex(4)}>
                {index === 4 ? (
                  <NavLink to="/about-us" ClassName="active">
                    [ About ]
                  </NavLink>
                ) : (
                  <NavLink to="/about-us">About</NavLink>
                )}
              </li>
              <li onClick={() => toggleIndex(5)}>
                {index === 5 ? (
                  <NavLink to="/contact" ClassName="active">
                    [ Contact ]
                  </NavLink>
                ) : (
                  <NavLink to="/contact">Contact</NavLink>
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
      {toogleMenu ? <MobileMenu setValue={setValue} setToggleMenu={setToggleMenu} value={value} /> : null}
    </>
  );
};

export default Header;
