import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { StytchHeadlessClient } from "@stytch/vanilla-js/headless";
import { StytchProvider } from "@stytch/stytch-react";
import Home from "./components/Home";
import ForgotPassword from "./components/ForgotPassword";

const App = () => {
  const stytchClient = new StytchHeadlessClient(
    "public-token-test-f209ef9c-ab15-45d9-8503-53851cd6b6d1"
  );

  return (
    <Router>
      <StytchProvider stytch={stytchClient}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route />
        </Routes>
      </StytchProvider>
    </Router>
  );
};

export default App;
