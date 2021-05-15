import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        "pk_test_51IrPoKCUMmW3LesR1xRpafwJgTW7Qfc1OT1MlKWZl2kAU2T4UNDvVrnKXSW0e0WS6BFeQmPGFSv7Rb0w6AWRIVLX001Vrhllkq";

    const onToken = (token) => {
        console.log(token);
        alert("Payment Successfull");
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
