import React, { useEffect, useState } from "react";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { myData } from "./controllers/data";
import { useNavigate } from "react-router-dom";
import CarouselCard from "../common/CarouselCard";

const Carousel = () => {
  const navigate = useNavigate();
  const [slidesOnDisplay, setSlidesOnDisplay] = useState([]);
  const [win, setWin] = useState({ s: 0, e: 3 });

  useEffect(() => {
    const moveSlides = () => {
      if (win.s === -1) {
        setWin({ s: myData.length - 4, e: myData.length - 1 });
      }
      if (win.e === myData.length) {
        setWin({ s: 0, e: 3 });
      }
      setSlidesOnDisplay(myData.filter((_, i) => i >= win.s && i <= win.e));
    };
    moveSlides();
  }, [win]);

  // useEffect(() => {
  //   window.addEventListener("slide", moveSliderItem);
  //   return window.removeEventListener("slide", moveSliderItem);
  // }, [moveSliderItem]);
  const displayItem = (id) => {
    navigate(`/explore/${id}`);
  };
  return (
    <>
      <div className="slider">
        <ul className="slider-container">
          {slidesOnDisplay.map((item) => (
            <li
              className="slider-item"
              key={item.key}
              onClick={() => displayItem(item.key)}
            >
              <CarouselCard item={item} />
            </li>
          ))}
        </ul>
        <button
          className="slider-btn prev"
          onClick={() => setWin({ s: win.s - 1, e: win.e - 1 })}
        >
          <FontAwesomeIcon
            icon={faBackward}
            style={{ color: "#FFFFFF" }}
          ></FontAwesomeIcon>
        </button>
        <button
          className="slider-btn next"
          onClick={() => setWin({ s: win.s + 1, e: win.e + 1 })}
        >
          <FontAwesomeIcon
            icon={faForward}
            style={{ color: "#FFFFFF" }}
          ></FontAwesomeIcon>
        </button>
      </div>
    </>
  );
};

export default Carousel;
