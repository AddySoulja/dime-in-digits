import React from "react";
import Navbar from "../common/navbar/Navbar";
import "../../App.css";
import BackTopBtn from "../common/backToTop/BackTopBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { myData } from "../product/data";
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
                class="headline-md section-title text-center"
                id="sellers-label"
                style={{ marginTop: "0", height: "1.8rem" }}
              >
                Create Collection
              </h2>

              <div
                class="discover-card card"
                style={{
                  width: "30%",
                  height: "40%",
                  minWidth: "330px",
                  minHeight: "370px",
                }}
              >
                <div class="card-banner img-holder">
                  <FontAwesomeIcon
                    icon={faAdd}
                    className="img-cover"
                    style={{
                      loading: "lazy",
                      alt: "upload image",
                    }}
                  ></FontAwesomeIcon>
                </div>

                <div class="card-profile">
                  <img
                    src={myData[5].avatarSrc}
                    width="32"
                    height="32"
                    loading="lazy"
                    alt="StreetBoy profile"
                    class="img"
                  ></img>

                  <a href="/" class="link:hover">
                    {/* @{onDisplay.name} */}
                    Username
                  </a>
                </div>

                <h3 class="title-sm card-title">
                  <a href="/" class="link:hover">
                    Title
                  </a>
                </h3>

                <div class="card-meta">
                  <div>
                    <p>Price</p>

                    <div class="card-price">
                      <img
                        src={rupee}
                        width="16"
                        height="24"
                        loading="lazy"
                        alt="ethereum icon"
                      ></img>

                      <span class="span">N/A</span>
                    </div>
                  </div>

                  <div>
                    <p>Highest Bid</p>

                    <div class="card-price">
                      <img
                        src={rupee}
                        width="16"
                        height="24"
                        loading="lazy"
                        alt="ethereum icon"
                      ></img>

                      <span class="span">N/A</span>
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
