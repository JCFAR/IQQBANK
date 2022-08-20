import React, { useState } from "react";
import "../styles/Deposit.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import NavBarLoggedIn from "./NavBarLoggedIn";

import { useNavigate } from "react-router-dom";
//import SmallHead from './Components/smallHead'

const Deposit = () => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();

  async function updateBalance(event) {
    event.preventDefault();

    const req = await fetch("https://mit-jcfar.herokuapp.com/api/balance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        balance: amount,
      }),
    });

    const data = await req.json();
    console.log(data.status);
    if (data.status === "ok") {
      // setAmount(tempBalance)
      // setTempBalance(0)
      navigate("/api/profile");
    } else {
      alert("error");
      navigate("/failed");
    }
  }
  return (
    <div>
      <NavBarLoggedIn />
      <div className="bghdep">
        <h1>IQQ Bank</h1>
        <div className="leftc">
          <h3>Depositar</h3>
          <>
            <InputGroup className="mb-3">
              <InputGroup.Text>Monto a depositar</InputGroup.Text>
              <FormControl
                aria-label="Amount (to the nearest Rupee)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </InputGroup>

            <InputGroup>
              <InputGroup.Text>Mensaje</InputGroup.Text>
              <FormControl
                as="textarea"
                aria-label="With textarea"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </InputGroup>

            <Button
              className="mt-3"
              variant="primary"
              size="lg"
              onClick={updateBalance}
            >
              Depositar
            </Button>
          </>
        </div>
        <div className="rightc">
          <img
            src="https://i.pinimg.com/originals/1d/e3/9e/1de39ee6884ad24ebdf9779276249633.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Deposit;
