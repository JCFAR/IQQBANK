import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Deposit from "./components/Deposit";
import TransactionHistory from "./components/TransactionHistory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileNew from "./components/ProfileNew";
import Transfer from "./components/Transfer";
import Success from "./components/Success";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/api/register" element={<Register />} />
          <Route exact path="/api/login" element={<Login />} />
          <Route exact path="/api/profile" element={<ProfileNew />} />
          <Route exact path="/api/transfer" element={<Transfer />} />
          <Route
            exact
            path="/api/transactions"
            element={<TransactionHistory />}
          />
          <Route exact path="/api/deposit" element={<Deposit />} />
          <Route exact path="/api/succes" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
