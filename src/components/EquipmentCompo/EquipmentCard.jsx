import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EquipmentCard = (props) => {
  const { product } = props;
  return (
    <Card>
      <Link
        to={`/equipment-detail/${product.id}`}
        className="card"
        key={product.id}
      >
        <img src={product.img} alt="" />
        <div className="data">
          <h3>{product.title}</h3>
          <p>{product.category}</p>
        </div>
      </Link>
    </Card>
  );
};

export default EquipmentCard;

const Card = styled.div`
  background-color: #fff;
  text-align: center;
  border: 2px solid #0e7202;

  &:nth-child(13), &:nth-child(15) {
    img {
      object-fit: cover;
    }
  }
  img {
    width: 100%;
    height: 250px;
    margin-bottom: -0.2rem;
  }
  .data {
    border-top: 2px solid #0e7202;
    padding: 20px 15px;
    h3 {
      margin-bottom: 0.3rem;
      font-weight: 500;
      color: #222;
      text-transform: uppercase;
    }
    p {
      font-size: 16px;
      font-weight: 500;
      color: #222;
    }
  }
  @media only screen and (max-width: 991px) {
    img {
      width: 100%;
      height: 300px;
    }
  }
`;
