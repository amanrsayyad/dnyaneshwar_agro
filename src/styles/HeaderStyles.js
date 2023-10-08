import styled from "styled-components";

export const Container = styled.div`
  padding: 3.5rem calc(-625px + 50vw) 1.5rem;
`;

export const HeaderMain = styled.div`
  position: sticky;
  top: 0%;
  z-index: 1000;
  padding: 0px 20px;
  border-bottom: 1px solid #eee;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
  background-color: #fff;

  .border {
    background-color: #ccc;
    width: 1px;
    height: 100px;
    margin: 0rem 3rem;
  }
  .logoMain {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 80px;

    h3 {
      font-family: var(--font-alice);
      font-size: 25px;
      text-transform: uppercase;
      color: var(--green-color);
      margin-bottom: 10px;
      padding-left: 2.5rem;
      padding-top: 1rem;
    }
    @media only screen and (max-width: 991px) {
      h3 {
        font-size: 20px;
        margin-left: 3px;
        margin-top: 5px;
      }
    }
  }
  .logo_container {
    position: absolute;
    left: 0%;
    width: 100px;
    height: 70px;
    .logo {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  div {
    ul {
      list-style: none;
      li {
        margin-left: 25px;

        .active {
          color: var(--green-color);
        }
        a {
          font-weight: 600;
          color: #333;
          font-size: 20px;

          &:hover {
            color: var(--green-color);
          }
        }
      }
    }
  }
  .menu {
    display: none;
  }
  @media only screen and (max-width: 991px) {
    padding-left: 7px;
    .menu {
      display: block;
      cursor: pointer;

      .icoMenu {
        font-size: 27px;
      }
    }
    div {
      ul {
        display: none;
      }
    }
  }
`;
