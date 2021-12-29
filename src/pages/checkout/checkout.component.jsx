import React from 'react';
import{ createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';


import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
		<div className='checkout-page'>
			<div className='checkout-header'>
					<div className='header-block'>	
						<span> Product </span>
					</div>

					<div className='header-block'>
						<span> Description </span>
					</div>

					<div className='header-block'>
						<span> Quantity </span>
					</div>

					<div className='header-block'>
						<span> Price </span>
					</div>

					<div className='header-block'>
						<span> Remove </span>
					</div>

			</div>
			{
				cartItems.map(cartItem => 
					<CheckoutItem cartItem={cartItem} key={cartItem.id} />)
			}

			<div className='total'>
				<span> Total: ${total} </span>
				<StripeCheckoutButton price = {total} />
			</div>
		</div>
	);

const mapStateToProps = createStructuredSelector({
		cartItems: selectCartItems,
		total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);