import React, { useCallback, useEffect, useState } from "react";
import {
  faBackward,
  faCheckCircle,
  faForward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { myData } from "./data";
import { Link, useNavigate } from "react-router-dom";
const Collection = () => {
  const navigate = useNavigate();
  const [slidesOnDisplay, setSlidesOnDisplay] = useState([]);
  const [currSlidePos, setCurrSlidePos] = useState({
    start: 0,
    end: 4,
  });
  const [sliderStyle, setSliderStyle] = useState({
    transform: "",
  });
  const setCurrentSlide = useCallback(() => {
    if (currSlidePos.start > myData.length - 1) {
      setCurrSlidePos({ start: 0, end: 4 });
    } else if (currSlidePos.start < 0) {
      setCurrSlidePos({ start: myData.length - 4, end: myData.length });
    }
    let arr = myData.slice(currSlidePos.start, currSlidePos.end);
    setSlidesOnDisplay(arr);
  }, [currSlidePos]);

  useEffect(() => {
    setCurrentSlide();
  }, [setCurrentSlide]);

  // const moveSliderItem = () => {
  //   setSliderStyle({ transform: `translateX(-${300}px)` });
  // };
  // useEffect(() => {
  //   moveSliderItem();
  // });
  const slideNext = () => {
    setCurrSlidePos({
      start: currSlidePos.start + 1,
      end: currSlidePos.end + 1,
    });
    // moveSliderItem();
  };
  const slidePrev = () => {
    setCurrSlidePos({
      start: currSlidePos.start - 1,
      end: currSlidePos.end - 1,
    });
    // moveSliderItem();
  };

  // useEffect(() => {
  //   window.addEventListener("slide", moveSliderItem);
  //   return window.removeEventListener("slide", moveSliderItem);
  // }, [moveSliderItem]);

  // const sliderInterval = () => {
  //   setTimeout(slideNext, 3000);
  // };

  // // useEffect(() => {
  // //   sliderInterval();
  // //   return clearTimeout(sliderInterval);
  // // });

  // useEffect(() => setInterval(console.log("timer"), 3500), []);

  // setInterval(() => slideNext(), 3000);
  const displayItem = (id) => {
    navigate(`/explore/${id}`);
  };
  return (
    <>
      <div className="slider" data-slider>
        <ul
          className="slider-container"
          style={sliderStyle}
          data-slider-container
        >
          {slidesOnDisplay.map((item) => (
            <li
              className="slider-item"
              key={item.key}
              onClick={() => displayItem(item.key)}
            >
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
            </li>
          ))}
        </ul>

        <button
          className="slider-btn prev"
          aria-label="Slide to previous item"
          data-slider-prev
          onClick={slidePrev}
        >
          <FontAwesomeIcon
            icon={faBackward}
            style={{ color: "#FFFFFF" }}
            name="chevron-back-sharp"
            aria-hidden="true"
          ></FontAwesomeIcon>
        </button>

        <button
          className="slider-btn next"
          aria-label="Slide to next item"
          data-slider-next
          onClick={slideNext}
        >
          <FontAwesomeIcon
            icon={faForward}
            style={{ color: "#FFFFFF" }}
            name="chevron-forward-sharp"
            aria-hidden="true"
          ></FontAwesomeIcon>
        </button>
      </div>
    </>
  );
};

export default Collection;
