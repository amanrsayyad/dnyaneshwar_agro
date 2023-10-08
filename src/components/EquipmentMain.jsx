import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { PRODUCTS, PRODUCTS2 } from "../utils/Data";

const EquipmentMain = ({ value }) => {
  return (
    <EquipmentContainer>
      <div className="bg"></div>
      <div className="dataHeader">
        <div>
          {value === "Marathi" ? (
            <div className="labelTitle">[ आमची उपकरणे ]</div>
          ) : null}
          {value === "English" ? (
            <div className="labelTitle">[ Our Equipments ]</div>
          ) : null}
          {value === "Marathi" ? (
            <h3>उच्च दर्जाची कार्यक्षमता उपकरणे</h3>
          ) : null}
          {value === "English" ? (
            <h3>High Quality Performance Equipments</h3>
          ) : null}
        </div>
        <div className="flex-center">
          {value === "Marathi" ? (
            <Link to="/equipment" className="button">
              सर्व उपकरणे पहा
            </Link>
          ) : null}
          {value === "English" ? (
            <Link to="/equipment" className="button">
              See All Equipments
            </Link>
          ) : null}
        </div>
      </div>
      {value === "Marathi" ? (
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={true}
          breakpoints={{
            576: {
              width: 576,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          slidesPerView={1}
          className="mySwiper"
        >
          {PRODUCTS2.map((item) => {
            return (
              <SwiperSlide>
                <Link to={`/equipment-detail/${item.id}`} className="card">
                  <img src={item.img} alt="" />
                  <div className="data flex-center flex-col">
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={true}
          breakpoints={{
            576: {
              width: 576,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          slidesPerView={1}
          className="mySwiper"
        >
          {PRODUCTS.map((item) => {
            return (
              <SwiperSlide>
                <Link to={`/equipment-detail/${item.id}`} className="card">
                  <img src={item.img} alt="" />
                  <div className="data flex-center flex-col">
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </EquipmentContainer>
  );
};

export default EquipmentMain;

const EquipmentContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 12rem;
  .bg {
    position: absolute;
    top: 0%;
    left: 0%;
    background-color: var(--green-color);
    width: 100%;
    height: 400px;
    z-index: 10;
  }
  .dataHeader {
    position: absolute;
    top: 7%;
    left: 2%;
    z-index: 10;
    width: 96%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .labelTitle {
      color: #fff;
      font-size: 20px;
      margin-bottom: 0.8rem;
    }
    h3 {
      color: #fff;
      font-size: 35px;
      font-weight: 500;
    }
    .button {
      margin-top: 2rem;
      background-color: #fff;
      padding: 15px 17px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      border-radius: 2px;
      color: #222;
    }
    @media only screen and (max-width: 991px) {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      left: 3.5%;

      h3 {
        width: 100%;
        font-size: 25px;
      }
    }
  }
  .mySwiper {
    z-index: 10;
    margin: 0px 25px;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media only screen and (max-width: 991px) {
      margin: 0px 15px;
    }
  }
  .card {
    z-index: 10;
    background-color: #fff;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 400px;
      margin-bottom: -0.6rem;
      border-bottom: 2px solid var(--green-color);
    }
    .data {
      padding: 35px 0px;
      color: #222 !important;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
      border-bottom: 2px solid var(--green-color);
      background-color: #fff;

      h3 {
        margin-bottom: 0.3rem;
        font-weight: 500;
        color: #222;
        text-transform: uppercase;
        font-size: 21px;
      }
      p {
        font-size: 18px;
        font-weight: 500;
        color: #222;
      }
    }
    @media only screen and (max-width: 991px) {
      img {
        height: 300px;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    padding-top: 17rem;
  }
`;
