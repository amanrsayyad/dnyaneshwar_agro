import React from "react";
import styled from "styled-components";

const SocialSticky = () => {
  return (
    <SocialMain>
      <div class="sticky-icon">
        {/* <a href="https://www.instagram.com/?hl=en" class="Instagram">
          <i class="fab fa-instagram"></i> Instagram{" "}
        </a> */}
        <a href="https://www.facebook.com/" target="_blank" class="Facebook">
          <i class="fab fa-facebook-f"> </i> Facebook
        </a>
        {/* <a href="https://aboutme.google.com/u/0/?referer=gplus" class="Google">
          <i class="fab fa-google-plus-g"> </i> Google 
        </a> */}
        <a href="https://www.youtube.com/" target="_blank" class="Youtube">
          <i class="fab fa-youtube"></i> Youtube
        </a>
        <a href="https://wa.me/917986996229" target="_blank" class="Whatsapp">
          <i class="fa-brands fa-whatsapp"></i> Whatsapp
        </a>
        {/* <a href="https://twitter.com/login" class="Twitter">
          <i class="fab fa-twitter"> </i> Twitter{" "}
        </a> */}
      </div>
    </SocialMain>
  );
};

export default SocialSticky;

const SocialMain = styled.div`
  .sticky-icon {
    z-index: 1000000;
    position: fixed;
    top: 40%;
    right: 0%;
    width: 220px;
    display: flex;
    flex-direction: column;
  }
  .sticky-icon a {
    transform: translate(160px, 0px);
    border-radius: 50px 0px 0px 50px;
    text-align: left;
    margin: 2px 0px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px;
    font-size: 22px;
    font-family: "Oswald", sans-serif;
    transition: all 0.8s;
  }
  .sticky-icon a:hover {
    color: #fff;
    transform: translate(0px, 0px);
  }
  .sticky-icon a:hover i {
    transform: rotate(360deg);
  }
  /*.search_icon a:hover i  {
	transform:rotate(360deg);}*/
  .Facebook {
    background-color: #2c80d3;
    color: #fff;
  }

  .Youtube {
    background-color: #fa0910;
    color: #fff;
  }

  .Twitter {
    background-color: #53c5ff;
    color: #fff;
  }

  .Instagram {
    background-color: #fd1d1d;
    color: #fff;
  }

  .Google {
    background-color: #d34836;
    color: #fff;
  }
  .Whatsapp {
    background-color: #25d366;
    color: #fff;
  }
  .sticky-icon a i {
    background-color: #fff;
    height: 40px;
    width: 40px;
    color: #000;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    margin-right: 20px;
    transition: all 0.5s;
  }
  .sticky-icon a i.fa-facebook-f {
    background-color: #fff;
    color: #2c80d3;
  }

  .sticky-icon a i.fa-google-plus-g {
    background-color: #fff;
    color: #d34836;
  }

  .sticky-icon a i.fa-instagram {
    background-color: #fff;
    color: #fd1d1d;
  }

  .sticky-icon a i.fa-youtube {
    background-color: #fff;
    color: #fa0910;
  }

  .sticky-icon a i.fa-twitter {
    background-color: #fff;
    color: #53c5ff;
  }
  .sticky-icon a i.fa-whatsapp {
    background-color: #fff;
    color: #25d366;
  }
  .fas fa-shopping-cart {
    background-color: #fff;
  }
  #myBtn {
    height: 50px;
    display: none;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    text-align: center;
    padding: 10px;
    text-align: center;
    line-height: 40px;
    border: none;
    outline: none;
    background-color: #1e88e5;
    color: white;
    cursor: pointer;
    border-radius: 50%;
  }
  .fa-arrow-circle-up {
    font-size: 30px;
  }

  #myBtn:hover {
    background-color: #555;
  }
`;
