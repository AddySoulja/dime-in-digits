import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "./utils/registerUser";
import BackTopBtn from "../common/backToTop/BackTopBtn";
import Navbar from "../common/navbar/Navbar";
import Loading from "../common/Loading";

const userSchema = {
  username: "",
  email: "",
  password: "",
};
const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(userSchema);
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    // const profile = await registerUser(user);
    // if (profile.ok) {
    //   navigate("/login");
    // }
    // setIsLoading(false);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <main>
        <article>
          <section className="section sellers" aria-labelledby="sellers-label">
            <div className="container">
              <h2
                className="headline-md section-title text-center"
                id="sellers-label"
                style={{ marginTop: "5rem", height: "1.8rem" }}
              >
                Sign In
              </h2>
              <form className="sign-up-form" onSubmit={(e) => handleSubmit(e)}>
                <input
                  type="text"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  style={{
                    padding: "6px",
                    fontSize: "22px",
                    color: "#FFFFFF",
                  }}
                  placeholder="Enter Username"
                ></input>
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  style={{
                    padding: "6px",
                    fontSize: "22px",
                    color: "#FFFFFF",
                  }}
                  placeholder="Enter E-mail"
                ></input>
                <input
                  type="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  style={{
                    padding: "6px",
                    fontSize: "22px",
                    color: "#FFFFFF",
                  }}
                  placeholder="Enter Password"
                ></input>
                <button
                  type="submit"
                  className="btn"
                  style={{ marginLeft: "auto" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </article>
      </main>
      <BackTopBtn />
    </>
  );
};

export default Register;
