import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { emptyCart } from "../../redux/slices/walletSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faDoorOpen,
  faForward,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import rupee from "../../assets/images/rupee.png";
import Loading from "../common/Loading";
import Navbar from "../common/navbar/Navbar";
import BackTopBtn from "../common/backToTop/BackTopBtn";
import { addToCart } from "../../redux/slices/walletSlice";
import Card from "../common/Card";

const Wallet = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user] = useState(useSelector((state) => state.user));
  const cart = useSelector((state) => state.wallet);
  const [wallet, setWallet] = useState([]);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const calcTotalAmt = useCallback(() => {
    return wallet.reduce(
      (prevVal, nextItem) => prevVal + nextItem.price * nextItem.qty,
      0
    );
  }, [wallet]);

  useEffect(() => {
    setIsLoading(true);
    setWallet(cart);
    setAmount(calcTotalAmt().toFixed(2));
    setIsLoading(false);
  }, [cart, calcTotalAmt]);

  // useEffect(() => {
  //   if (user.email === null) {
  //     navigate("/login");
  //   }
  //   setIsLoading(false);
  // }, [navigate, user, wallet]);

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
                className="headline-md section-title text-center"
                id="discover-label"
                style={{ marginTop: "5rem", height: "0" }}
              >
                Items in Wallet
              </h2>

              {wallet.length > 0 ? (
                <>
                  <ul className="grid-list" style={{ marginTop: "2rem" }}>
                    {wallet.map((item) => (
                      <Link
                        to={`/explore/${item.id}`}
                        key={`${Math.random() * 10}${item.id}`}
                      >
                        <li key={`itemb${item.id}`}>
                          <Card item={item} />
                        </li>
                      </Link>
                    ))}
                  </ul>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "8px",
                      fontSize: "23px",
                    }}
                  >
                    {"Amount :    "}
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
                    {amount}
                  </div>
                  <br />
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      dispatch(emptyCart());
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      name="flash"
                      aria-hidden="true"
                    ></FontAwesomeIcon>

                    <span className="span">Empty Cart!</span>
                  </button>
                  <br />
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      // dispatch action for payment process
                      window.alert("Proceeding to buy items in cart!");
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      name="flash"
                      aria-hidden="true"
                    ></FontAwesomeIcon>

                    <span className="span">Proceed to checkout!</span>
                  </button>
                </>
              ) : (
                <>
                  <h1>Empty Wallet !</h1>
                  {/* <Loading /> */}
                  <h2>Explore items and add to cart!</h2>
                </>
              )}
              <Link to="/explore" className="btn-link link:hover">
                <FontAwesomeIcon icon={faDoorOpen}></FontAwesomeIcon>
                <span className="span">Explore More</span>
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
