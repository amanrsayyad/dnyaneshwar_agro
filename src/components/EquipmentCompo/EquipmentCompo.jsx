import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { TfiMenuAlt } from "react-icons/tfi";
import { PRODUCTS, CATEGORIES, PRODUCTS2, CATEGORIES2 } from "../../utils/Data";
import EquipmentList from "./EquipmentList";
import FilterSidebar from "./FilterSidebar";

const EquipmentCompo = ({ value }) => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [state, setState] = useState({
    products: PRODUCTS,
    filters: new Set(),
  });

  const handleFilterChange = useCallback(
    (event) => {
      setState((previousState) => {
        let filters = new Set(previousState.filters);
        let products = PRODUCTS;

        if (event.target.checked) {
          filters.add(event.target.value);
        } else {
          filters.delete(event.target.value);
        }

        if (filters.size) {
          products = products.filter((product) => {
            return filters.has(product.category);
          });
        }

        return {
          filters,
          products,
        };
      });
    },
    [setState]
  );

  const [state2, setState2] = useState({
    products: PRODUCTS2,
    filters: new Set(),
  });

  const handleFilterChange2 = useCallback(
    (event) => {
      setState2((previousState) => {
        let filters = new Set(previousState.filters);
        let products = PRODUCTS2;

        if (event.target.checked) {
          filters.add(event.target.value);
        } else {
          filters.delete(event.target.value);
        }

        if (filters.size) {
          products = products.filter((product) => {
            return filters.has(product.category);
          });
        }

        return {
          filters,
          products,
        };
      });
    },
    [setState2]
  );

  return (
    <>
      <div className="flex-center">
        <EquipmentMain>
          <div>
            {value === "Marathi" ? (
              <Sidebar
                categories={CATEGORIES2}
                onFilterChange={handleFilterChange2}
              />
            ) : (
              <Sidebar
                categories={CATEGORIES}
                onFilterChange={handleFilterChange}
              />
            )}
          </div>

          <EquipmentCard>
            <div className="filterBtn" onClick={() => setToggleFilter(true)}>
              <TfiMenuAlt className="icon" /> Filter
            </div>
            {value === "Marathi" ? (
              <EquipmentList products={state2.products} />
            ) : (
              <EquipmentList products={state.products} />
            )}
          </EquipmentCard>
        </EquipmentMain>
      </div>
      {toggleFilter ? (
        <FilterSidebar
          categories={CATEGORIES}
          onFilterChange={handleFilterChange}
          setToggleFilter={setToggleFilter}
        />
      ) : null}
    </>
  );
};

export default EquipmentCompo;

const EquipmentMain = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr;
  grid-gap: 2rem;
  padding: 3.5rem calc(-625px + 45vw) 1.5rem;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const EquipmentCard = styled.div`
  .filterBtn {
    display: none;
    @media only screen and (max-width: 991px) {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--green-color);
      color: #fff;
      width: 130px;
      padding: 13px;
      border-radius: 3px;
      font-size: 18px;
      font-weight: 500;
      text-transform: uppercase;
      cursor: pointer;
      margin-bottom: 1rem;
      margin-left: 10px;
      .icon {
        font-size: 20px;
        margin-right: 13px;
      }
    }
  }
`;
