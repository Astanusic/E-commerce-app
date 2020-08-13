import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.style.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HFViMFeiG6NnZFpm0whYLbzuvteIZw4c7ZoYnvFe90rNvnhi4sIGKUIcpbQX3SdobygNGEq1hDmIUb7hlD3HyBb008zYG2q80";

  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
  };

  return (
    <StripeCheckout
      label="Shop now"
      name="E-commerce-app ltd"
      billingAdress
      shippingAdress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}€`}
      amount={priceForStripe}
      panelLabel="Shop Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="EUR"
    />
  );
};

export default StripeCheckoutButton;
