import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CartItem from "../CartItem/cart-item.component";

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, dispatch }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/checkout");
    dispatch(toggleCartHidden());
  };

  return (
    <CartDropdownContainer className="cart-dropdown">
      <CartItemsContainer className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer className="empty-message">
            Your cart is empty
          </EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton onClick={handleClick}>
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
