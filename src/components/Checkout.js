import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { useState } from "react";

const CheckoutForm = () => {
  const { total_amount, clearCart } = useCartContext();
  const { myUser } = useUserContext();
  const [showPopup, setShowPopup] = useState(false);

  const handlePay = () => {
    // Dummy payment process
    setShowPopup(true);
  };

  const handleOk = () => {
    setShowPopup(false);
    // Redirect to home page
    window.location.href = "/";
    clearCart();
  };

  return (
    <div>
      <article>
        <h4>Hello, {myUser && myUser.name}</h4>
        <p>Your total is {formatPrice(total_amount)}</p>
        <p>Test Card Number: 4242 4242 4242 4242</p>
      </article>
      <form id="payment-form">
        <button type="button" onClick={handlePay}>
          <span id="button-text">Pay</span>
        </button>
      </form>
      {showPopup && (
        <Popup>
          <p>Payment success</p>
          <button onClick={handleOk}>OK</button>
        </Popup>
      )}
    </div>
  );
};

const PeoplesCheckout = () => {
  return (
    <Wrapper>
      <CheckoutForm />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  form {
    width: 30vw;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px;
  }
  input {
    border-radius: 6px;
    margin-bottom: 6px;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    font-size: 16px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  /* Buttons and links */

  button {
    background: #5469d4;
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 0 0 4px 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }
  button:hover {
    background: #27326a;
  }

  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
    }
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f0f0f0;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  text-align: center;

  p {
    font-size: 24px;
    margin-bottom: 20px;
  }

  button {
    background: #5469d4;
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 10px;
    border: 0;
    padding: 12px 24px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
  }
  button:hover {
    background: #27326a;
  }
`;

export default PeoplesCheckout;
