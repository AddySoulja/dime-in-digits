import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { myData } from "../product/controllers/data";
import Navbar from "../common/navbar/Navbar";
import BackTopBtn from "../common/backToTop/BackTopBtn";
import rupee from "../../assets/images/rupee.png";

const Create = () => {
  return (
    <>
      <Navbar />
      <main>
        <article>
          <div className="container">
            <section
              className="section hero"
              style={{
                paddingTop: "10rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2
                className="headline-md section-title text-center"
                id="sellers-label"
                style={{ marginTop: "0", height: "1.8rem" }}
              >
                Create Collection
              </h2>

              <div
                className="discover-card card"
                style={{
                  width: "30%",
                  height: "40%",
                  minWidth: "330px",
                  minHeight: "370px",
                }}
              >
                <div className="card-banner img-holder">
                  <FontAwesomeIcon
                    icon={faAdd}
                    className="img-cover"
                    style={{
                      loading: "lazy",
                      alt: "upload image",
                    }}
                  ></FontAwesomeIcon>
                </div>

                <div className="card-profile">
                  <img
                    src={myData[5].avatarSrc}
                    width="32"
                    height="32"
                    loading="lazy"
                    alt="StreetBoy profile"
                    className="img"
                  ></img>

                  <a href="/" className="link:hover">
                    {/* @{onDisplay.name} */}
                    Username
                  </a>
                </div>

                <h3 className="title-sm card-title">
                  <a href="/" className="link:hover">
                    Title
                  </a>
                </h3>

                <div className="card-meta">
                  <div>
                    <p>Price</p>

                    <div className="card-price">
                      <img
                        src={rupee}
                        width="16"
                        height="24"
                        loading="lazy"
                        alt="ethereum icon"
                      ></img>

                      <span className="span">N/A</span>
                    </div>
                  </div>

                  <div>
                    <p>Highest Bid</p>

                    <div className="card-price">
                      <img
                        src={rupee}
                        width="16"
                        height="24"
                        loading="lazy"
                        alt="ethereum icon"
                      ></img>

                      <span className="span">N/A</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>
      </main>
      <BackTopBtn />
    </>
  );
};

export default Create;
