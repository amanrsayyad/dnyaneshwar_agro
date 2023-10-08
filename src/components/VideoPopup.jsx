import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "../utils/Icon";
import video from "../assets/vid.mp4"

const VideoPopup = ({ setVideoPopup }) => {
  return (
    <VideoMain>
      <div className="overlay" onClick={() => setVideoPopup(false)}></div>
      <div className="modal">
        <video src={video} autoplay controls></video>
      </div>
      <div className="closeIco" onClick={() => setVideoPopup(false)}>
        <AiOutlineClose className="iconClose" />
      </div>
    </VideoMain>
  );
};

export default VideoPopup;

const VideoMain = styled.div`
  overflow: hidden;
  .overlay {
    position: fixed;
    top: 0%;
    left: 0%;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100vh;
    z-index: 1000;
  }
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
    background-color: #fff;
    padding-top: 7px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;

    video {
      height: 570px;
      width: 950px;
    }
    @media only screen and (max-width: 991px) {
      position: fixed;
      top: 35%;
      left: 50%;
      video {
        height: 270px;
        width: 50nvh;
      }
    }
  }
  .closeIco {
    position: fixed;
    top: 3%;
    right: 1%;
    z-index: 10000;
    color: #fff;
    .iconClose {
      font-size: 32px;
      cursor: pointer;
      color: #fff;
    }
  }
`;
