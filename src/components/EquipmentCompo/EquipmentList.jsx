import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import EquipmentCard from "./EquipmentCard";

const EquipmentList = (props) => {
  const { products } = props;
  return (
    <Grid>
      {products.map((product) => (
        <EquipmentCard product={product} />
      ))}
    </Grid>
  );
};

export default EquipmentList;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    margin: 0px 10px;
  }
`;
