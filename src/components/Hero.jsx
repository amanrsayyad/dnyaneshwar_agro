import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { BsArrowRight } from "react-icons/bs";
import { EffectFade } from "swiper/modules";
import slider1 from "../assets/slider1.jpeg";
import slider2 from "../assets/slider2.jpeg";
import slider3 from "../assets/slider3.jpeg";

const Hero = ({ value }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <HeroMain>
      <Swiper
        className="swiper"
        loop={true}
        effect={"fade"}
        modules={[EffectFade]}
      >
        {value === "Marathi" ? (
          <>
            <SwiperSlide>
              <div className="grid">
                <div className="card">
                  <h3 data-aos="fade-right">ज्ञानेश्वर ऍग्रो</h3>
                  <p data-aos="fade-right">
                    रोटाव्हेटर, ट्रॅक्टर ट्रॉली, चाफ कटरच्या विस्तृत श्रेणीचे
                    आघाडीचे घाऊक व्यापारी
                  </p>
                  <div className="btn flex-center"  data-aos="fade-right">
                    अधिक जाणून घ्या <BsArrowRight className="iconRight" />
                  </div>
                </div>
                <div className="imgDiv">
                  <img src={slider1} alt="" />
                  <div className="pageinition">
                    <p>
                      1<span>/3</span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid">
                <div className="card">
                  <h3 data-aos="fade-right">ज्ञानेश्वर ऍग्रो</h3>
                  <p data-aos="fade-right">
                    रोटाव्हेटर, ट्रॅक्टर ट्रॉली, चाफ कटरच्या विस्तृत श्रेणीचे
                    आघाडीचे घाऊक व्यापारी
                  </p>
                  <div className="btn flex-center" data-aos="fade-right">
                    अधिक जाणून घ्या <BsArrowRight className="iconRight" />
                  </div>
                </div>
                <div className="imgDiv">
                  <img src={slider2} alt="" />
                  <div className="pageinition">
                    <p>
                      2<span>/3</span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid">
                <div className="card">
                  <h3 data-aos="fade-right">ज्ञानेश्वर ऍग्रो</h3>
                  <p data-aos="fade-right">
                    रोटाव्हेटर, ट्रॅक्टर ट्रॉली, चाफ कटरच्या विस्तृत श्रेणीचे
                    आघाडीचे घाऊक व्यापारी
                  </p>
                  <div className="btn flex-center" data-aos="fade-right">
                    अधिक जाणून घ्या <BsArrowRight className="iconRight" />
                  </div>
                </div>
                <div className="imgDiv">
                  <img src={slider3} alt="" />
                  <div className="pageinition">
                    <p>
                      3<span>/3</span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        ) : null}
        {value === "English" ? (
          <>
            <SwiperSlide>
              <div className="grid">
                <div className="card">
                  <h3 data-aos="fade-right">Dnyaneshwar Agro</h3>
                  <p data-aos="fade-right">
                    Leading Wholesaler Trader of wide range of Rotavator,Tractor
                    Trolly,Chaff Cutter & Tractor equipment
                  </p>
                  <div className="btn flex-center" data-aos="fade-right">
                    Learn More <BsArrowRight className="iconRight" />
                  </div>
                </div>
                <div className="imgDiv">
                  <img src={slider1} alt="" />
                  <div className="pageinition">
                    <p>
                      1<span>/3</span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid">
                <div className="card">
                  <h3 data-aos="fade-right">Dnyaneshwar Agro</h3>
                  <p data-aos="fade-right">
                    Leading Wholesaler Trader of wide range of Rotavator,Tractor
                    Trolly,Chaff Cutter & Tractor equipment
                  </p>
                  <div className="btn flex-center" data-aos="fade-right">
                    Learn More <BsArrowRight className="iconRight" />
                  </div>
                </div>
                <div className="imgDiv">
                  <img src={slider2} alt="" />
                  <div className="pageinition">
                    <p>
                      2<span>/3</span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid">
                <div className="card">
                  <h3 data-aos="fade-right">Dnyaneshwar Agro</h3>
                  <p data-aos="fade-right">
                    Leading Wholesaler Trader of wide range of Rotavator,Tractor
                    Trolly,Chaff Cutter & Tractor equipment
                  </p>
                  <div className="btn flex-center" data-aos="fade-right">
                    Learn More <BsArrowRight className="iconRight" />
                  </div>
                </div>
                <div className="imgDiv">
                  <img src={slider3} alt="" />
                  <div className="pageinition">
                    <p>
                      3<span>/3</span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        ) : null}
      </Swiper>
    </HeroMain>
  );
};

export default Hero;

const HeroMain = styled.div`
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media only screen and (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  }
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;

    @media only screen and (max-width: 991px) {
      height: 300px;
    }
  }
  .imgDiv {
    position: relative;

    .pageinition {
      position: absolute;
      bottom: 4%;
      left: 50%;
      transform: translateX(-50%);

      p {
        color: #fff;
        font-size: 45px;
        font-weight: 700;
        span {
          font-size: 25px;
          font-weight: 400;
        }
      }
      @media only screen and (max-width: 991px) {
        p {
          font-size: 33px;
          span {
            font-size: 20px;
          }
        }
      }
    }
  }
  .card {
    background-color: lightgreen;
    padding: 3rem 3.5rem;
    z-index: 1000;

    h3 {
      font-family: var(--font-alice);
      font-size: 40px;
      margin-bottom: 10px;
      text-transform: uppercase;
      color: var(--green-color);
    }
    p {
      font-size: 27px;
      color: #000;
    }

    @media only screen and (max-width: 991px) {
      padding: 3rem 1rem;

      h3 {
        font-size: 30px;
      }
      p {
        font-size: 20px;
      }
    }
  }
`;
