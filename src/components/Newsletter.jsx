import React from "react";
import styled from "styled-components";
import { AiOutlineMail } from "../utils/Icon";

const Newsletter = ({ value }) => {
  return (
    <NewsMain className="space-between">
      {value === "Marathi" ? (
        <>
          <h3>वृत्तपत्र सदस्यता</h3>
          <div className="inputForm flex-center">
            <AiOutlineMail className="iconMail" />
            <input type="text" placeholder="तुमचा ईमेल टाका" />
            <div className="border"></div>
            <div className="sub flex-center">सदस्यता घ्या</div>
          </div>
        </>
      ) : null}
      {value === "English" ? (
        <>
          <h3>Newsletter Subscription</h3>
          <div className="inputForm flex-center">
            <AiOutlineMail className="iconMail" />
            <input type="text" placeholder="Enter Your Email" />
            <div className="border"></div>
            <div className="sub flex-center">SUBSCRIBE</div>
          </div>
        </>
      ) : null}
    </NewsMain>
  );
};

export default Newsletter;

const NewsMain = styled.div`
  background-color: var(--green-color);
  max-width: 1600px;
  padding: 50px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: #fff;
    font-size: 35px;
  }
  .inputForm {
    position: relative;
    border: 0.52083vw solid rgba(255, 255, 255, 0.2);
    border-radius: 2px;
    input {
      width: 470px;
      height: 50px;
      background-color: #fff !important;
      padding-left: 50px !important;
    }
    .sub {
      background-color: #fff !important;
      color: #000;
      font-weight: 600;
      font-size: 18px;
      height: 50px;
      width: 125px;
      cursor: pointer;
    }
    .border {
      width: 1px;
      background-color: var(--green-color);
      padding: 10px 0px;
    }
    .iconMail {
      position: absolute;
      left: 2%;
      top: 50%;
      transform: translateY(-50%);
      font-size: 25px;
    }
    @media only screen and (max-width: 991px) {
      input {
        width: 220px;
        height: 50px;
        background-color: #fff !important;
        padding-left: 50px !important;
      }
      .sub {
        background-color: #fff !important;
        color: #000;
        font-weight: 600;
        font-size: 16px;
        height: 50px;
        width: 100px;
        cursor: pointer;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h3 {
      color: #fff;
      font-size: 35px;
      margin-bottom: 20px;
    }
  }
`;
