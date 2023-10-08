import styled from "styled-components";

//---------[ ABOUT US STYLES ]----------//
export const SolutionContainer = styled.div`
  padding: 3.5rem calc(-625px + 50vw) 1.5rem;

  h4 {
    margin-top: 0.5rem;
    font-size: 2rem;
    color: #333;
  }
  @media only screen and (max-width: 991px) {
    h4 {
      font-size: 1.7rem;
      text-align: center;
    }
  }
`;

export const SolutionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-top: 3rem;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    margin-top: 2rem;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

export const SolutionCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-direction: column;
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
  /* &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 300px;
    background-image: linear-gradient(to top, black 0%, transparent 100%);
    content: "";
    transition: all 0.3s linear;
  } */
  .data {
    padding-top: 1.2rem;
    p {
      color: #333;
      font-size: 22px;
      text-align: center;
    }
    h3 {
      text-align: center;
      color: #333;
      font-size: calc(24px + 12 * (100vw / 1920));
      font-weight: 500;
      margin-bottom: 15px;
      width: 100%;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #333;
      font-size: 17px;
      text-decoration: underline;
      text-transform: uppercase;
      font-weight: 500;

      .iconRight {
        color: yellowgreen;
        margin-left: 7px;
      }
      &:hover {
        text-decoration: none;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    img {
      height: 261px;
    }
  }
`;

//---------[ ABOUT US STYLES ]----------//
export const AboutMain = styled.div`
  padding: 3.5rem calc(-625px + 50vw) 1.5rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 991px) {
    margin-bottom: 0rem;
  }
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutCard = styled.div`
  position: relative;
  img {
    height: 100%;
    width: 95%;
    margin: auto;
    /* &:nth-child(1) {
      position: absolute;
      right: 0%;
      top: 0%;
      width: 350px;
      height: 400px;
      object-fit: cover;
      z-index: 100;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4) !important;
    }
    &:nth-child(2) {
      position: absolute;
      right: 30%;
      top: 13%;
      width: 350px;
      height: 400px;
      margin-top: 0.5rem;
      object-fit: cover;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4) !important;
    } */
  }
  .data {
    position: absolute;
    bottom: 0%;
    left: 0%;
    background-color: var(--green-color);
    width: 100%;
    color: #fff;
    padding: 25px;
    font-family: var(--font-alice) !important;
    h4 {
      margin-bottom: 5px;
      font-size: 22px;
      font-weight: 400;
    }
    h2 {
      font-size: 30px;
      font-weight: 500;
    }
    @media only screen and (max-width: 991px) {
      left: 50%;
      transform: translateX(-50%);

      h4 {
        font-size: 18px;
      }
      h2 {
        font-size: 25px;
      }
    }
  }
  h3 {
    margin-top: 8px;
    font-size: 30px;
    width: 85%;
  }
  p {
    margin: 1.7rem 0rem;
    color: #555;
    width: 85%;
    font-weight: 400;
    font-size: 20px;
  }
  @media only screen and (max-width: 991px) {
    margin-left: 15px;

    &:nth-child(1) {
      margin-right: 15px;
    }
    &:nth-child(2) {
      grid-row: 1/3;
      grid-column: 1/2;
    }
    h3 {
      margin-top: 8px;
      font-size: 22px;
      width: 97%;
    }
    p {
      margin: 1.7rem 0rem;
      color: #555;
      width: 95%;
      font-weight: 400;
      font-size: 17px;
    }
    img {
      height: 350px;
      width: 100%;
      object-fit: cover;
      /* &:nth-child(1) {
        position: relative;
        width: 300px;
        height: 350px;
        margin-left: 2.2rem;
      }
      &:nth-child(2) {
        position: absolute;
        right: 17%;
        top: 10%;
        width: 300px;
        height: 350px;
        margin-top: 0.5rem;
      } */
    }
  }
`;

//---------[ SOLUTION DETAIL STYLES ]----------//
export const SolutionMain = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 3.5fr 1.4fr;
    grid-gap: 2rem;

    .border {
      background-color: #eee;
      height: 2px;
      width: 100%;
      margin-top: 25px;
    }
    .card {
      padding: 30px;
      background-color: #fff;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      img {
        width: 100%;
        height: 500px;
        object-fit: cover;
      }
      h3 {
        color: #222;
        font-size: 45px;
        margin-top: 15px;
      }
      h4 {
        color: #222;
        font-size: 30px;
        margin-top: 25px;
      }
      p {
        margin-top: 10px;
        font-size: 18px;
        .icon {
          color: yellowgreen;
          font-size: 27px;
          margin-right: 5px;
        }
      }
    }
    .priceCard {
      background-color: #222;
      padding: 65px 0px;
      color: #fff;
      border-left: 5px solid yellowgreen;

      p {
        font-size: 20px;
        margin-bottom: 8px;
      }
      h3 {
        font-size: 45px;
      }
      @media only screen and (max-width: 991px) {
        padding: 60px 0px;
        p {
          font-size: 18px;
        }
        h3 {
          font-size: 38px;
        }
      }
    }
    .flyerCard {
      margin-top: 1.4rem;
      background-color: #fff;
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
      padding: 20px 25px;

      .flyerBtn {
        text-align: center;
        background-color: yellowgreen;
        text-transform: uppercase;
        padding: 20px 20px;
        color: #fff;
        border-radius: 3px;
        font-size: 18px;
        cursor: pointer;

        .icon {
          margin-left: 7px;
        }
        &:hover {
          background-color: green;
        }
      }
    }
    .form {
      margin-top: 1.4rem;
      background-color: #fff;
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
      padding: 20px 25px;

      h4 {
        font-size: 22px;
      }
      .border {
        background-color: #eee;
        height: 2px;
        width: 100%;
        margin-top: 15px;
      }
      .formContainer {
        margin-top: 20px;
        input {
          width: 100%;
          height: 62px;
          margin-bottom: 20px;
        }
        textarea {
          width: 100%;
          padding-top: 15px;
        }
      }
    }

    @media only screen and (max-width: 991px) {
      grid-template-columns: 1fr;
      margin: 0px 10px;

      .card {
        padding: 20px;
        img {
          width: 100%;
          height: 300px;
        }
        h3 {
          font-size: 35px;
        }
        h4 {
          font-size: 30px;
        }
        p {
          display: flex;
          align-items: flex-start;
          font-size: 16px;
          .icon {
            font-size: 35px;
          }
        }
      }
    }
  }
`;

export const DimensionTab = styled.div`
  margin-top: 16px;
  ul {
    display: flex;
    margin-bottom: 10px;
    li {
      width: 100%;
      padding: 20px 20px;
      text-align: center;
      font-size: 22px;
      cursor: pointer;

      &:nth-child(1) {
        border-radius: 5px 0px 0px 5px;
      }
      &:nth-child(2) {
        border-radius: 0px 5px 5px 0px;
      }
    }
    .active {
      background-color: yellowgreen;
    }
    .deactive {
      background-color: #eee;
    }
    @media only screen and (max-width: 991px) {
      flex-direction: column;
      margin-bottom: 10px;
      li {
        font-size: 22px;
      }
    }
  }
`;
