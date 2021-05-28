import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
    selectCartItems,
    selectCartTotal,
} from "../../redux/cart/cart.selectors";

// import "./checkout.styles.scss";

import {
    CheckoutPageContainer,
    CheckoutHeader,
    CheckoutHeaderBlock,
    CheckoutTotal,
    CheckoutButton,
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeader>
            <CheckoutHeaderBlock>
                <span>Product</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Description</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Quantity</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Price</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Remove</span>
            </CheckoutHeaderBlock>
        </CheckoutHeader>

        {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}

        <CheckoutTotal>
            <span>TOTAL: ${total}</span>
        </CheckoutTotal>
        <div className="test-warning">
            *Please use the following test credit card for payments
            <br />
            4242 4242 4242 4242 4242 - EXP: 01/22 - CVV: 123
        </div>
        <CheckoutButton price={total} />
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
