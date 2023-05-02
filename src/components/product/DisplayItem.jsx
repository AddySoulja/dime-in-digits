import React, { useEffect, useState } from "react";
import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";
import BackTopBtn from "../common/backToTop/BackTopBtn";
import rupee from "../../assets/images/rupee.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faForward } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../common/Loading";
import { addToCart } from "../../redux/slices/walletSlice";

const DisplayItem = () => {
  const [isLoading, setIsLoading] = useState(true);
  const productsInStore = useSelector((state) => state.products);
  const [onDisplay, setOnDisplay] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    const item = productsInStore.products.find(
      (item) => item.id === parseInt(id)
    );
    if (item !== undefined) {
      console.log("sel item: ", item);
      setOnDisplay(item);
      setIsLoading(false);
    }
  }, [dispatch, id, productsInStore]);
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <main>
        <article>
          <section
            className="section hero"
            style={{
              paddingTop: "13rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ paddingBottom: "3rem", fontSize: "24px" }}>
              {onDisplay.title}
            </h1>
            <div
              class="discover-card card"
              style={{
                width: "30%",
                height: "40%",
              }}
            >
              <div
                class="card-banner img-holder"
                style={{ width: "500", height: "500" }}
              >
                <img
                  src={onDisplay.images[0]}
                  width="500"
                  height="500"
                  loading="lazy"
                  alt={onDisplay.title}
                  class="img-cover"
                ></img>
              </div>

              <div class="card-profile">
                <img
                  src={onDisplay.thumbnail}
                  width="32"
                  height="32"
                  loading="lazy"
                  alt={onDisplay.brand}
                  class="img"
                ></img>
                <h3 class="title-sm card-title link:hover">
                  {`${onDisplay.title}`}
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

                    <span class="span">{onDisplay.price}</span>
                  </div>
                </div>

                <div>
                  <p>Discount</p>
                  <div class="card-price">
                    <span class="span">{onDisplay.discountPercentage} %</span>
                  </div>
                </div>
              </div>
              <br />
              <div class="link:hover">{onDisplay.description}</div>
            </div>
            <div className="input-bid-block">
              <progress
                max="5"
                value={onDisplay.rating}
                style={{ width: "60%", height: "8vh" }}
              ></progress>
              <button
                class="btn btn-primary"
                style={{ marginRight: "8px", width: "50%" }}
                onClick={() => {
                  dispatch(addToCart({ ...onDisplay }));
                  // dispatch(itemAdded());
                  // dispatch({ type: "item-added" });
                }}
              >
                <FontAwesomeIcon
                  icon={faCartPlus}
                  name="flash"
                  aria-hidden="true"
                ></FontAwesomeIcon>
                Buy now
              </button>
            </div>
            <br />
            <button
              class="btn-link link:hover"
              onClick={() => navigate("/explore")}
            >
              <span class="span">Explore More</span>
              <FontAwesomeIcon
                icon={faForward}
                name="arrow-forward"
                aria-hidden="true"
              ></FontAwesomeIcon>
            </button>
          </section>
        </article>
      </main>
      <Footer />
      <BackTopBtn />
    </>
  );
};

export default DisplayItem;
