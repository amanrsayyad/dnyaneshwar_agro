import React from "react";
import styled from "styled-components";
import {
  AiOutlineMail,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  IoCallOutline
} from "../utils/Icon";

const TopHeader = ({ value, setValue }) => {
  return (
    <TopHeaderMain className="space-between">
      <div className="flex-center">
        <div className="list mail flex-center">
          <div className="icoMain flex-center">
            <AiOutlineMail className="ico" />
          </div>
          <p>official@dnyaneshwaragro.in</p>
        </div>
        <div className="mobileBlock">
          <a href="#" target="_blank" className="socialList flex-center">
            <div className="icoMain flex-center">
              <FaFacebookF className="ico" />
            </div>
          </a>
          <a href="#" target="_blank" className="socialList flex-center">
            <div className="icoMain flex-center">
              <FaYoutube className="ico" />
            </div>
          </a>
          <a href="#" target="_blank" className="socialList flex-center">
            <div className="icoMain flex-center">
              <FaInstagram className="ico" />
            </div>
          </a>
        </div>
      </div>
      <div className="flex-center">
        <a href="#" target="_blank" className="socialList flex-center">
          <div className="icoMain flex-center">
            <FaFacebookF className="ico" />
          </div>
        </a>
        <a href="#" target="_blank" className="socialList flex-center">
          <div className="icoMain flex-center">
            <FaYoutube className="ico" />
          </div>
        </a>
        <a href="#" target="_blank" className="socialList flex-center">
          <div className="icoMain flex-center">
            <FaInstagram className="ico" />
          </div>
        </a>
        <select onChange={e => setValue(e.target.value)}>
          <option>Marathi</option>
          <option>English</option>
        </select>
      </div>
    </TopHeaderMain>
  );
};

export default TopHeader;

const TopHeaderMain = styled.div`
  background-color: var(--green-color);
  padding: 7px 15px;

  .mobileBlock {
    display: none;
  }
  @media only screen and (max-width: 991px) {
    .mobileBlock {
      display: block;
    }
  }
  div {
    .socialList {
      margin-right: 10px;
      cursor: pointer;
      .icoMain {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        .ico {
          font-size: 20px;
          color: #fff;
        }
      }
      &:hover {
        .icoMain {
          background-color: #fff;
        }
        .ico {
          color: var(--green-color);
        }
      }
    }
    .list {
      margin-right: 15px;
      .icoMain {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: #fff;
        .ico {
          font-size: 20px;
        }
      }
      p {
        color: #fff;
        font-weight: 500;
        font-size: 17px;
        margin-left: 7px;
      }
    }
    select {
      padding: 8px 15px;
      border-radius: 4px;
      background-color: #fff;
      border: none;
      outline: none;
      margin-left: 25px;
    }
    @media only screen and (max-width: 991px) {
      .socialList {
        display: none;
      }
      .mail {
        display: none;
      }
      .mobileBlock {
        display: block;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    /* display: none; */
  }
`;
