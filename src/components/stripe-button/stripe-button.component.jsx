import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51K7qbEAOGvD7JEjBL7YH2C7DZ1Fq9yQSGhiyPtxYJZ40BIQouCdMeDq9jqvkj2sifGfVCFoToANSVReTvtXUDp2y00fyFrJc1K';

	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	};

	return(
		<StripeCheckout
		label = 'Pay now'
		name = 'CRWN Clothing Ltd.'
		billingAddress 
		shippingAddress 
		image = '../../assets/paynow.svg'
		description = {`Your total price is: $${price}`}
		amount = {priceForStripe}
		panelLabel = 'Pay Now'
		token = {onToken}
		stripeKey = {publishableKey}
		allowRememberMe // "Remember Me" option (default true)
		/>

		);

};


export default StripeCheckoutButton;