import React, { useEffect, useState } from "react";
import rupee from "../../assets/images/rupee.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { storeProducts } from "../../redux/slices/productsSlice";
import Loading from "../common/Loading";

const Collection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const productsInStore = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = () => {
      fetch("http://localhost:8081/api/products")
        .then((res) => res.json())
        .then((data) => {
          if (data.ok) {
            dispatch(storeProducts([...data.data.products]));
            setIsLoading(false);
          }
        });
    };
    fetchProducts();
  }, [dispatch]);
  return isLoading ? (
    <Loading />
  ) : (
    productsInStore.products.map((item) => (
      <Link to={`/explore/${item.id}`}>
        <li key={item.id}>
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

              <button class="btn btn-primary">
                <FontAwesomeIcon
                  icon={faBolt}
                  name="flash"
                  aria-hidden="true"
                ></FontAwesomeIcon>
                <span class="span">Place Bid</span>
              </button>

              <div className="countdown">
                <FontAwesomeIcon
                  icon={faStopwatch}
                  name="time-outline"
                  aria-hidden="true"
                ></FontAwesomeIcon>
                <span class="span">{`${item.stock} remaining`}</span>
              </div>
            </div>

            <div class="card-profile">{item.brand}</div>

            <h3 class="title-sm card-title">
              <a href="/" class="link:hover">
                {item.title}
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

                  <span class="span">{item.price}.00/-</span>
                </div>
              </div>

              <div>
                <p>Discount</p>

                <div class="card-price">
                  <img
                    src={rupee}
                    width="16"
                    height="24"
                    loading="lazy"
                    alt="ethereum icon"
                  ></img>
                  <span class="span">{item.discountPercentage} %</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </Link>
    ))
  );
};

export default Collection;
