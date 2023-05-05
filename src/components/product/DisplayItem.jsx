import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faCartPlus,
  faForward,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/walletSlice";
import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";
import BackTopBtn from "../common/backToTop/BackTopBtn";
import Loading from "../common/Loading";
import Card from "../common/Card";

const DisplayItem = () => {
  const [isLoading, setIsLoading] = useState(true);
  const productsInStore = useSelector((state) => state.products);
  const [onDisplay, setOnDisplay] = useState({});
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    const item = productsInStore.products.find(
      (item) => item.id === parseInt(id)
    );
    if (item !== undefined) {
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
              className="discover-card card"
              style={{
                width: "30%",
                height: "40%",
              }}
            >
              <Card item={onDisplay} />
            </div>
            <br />
            <div className="input-bid-block">
              <div>
                <button
                  onClick={() => {
                    if (qty >= 10) {
                      setQty(10);
                      return;
                    }
                    setQty(qty + 1);
                  }}
                >
                  <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                </button>
                <div style={{ color: "white" }}>Qty: {qty}</div>
                <button
                  onClick={() => {
                    if (qty <= 1) {
                      setQty(1);
                      return;
                    }
                    setQty(qty - 1);
                  }}
                >
                  <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
                </button>
              </div>
              <button
                className="btn btn-primary"
                style={{ marginRight: "8px", width: "50%" }}
                onClick={() => {
                  dispatch(addToCart({ ...onDisplay, qty }));
                  navigate("/wallet");
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
              className="btn-link link:hover"
              onClick={() => navigate("/explore")}
            >
              <span className="span">Explore More</span>
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
