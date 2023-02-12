import { useStytch } from "@stytch/stytch-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetPasswordByEmail = () => {
    stytchClient.passwords?.resetByEmailStart({
      email,
    });
  };

  const navigate = useNavigate();

  const stytchClient = useStytch();
  const login = (e) => {
    e.preventDefault();
    stytchClient.passwords
      .authenticate({
        email,
        password,
        session_duration_minutes: 60,
      })
      .then((res) => {
        console.log("LOGIN RES", res);
        if (res && res.status !== 200) {
          return navigate("/home");
        } else {
          alert("Email or Password is not Correct!");
        }
      });
  };
  return (
    <div className="max-w-[428px] m-auto p-4">
      <div className="py-4">
        <div className="">
          <article>
            <div className="w-full mt-9">
              <h1 className="text-center my-5 text-6xl">Login</h1>
              <form className="w-[90%] m-auto" onSubmit={login}>
                <input
                  type="email"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-5 rounded-full input-border border"
                />
                <input
                  type="text"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-5 mt-4 rounded-full input-border border"
                />
                <button
                  className="w-full py-4 rounded-full mt-9 text-white font-bold"
                  style={{ backgroundColor: "#E70B89", borderRadius: "" }}
                  type="submit"
                >
                  Login
                </button>

                <Link
                  className="text-sm font-light float-right my-3"
                  to="/forgot-password"
                  style={{ color: "#E70B89", opacity: 1, cursor: "pointer" }}
                >
                  Forgot Password?
                </Link>
              </form>

              <div className="my-3">
                <div className="w-full flex flex-col items-center justify-center">
                  <p className="text-sm font-light my-5">
                    Don’t have an account?
                    <Link
                      to={"/signup"}
                      style={{
                        color: "#E70B89",
                        cursor: "pointer",
                        marginLeft: "2px",
                      }}
                    >
                      {" "}
                      Register now!
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Login;
