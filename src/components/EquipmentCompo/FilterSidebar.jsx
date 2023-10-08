import React from "react";
import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";

const FilterSidebar = (props) => {
  const { categories, onFilterChange, setToggleFilter } = props;
  return (
    <FilterMain>
      <div className="menuCard">
        <div className="space-between filter">
          <div>
            <h4>Filter:</h4>
          </div>
          <div>
            {/* <p>Clear All</p> */}
          </div>
        </div>
        <div className="title">
          <div className="space-between">
            <h3>All Categories</h3>
            <FiMinus className="icon" />
          </div>
          <div className="border"></div>
          <div className="borderDark"></div>
        </div>
        <ul className="listFilter">
          {categories.map((category) => (
            <li key={category}>
              <input
                onChange={onFilterChange}
                type="checkbox"
                value={category}
              />
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="overlay" onClick={() => setToggleFilter(false)}></div>
      <div className="closeIcon" onClick={() => setToggleFilter(false)}>
        <IoCloseOutline className="icon" />
      </div>
    </FilterMain>
  );
};

export default FilterSidebar;

const FilterMain = styled.div`
  .menuCard {
    position: fixed;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 260px;
    background-color: #fff;
    z-index: 1015;
    overflow: hidden;
    transition: all 0.2s ease-out 0s;
    padding: 10px 17px;

    .filter {
      margin-bottom: 2rem;
      div {
        h4 {
          font-size: 22px;
          font-weight: 500;
        }
        p {
          font-size: 18px;
          cursor: pointer;
        }
      }
    }
    .title {
      position: relative;
      margin-bottom: 0.8rem;
      h3 {
        font-size: 22px;
        font-weight: 500;
      }
      .border {
        margin-top: 0.3rem;
        margin-bottom: 0.5rem;
        height: 2px;
        width: 100%;
        background-color: #ccc;
      }
      .borderDark {
        position: absolute;
        left: 0%;
        bottom: -0.5%;
        height: 2.5px;
        width: 40%;
        background-color: #222;
      }
    }
    .listFilter {
      margin-top: 0rem;

      li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 0.7rem;
        font-size: 19px;
        input {
          width: 18px;
          height: 18px;
          margin-right: 7px;
        }
      }
    }
  }
  .overlay {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 320%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1005;
  }
  .closeIcon {
    position: fixed;
    right: 3%;
    top: 10%;
    z-index: 1015;
    color: rgb(255, 255, 255) !important;
    cursor: pointer;

    .icon {
      font-size: 34px;
    }

    @media only screen and (max-width: 428px) {
      position: fixed;
      right: 3%;
      top: 7%;
    }
    @media only screen and (max-width: 390px) {
      position: fixed;
      right: 3%;
      top: 8%;
    }
    @media only screen and (max-width: 375px) {
      position: fixed;
      right: 3%;
      top: 10%;
    }
    @media only screen and (max-width: 360px) {
      position: fixed;
      right: 3%;
      top: 8.5%;
    }
  }
`;
