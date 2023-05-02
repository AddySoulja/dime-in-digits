import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const BackTopBtn = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const setScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", setScroll);
    return () => window.removeEventListener("scroll", setScroll);
  }, []);

  return (
    <>
      {" "}
      <a
        href="#top"
        className={
          scrollY > 1000
            ? "active back-to-top btn-icon"
            : "back-to-top btn-icon"
        }
        aria-label="back to top"
        data-back-top-btn
      >
        <FontAwesomeIcon icon={faArrowUp} name="arrow-up" aria-hidden="true" />
      </a>
      <div className="body-bg-shape"></div>
    </>
  );
};

export default BackTopBtn;
