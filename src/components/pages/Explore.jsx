import React from "react";
import Footer from "../common/footer/Footer";
import Navbar from "../common/navbar/Navbar";
import BackTopBtn from "../common/backToTop/BackTopBtn";
import Collection from "../product/Collection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";

const Explore = () => {
  return (
    <>
      <Navbar />
      <main>
        <article>
          <section
            className="section discover"
            aria-labelledby="discover-label"
          >
            <div className="container">
              <h2
                className="headline-md section-title text-center"
                id="discover-label"
                style={{ marginTop: "5rem", height: "1.8rem" }}
              >
                Discover Collection
              </h2>

              <ul className="grid-list">
                <Collection />
              </ul>

              <button className="btn-link link:hover">
                <span className="span">Explore More</span>
                <FontAwesomeIcon
                  icon={faForward}
                  name="arrow-forward"
                  aria-hidden="true"
                ></FontAwesomeIcon>
              </button>
            </div>
          </section>
        </article>
      </main>
      <Footer />
      <BackTopBtn />
    </>
  );
};

export default Explore;
