import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CopyFooter = ({ value }) => {
  return (
    <CopyMain className="flex-center">
      {value === "English" ? (
        <>
          <h5>(c) 2023 Dnyaneshwar Agro</h5>
          <Link to="#">Terms & Conditions</Link> <span>|</span>
          <Link to="#">Privacy Policy</Link>
        </>
      ) : null}
      {value === "Marathi" ? (
        <>
          <h5>(c) 2023 ज्ञानेश्वर ऍग्रो</h5>
          <Link to="#">अटी आणि परिस्थिती</Link> <span>|</span>
          <Link to="#">गोपनीयता धोरण</Link>
        </>
      ) : null}
    </CopyMain>
  );
};

export default CopyFooter;

const CopyMain = styled.div`
  background-color: #111;
  padding: 35px 25px;

  h5 {
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    margin-right: 25px;
  }
  a {
    color: rgba(255, 255, 255, 0.3);
    font-size: 20px;
    font-weight: 400;
    text-decoration: underline;

    &:hover {
      color: yellowgreen;
    }
  }
  span {
    color: #fff;
    font-size: 20px;
    margin: 0px 10px;
  }
  @media only screen and (max-width: 991px) {
    flex-direction: column;
    padding: 15px 25px;

    h5 {
      text-align: center;
      font-size: 20px;
      margin-right: 0px;
      margin-bottom: 10px;
    }
    a {
      margin-bottom: 7px;
    }
    span {
      display: none;
    }
  }
`;
