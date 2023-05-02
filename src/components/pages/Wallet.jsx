import React, { useEffect, useState } from "react";
import Navbar from "../common/navbar/Navbar";
import BackTopBtn from "../common/backToTop/BackTopBtn";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorOpen,
  faForward,
  faStopwatch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "../../App.css";
import rupee from "../../assets/images/rupee.png";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../common/Loading";
import { emptyCart } from "../../redux/slices/walletSlice";

const Wallet = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user] = useState(useSelector((state) => state.user));
  const [wallet, setWallet] = useState(useSelector((state) => state.wallet));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.email === null) {
      navigate("/login");
    }
    setIsLoading(false);
  }, [navigate, user, wallet]);

  // useEffect(() => {
  //   const setValues = () => {
  //     let total = 0;
  //     storeWallet.forEach((item) => {
  //       total += parseInt(item.price);
  //     });
  //     setWalletValue(total);
  //     setIsLoading(false);
  //   };
  //   setValues();
  // }, [dispatch, storeWallet]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <main>
        <article>
          <section className="section discover" style={{ minHeight: "100vh" }}>
            <div
              className="container"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2
                class="headline-md section-title text-center"
                id="discover-label"
                style={{ marginTop: "5rem", height: "0" }}
              >
                Items in Wallet
              </h2>

              {!isLoading ? (
                <ul class="grid-list" style={{ marginTop: "2rem" }}>
                  {/* {storeWallet.map((item) => (
                    <Link to={`/explore/${item.id}`}>
                      <li>
                        <div class="discover-card card">
                          <div
                            class="card-banner img-holder"
                            style={{ width: "500", height: "500" }}
                          >
                            <img
                              src={item.images[0]}
                              width="500"
                              height="500"
                              loading="lazy"
                              alt={item.title}
                              class="img-cover"
                            ></img>
                          </div>

                          <div class="card-profile">
                            <img
                              src={item.thumbnail}
                              width="32"
                              height="32"
                              loading="lazy"
                              alt={item.brand}
                              class="img"
                            ></img>
                            <h3 class="title-sm card-title link:hover">
                              {`${item.title}`}
                            </h3>
                          </div>
                          <br />
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

                                <span class="span">{item.price}</span>
                              </div>
                            </div>

                            <div>
                              <p>Discount</p>
                              <div class="card-price">
                                <span class="span">
                                  {item.discountPercentage} %
                                </span>
                              </div>
                            </div>
                          </div>
                          <br />
                          <div class="link:hover">{item.description}</div>
                        </div>
                      </li>
                    </Link>
                  ))} */}
                </ul>
              ) : (
                <>
                  <h1>Empty Wallet !</h1>
                  <Loading />
                </>
              )}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "8px",
                  fontSize: "23px",
                }}
              >
                {"Wallet value :    "}
                <img
                  alt="rupee"
                  src={rupee}
                  style={{
                    height: "19px",
                    width: "19px",
                    marginLeft: "6px",
                    marginRight: "6px",
                  }}
                ></img>
                {"walletValue"}
              </div>
              {!isLoading ? (
                <button
                  class="btn btn-primary"
                  onClick={() => {
                    dispatch(emptyCart());
                  }}
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    name="flash"
                    aria-hidden="true"
                  ></FontAwesomeIcon>

                  <span class="span">Empty Cart!</span>
                </button>
              ) : (
                ""
              )}
              <Link to="/explore" className="btn-link link:hover">
                <FontAwesomeIcon icon={faDoorOpen}></FontAwesomeIcon>
                <span class="span">Explore More</span>
                <FontAwesomeIcon
                  icon={faForward}
                  name="arrow-forward"
                  aria-hidden="true"
                ></FontAwesomeIcon>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <BackTopBtn />
    </>
  );
};

export default Wallet;
