import React from "react";
import { StytchHeadlessClient } from "@stytch/vanilla-js/headless";
const Home = () => {
  const stytchClient = new StytchHeadlessClient(
    "public-token-test-f209ef9c-ab15-45d9-8503-53851cd6b6d1"
  );
  const logout = () => {
    stytchClient.session.revoke();
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
};

export default Home;
