import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

const Banner = props => {
  return (
    <BannerMain>
      <img src={props.img} alt="" />
      <div className="overlay"></div>
      <div className="label">
        {props.root} <BsArrowRight className="iconRight" /> {props.title}
      </div>
      <div className="data">{props.title}</div>
    </BannerMain>
  );
};


export default Banner;

const BannerMain = styled.div`
  position: relative;
  margin-bottom: 1rem;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
  .overlay {
    position: absolute;
    top: 0%;
    left: 0%;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 50vh;
  }
  .label {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: yellowgreen;
    width: 25%;
    padding: 18px 25px;
    color: #fff;
    font-size: 20px;
    border-radius: 4px;

    .iconRight {
      margin: 0px 15px;
    }
  }
  .data {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 50px;
    font-weight: 600;
  }
  @media only screen and (max-width: 991px) {
    img {
      height: 30vh;
    }
    .overlay {
      height: 30vh;
    }
    .label {
      width: 63%;
      padding: 18px 15px;
      font-size: 18px;

      .iconRight {
        margin: 0px 9px;
      }
    }
    .data {
      font-size: 30px;
      text-align: center;
    }
  }
`;
