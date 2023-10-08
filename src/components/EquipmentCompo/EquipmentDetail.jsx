import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { EquipmentDetailData, EquipmentDetailData2 } from "../../utils/Data";
import ReactWhatsapp from "react-whatsapp";
import { toast } from "react-toastify";

const EquipmentDetail = ({ value }) => {
  const [data, setData] = useState([]);
  let { id } = useParams();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const dataDetail = [name, phone, state, city];

  const ContactFormMar = () => {
    if (
      name === "" ||
      phone.length > 10 ||
      phone === "" ||
      state === "" ||
      city === ""
    ) {
      toast.error("सर्व रखाणे गरजेचे आहेत");
    }
    localStorage.setItem("dataKey", JSON.stringify(dataDetail));
  };

  const ContactFormEng = () => {
    if (
      name === "" ||
      phone.length > 10 ||
      phone === "" ||
      state === "" ||
      city === ""
    ) {
      toast.error("All fields are Required");
    }
    localStorage.setItem("dataKey", JSON.stringify(dataDetail));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <EquipmentMain>
      {value === "Marathi" ? (
        <>
          {EquipmentDetailData2.map((item) => {
            return (
              <>
                {id === item.id ? (
                  <EquipmentGrids>
                    <div className="grid">
                      <div className="card">
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                        <h2>वैशिष्ट्य</h2>
                        <img src={item.specImg} alt="" />
                        <h2>ग्राहक प्रतिक्रिया</h2>
                        <video src={item.video} controls></video>
                      </div>
                      <div className="sidebar">
                        <div className="form">
                          <h4>उपकरण चौकशी</h4>
                          <div className="border"></div>
                          <div className="formContainer">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="तुमचे नाव"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                            <input
                              type="number"
                              name=""
                              id=""
                              placeholder="फोन #"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              maxlength="10"
                              pattern="\d{10}"
                            />
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="तुमचे राज्य"
                              value={state}
                              onChange={(e) => setState(e.target.value)}
                            />
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="तुमचे शहर"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                            />
                            <div
                              onClick={() => ContactFormMar()}
                              style={{ marginTop: "20px" }}
                            >
                              <ReactWhatsapp
                                number="7986996229"
                                message={dataDetail}
                                className="btn2 flex-center w-100"
                              >
                                आता पाठवा <BsArrowRight className="iconRight" />
                              </ReactWhatsapp>
                            </div>
                          </div>
                        </div>
                        <div className="flyerCard">
                          <div className="flyerBtn flex-center">
                            फ्लायर डाउनलोड करा <BsArrowRight className="icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </EquipmentGrids>
                ) : null}
              </>
            );
          })}
        </>
      ) : (
        <>
          {EquipmentDetailData.map((item) => {
            return (
              <>
                {id === item.id ? (
                  <EquipmentGrids>
                    <div className="grid">
                      <div className="card">
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                        <h2>Specifications</h2>
                        <img src={item.specImg} alt="" />
                        <h2>Customer reviews</h2>
                        <video src={item.video} controls></video>
                      </div>
                      <div className="sidebar">
                        <div className="form">
                          <h4>Product Enquiry</h4>
                          <div className="border"></div>
                          <div className="formContainer">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                            <input
                              type="number"
                              name=""
                              id=""
                              placeholder="Phone #"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              maxlength="10"
                              pattern="\d{10}"
                            />
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="Select State"
                              value={state}
                              onChange={(e) => setState(e.target.value)}
                            />
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="Select City"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                            />
                            <div
                              onClick={() => ContactFormEng()}
                              style={{ marginTop: "20px" }}
                            >
                              <ReactWhatsapp
                                number="7986996229"
                                message={dataDetail}
                                className="btn2 flex-center w-100"
                              >
                                Send Now <BsArrowRight className="iconRight" />
                              </ReactWhatsapp>
                            </div>
                          </div>
                        </div>
                        <div className="flyerCard">
                          <div className="flyerBtn flex-center">
                            DOWNLOAD FLYER <BsArrowRight className="icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </EquipmentGrids>
                ) : null}
              </>
            );
          })}
        </>
      )}
    </EquipmentMain>
  );
};

export default EquipmentDetail;

const EquipmentMain = styled.div`
  padding: 3.5rem calc(-625px + 50vw) 1.5rem;
`;

const EquipmentGrids = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 3.5fr 1.4fr;
    grid-gap: 2rem;
    position: relative;

    .border {
      background-color: #eee;
      height: 2px;
      width: 100%;
      margin-top: 25px;
    }
    .sidebar {
      position: sticky;
      top: 13%;
      left: 0%;
      height: 615px;
      padding: 30px;
      background-color: #fff;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
      border-radius: 5px;

      .flyerCard {
        margin-top: 1.4rem;

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
        background-color: #fff;
        padding: 0px;
        /* box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2); */

        h4 {
          font-size: 22px;
          margin-top: 0px !important;
        }
        .border {
          background-color: #eee;
          height: 2px;
          width: 100%;
          margin-top: 15px;
        }
        .formContainer {
          margin-top: 20px;
          input,
          select {
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
    }
    .card {
      padding: 30px;
      background-color: #fff;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
      border-radius: 5px;

      img {
        width: 100%;
        height: 700px;
      }
      video {
        width: 100%;
        height: 450px;
        border: 2px solid var(--green-color);
      }
      h3 {
        color: #222;
        font-size: 30px;
        margin-top: 18px;
      }
      h2 {
        color: #222;
        font-size: 25px;
        font-weight: 500;
        margin-top: 20px;
        margin-bottom: 15px;
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
          font-size: 25px;
        }
        h2 {
          font-size: 20px;
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
