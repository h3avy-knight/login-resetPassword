import { useStytch } from "@stytch/stytch-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const stytchClient = useState();

  const resetPassword = (e) => {
    e.preventDefault();
    stytchClient.passwords.resetByEmailStart({
      email,
    });
  };

  return (
    <div className="max-w-[428px] m-auto p-4">
      <div className="py-4">
        <div className="">
          <article>
            <div className="w-full mt-9">
              {/* <h1 className="text-center my-5 text-6xl"></h1> */}
              <form className="w-[90%] m-auto" onSubmit={resetPassword}>
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-5 rounded-full input-border border"
                />
                <button
                  className="w-full py-4 rounded-full mt-9 text-white font-bold"
                  style={{ backgroundColor: "#E70B89", borderRadius: "" }}
                  type="submit"
                >
                  Continue
                </button>
              </form>
              <Link
                className="flex items-center justify-center mt-32 text-3xl text-pink-400"
                to="/login"
              >
                Login
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
