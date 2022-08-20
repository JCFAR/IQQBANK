import React from "react";
import "../styles/Transfer.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import NavBarLoggedIn from "./NavBarLoggedIn";

const Transfer = () => {
  const navigate = useNavigate();
  const [receiverEmail, setReceiverEmail] = useState();
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");

  async function transferMoney(event) {
    event.preventDefault();

    const req = await fetch("https://mit-jcfar.herokuapp.com/api/transaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        email: receiverEmail,
        balance: amount,
        desc: desc,
      }),
    });

    const data = await req.json();
    console.log(data);
    if (data.status === "ok") {
      navigate("/api/profile");
    }
  }

  return (
    <div>
      <NavBarLoggedIn />
      <div>
        <div className="bgh">
          <h1 className="transfer-heading">IQQ Bank</h1>
          <div className="leftc">
            <h3 className="transfer-title">Tranferencia</h3>
            <>
              {/* <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">@User</InputGroup.Text>
                                <FormControl
                                    placeholder="Your Bank Account No"
                                    aria-label="User Acc No"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup> */}

              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Correo de la cuenta a transferir"
                  value={receiverEmail}
                  onChange={(e) => setReceiverEmail(e.target.value)}
                  aria-label="Recipient's Acc No"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">@Correo</InputGroup.Text>
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>Monto</InputGroup.Text>
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
                onClick={transferMoney}
              >
                Transferir
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
    </div>
  );
};

export default Transfer;
