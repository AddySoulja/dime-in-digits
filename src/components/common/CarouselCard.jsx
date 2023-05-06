import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const CarouselCard = ({ item }) => {
  return (
    <>
      {" "}
      <div className="collection-card card">
        <figure
          className="card-banner img-holder"
          style={{ width: "500", height: "500" }}
        >
          <img
            src={item.imgSrc}
            width="500"
            height="500"
            loading="lazy"
            alt="Digital Collection"
            className="img-cover"
          ></img>
        </figure>

        <div className="card-content">
          <div
            className="card-profile"
            style={{
              display: "flex",
            }}
          >
            <img
              src={item.avatarSrc}
              width="64"
              height="64"
              loading="lazy"
              alt="CutieGirl profile"
            ></img>
            <FontAwesomeIcon
              icon={faCheckCircle}
              name="checkmark-circle"
              aria-hidden="true"
              style={{
                marginTop: "auto",
                position: "relative",
                left: "-10px",
                color: "#059467",
              }}
            ></FontAwesomeIcon>
          </div>
          <h3 className="title-md card-title">
            <Link to="/" className="link:hover">
              {item.title}
            </Link>
          </h3>
          <p className="label-md card-author">
            by{" "}
            <Link to="/" className="link">
              {item.name}
            </Link>
          </p>
          <p className="card-text">25 Items</p>
        </div>
      </div>
    </>
  );
};

export default CarouselCard;
