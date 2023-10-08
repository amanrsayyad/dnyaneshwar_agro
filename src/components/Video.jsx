import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowRight, FaPlay } from "../utils/Icon";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import VideoPopup from "./VideoPopup";

const Video = ({ value }) => {
  const [videoPopup, setVideoPopup] = useState(false);
  return (
    <div>
      <VideoMain>
        <VideoGrid>
          <VideoCard>
            <img src={img5} alt="" />
            <div className="overlay"></div>
            {value === "Marathi" ? (
              <>
                <div className="data">
                  <div className="label">[ 16 वर्षे कृषी उपकरणे तज्ञ ]</div>
                  <h3>
                    उद्योगाचा वापर करण्यासाठी उपाय आणि चांगल्या कामासाठी सहाय्य
                    प्रदान करा
                  </h3>
                  <Link to="#" className="flex-start">
                    <BsArrowRight className="icoRight" /> उपकरणे पहा
                  </Link>
                </div>
              </>
            ) : null}
            {value === "English" ? (
              <>
                <div className="data">
                  <div className="label">
                    [ 16 Years Of Agriculture Equipment Expertise ]
                  </div>
                  <h3>
                    Provide Solutions to Utilize Industry and Assistance for
                    Better Working
                  </h3>
                  <Link to="#" className="flex-start">
                    <BsArrowRight className="icoRight" /> SEE EQUIPMENTS
                  </Link>
                </div>
              </>
            ) : null}
          </VideoCard>
          <VideoCard>
            <img src={img4} alt="" />
          </VideoCard>
          <PlayBtn className="flex-center" onClick={() => setVideoPopup(true)}>
            <FaPlay className="playBtn" />
          </PlayBtn>
        </VideoGrid>
      </VideoMain>
      {videoPopup ? <VideoPopup setVideoPopup={setVideoPopup} /> : null}
    </div>
  );
};

export default Video;

const VideoMain = styled.div`
  padding-top: 4rem;
  margin-bottom: 0rem;

  @media only screen and (max-width: 991px) {
    margin-bottom: 1rem;
  }
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const VideoCard = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .overlay {
    position: absolute;
    top: 0%;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
  }
  .data {
    position: absolute;
    top: 18%;
    left: 15%;

    .label {
      color: yellowgreen;
      font-size: 20px;
      margin-bottom: 2px;
    }
    h3 {
      font-size: 35px;
      color: #fff;
      width: 80%;
      margin-bottom: 35px;
    }
    a {
      color: #fff;
      font-weight: 600;
      text-decoration: underline;

      .icoRight {
        font-size: 18px;
        margin-right: 5px;
        color: yellowgreen;
      }
    }
    @media only screen and (max-width: 991px) {
      top: 12%;
      left: 10%;
      .label {
        font-size: 15px;
      }
      h3 {
        font-size: 25px;
        color: #fff;
        width: 95%;
        margin-bottom: 17px;
      }
    }
    @media only screen and (max-width: 991px) {
      top: 18%;
      left: 10%;
      h3 {
        font-size: 20px;
        color: #fff;
        width: 95%;
        margin-bottom: 17px;
      }
      a {
        font-size: 14px;
      }
    }
  }
`;

const PlayBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background-color: yellowgreen;
  border-radius: 50%;
  cursor: pointer;

  .playBtn {
    font-size: 30px;
    color: #fff;
  }
  @media only screen and (max-width: 991px) {
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
    height: 70px;

    .playBtn {
      font-size: 22px;
      color: #fff;
    }
  }
`;
