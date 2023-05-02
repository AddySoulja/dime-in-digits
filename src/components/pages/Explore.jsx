import React from "react";
import Footer from "../common/footer/Footer";
import Navbar from "../common/navbar/Navbar";
import BackTopBtn from "../common/backToTop/BackTopBtn";
import Collection from "../product/Collection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

const Explore = () => {
  return (
    <>
      <Navbar />
      <main>
        <article>
          <section class="section discover" aria-labelledby="discover-label">
            <div class="container">
              <h2
                class="headline-md section-title text-center"
                id="discover-label"
                style={{ marginTop: "5rem", height: "1.8rem" }}
              >
                Discover Collection
              </h2>

              <ul class="grid-list">
                <Collection />
              </ul>

              <button class="btn-link link:hover">
                <span class="span">Explore More</span>
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
