import React, { useEffect, useState } from "react";
import { myData } from "../product/controllers/data";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BackTopBtn from "../common/backToTop/BackTopBtn";
import Navbar from "../common/navbar/Navbar";
import Collection from "../product/Collection";
import Loading from "../common/Loading";
import Card from "../common/Card";

const Profile = () => {
  const cart = useSelector((state) => state.wallet);
  const [isLoading, setIsLoading] = useState(false);
  const [user] = useState(useSelector((state) => state.user));
  const [wallet, setWallet] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setWallet(cart);
    setIsLoading(false);
  }, [cart]);

  // useEffect(() => {
  //   if (user.email === null) {
  //     navigate("/login");
  //   }
  //   setIsLoading(false);
  // }, [navigate, user]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <main>
        <article>
          <div className="container">
            <section
              className="section hero"
              style={{
                paddingTop: "10rem",
              }}
            >
              <div className="left">
                <h2
                  className="headline-md section-title text-center"
                  id="sellers-label"
                  style={{ marginTop: "0", height: "1.8rem" }}
                >
                  Profile
                </h2>

                <div
                  className="discover-card card"
                  style={{
                    width: "80vw",
                    minWidth: "330px",
                    minHeight: "370px",
                  }}
                >
                  <div
                    className="card-profile"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "16px",
                    }}
                  >
                    <img
                      src={myData[0].imgSrc}
                      width="300"
                      height="300"
                      loading="lazy"
                      alt="StreetBoy profile"
                      className="img"
                    ></img>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "100%",
                        height: "300px",
                      }}
                    >
                      <h3 className="title-sm card-title">DESCRIPTION</h3>
                      <div className="card-meta">User Details</div>
                    </div>
                  </div>
                  <div
                    className="link:hover title-sm card-title"
                    style={{
                      display: "flex",
                      paddingLeft: "10%",
                      marginRight: "auto",
                      fontSize: "20px",
                    }}
                  >
                    {user.username}
                    <br />
                    {user.email}
                  </div>
                </div>
              </div>

              <div className="right" style={{ width: "100%" }}>
                <h2
                  className="headline-md section-title text-center"
                  id="sellers-label"
                  style={{ marginTop: "1.8rem", height: "1.8rem" }}
                >
                  My Collection
                </h2>

                <ul className="grid-list">
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
              </div>
            </section>
          </div>
        </article>
      </main>
      <BackTopBtn />
    </>
  );
};

export default Profile;
