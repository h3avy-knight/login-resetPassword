import { useStytch } from "@stytch/stytch-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Passwords } from "stytch/types/lib/passwords";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const stytchClient = useStytch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password, confirmPassword);
    if (password === confirmPassword) {
      stytchClient.passwords
        .strengthCheck({ email, password })
        .then((res) => {
          //   console.log("RES: ", res);
          if (res && res.valid_password !== true) {
            alert(
              res.feedback?.warning
                ? res.feedback?.warning
                : "Add another word or two. Uncommon words are better."
            );
          }
        })
        .catch((err) => {
          console.log("ERR: ", err);
        });

      stytchClient.passwords.create({
        email,
        password,
        session_duration_minutes: 60,
      });
    } else {
      alert("Password do not match!");
    }
    // strengthCheck({ email, password })
    //   .then((res) => {
    //     console.log("RES: ", res);
    //   })
    //   .catch((err) => {
    //     console.log("ERR: ", err);
    //   });
  };

  return (
    <div className="max-w-[428px] m-auto p-4">
      <div className="py-4">
        <div className="">
          <article>
            <div className="w-full mt-9">
              <h1 className="text-center my-5 text-6xl">Sign Up</h1>
              <form className="w-[90%] m-auto" onSubmit={handleSubmit}>
                <input
                  type="Email"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-5 rounded-full input-border border"
                />
                <input
                  type="text"
                  placeholder="Password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-5 mt-4 rounded-full input-border border"
                />
                <input
                  type="text"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full p-5 mt-4 rounded-full input-border border"
                />
                <button
                  type="submit"
                  className="w-full py-4 rounded-full mt-9 text-white font-bold"
                  style={{ backgroundColor: "#E70B89", borderRadius: "" }}
                >
                  Sign Up
                </button>
              </form>
              <div className="my-3">
                <div className="w-full flex flex-col items-center justify-center">
                  <p className="text-sm font-light my-5">
                    want to{" "}
                    <Link
                      to={"/login"}
                      style={{
                        color: "#E70B89",
                        cursor: "pointer",
                        marginLeft: "2px",
                      }}
                    >
                      {" "}
                      Login
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

export default SignUp;
