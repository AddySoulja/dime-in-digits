import React from "react";
import rupee from "../../assets/images/rupee.png";
const Card = ({ item }) => {
  return (
    <>
      <div className="discover-card card">
        <div
          className="card-banner img-holder"
          style={{ width: "500", height: "500" }}
        >
          <img
            src={item.image}
            width="500"
            height="500"
            loading="lazy"
            alt={item.title}
            className="img-cover"
          ></img>
        </div>
        <div className="card-profile">
          <img
            src={item.thumbnail}
            width="32"
            height="32"
            loading="lazy"
            alt={item.brand}
            className="img"
          ></img>
          <h3 className="title-sm card-title link:hover">{`${item.title}`}</h3>
        </div>
        <br />
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

              <span className="span">{item.price}</span>
            </div>
          </div>
          {item.qty !== undefined ? (
            <div>
              <p>Qty</p>
              <div className="card-price">
                <span className="span">{item.qty}</span>
              </div>
            </div>
          ) : (
            ""
          )}
          <div>
            <p>Rating</p>
            <div className="card-price">
              <span className="span">{item.rating.rate}/5.0</span>
            </div>
          </div>
        </div>
        <br />
        <div className="link:hover">{item.description}</div>
      </div>
    </>
  );
};

export default Card;
