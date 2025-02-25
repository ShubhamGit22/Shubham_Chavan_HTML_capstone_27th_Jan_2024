import React, { useContext } from 'react';
import "./CartItems.css"
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from "../content_files/cart_cross_icon.png"

const CartItems = () => {

    const{all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext)

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            <div>
                {
                    all_product.map((e)=>{
                        if(cartItems[e.id] > 0){
                            return <div>
                                        <div className="cartItems-format cartitems-format-main">
                                            <img className='cartitems-product-icon' src={e.image} alt="" />
                                            <p>{e.name}</p>
                                            <p>${e.new_price}</p>
                                            <button className='cartitems-quantity'> {cartItems[e.id]}</button>
                                            <p>${e.new_price * cartItems[e.id]}</p>
                                            <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                                        </div>
                                        <hr />
                                    </div>
                        }
                        else{
                            return null;
                        }
                    })
                }
                <div className="cartitems-down">
                    <div className="cartitems-total">
                        <h1>Cart Totals</h1>
                        <div>
                            <div className="cartitems-total-item">
                                <p>Subtotal </p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <p>Shipping Fees</p>
                                <p>free</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>
                        </div>
                        <button >Proceed To Checkout</button>
                    </div>
                    <div className="cartitems-promocode">
                        <p>If your have a promocode, Enter it here</p>
                        <div className="cartitems-promobox">
                            <input type="text" placeholder='promo code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
