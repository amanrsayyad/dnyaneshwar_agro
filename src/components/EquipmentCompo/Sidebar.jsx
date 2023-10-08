import React from "react";
import styled from "styled-components";
import { FiMinus } from "react-icons/fi";

const Sidebar = (props) => {
  const { categories, onFilterChange } = props;

  return (
    <SidebarMain>
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
            <input onChange={onFilterChange} type="checkbox" value={category} />
            {category}
          </li>
        ))}
      </ul>
    </SidebarMain>
  );
};

export default Sidebar;

const SidebarMain = styled.div`
  position: sticky;
  top: 13%;
  left: 0%;
  padding: 15px;
  padding-top: 0px;

  .search {
    position: relative;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    box-shadow: rgba(0, 0, 0, 0.2);
    background-color: #fff;
    margin-bottom: 1rem;
    width: 100%;
    border-radius: 4px;

    input {
      border-radius: 4px;
      background-color: #fff !important;
      width: 100%;
      height: 50px;

      &:focus {
        box-shadow: none !important;
      }
    }
    .icon {
      position: absolute;
      top: 50%;
      right: 3%;
      transform: translateY(-50%);
      font-size: 25px;
      color: #222;
      cursor: pointer;
    }
  }
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

  @media only screen and (max-width: 991px) {
    display: none;
  }
`;
