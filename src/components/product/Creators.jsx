import React from "react";
import { faCheckCircle, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { myData } from "./controllers/data";

const Creators = () => {
  return (
    <>
      {myData.map((item, i) => (
        <li key={`seckey${i}`}>
          <div className="seller-card card">
            <figure
              className="card-banner"
              style={{ display: "flex", width: "65px" }}
            >
              <img
                src={item.avatarSrc}
                width="64"
                height="64"
                loading="lazy"
                alt="Steven Townsend profile"
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
            </figure>

            <div className="card-title-wrapper">
              <h3 className="title-sm">
                <Link to="/" className="link:hover">
                  {item.name}
                </Link>
              </h3>

              <p className="user-name label-md">@{item.name}</p>
            </div>

            <button
              className="btn-icon outline"
              aria-label="Hire Steven Townsend"
            >
              <FontAwesomeIcon
                icon={faUserPlus}
                name="person-add-outline"
                aria-hidden="true"
              ></FontAwesomeIcon>
            </button>
          </div>
        </li>
      ))}
    </>
  );
};

export default Creators;
