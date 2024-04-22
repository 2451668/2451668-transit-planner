/* page to manage shopping cart of selected routes. Will feature functionality to view all added routes, change ticket amount, remove a route, and proceed to checkout. */

import React, { useContext } from 'react';
import { RouteContext } from '../context/RouteContext';
import { useNavigate } from 'react-router-dom'; 
import './TicketPurchase.css';  // will be using its own styling

const TicketPurchase = () => {
    const { selectedRoutes, removeRouteFromCart } = useContext(RouteContext); // accessing context for cart data and functions
    const navigate = useNavigate(); 

    // function to handle the checkout process
    const handleCheckout = () => {
        alert("Processing your purchase...");
        navigate('/confirmation');  // navigate to go to the confirmation page
        alert("Thank you for your purchase!");
    };

    return (
        <div>
            <h1>Your Cart</h1>
            <ul>
                {selectedRoutes.map((route, index) => (
                    <li key={index}>
                        {route.name} - ${route.price}
                        <button onClick={() => removeRouteFromCart(route.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            {selectedRoutes.length > 0 ? (
                <button onClick={handleCheckout}>Checkout</button>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}

export default TicketPurchase;

/* references and learning */

// https://www.w3schools.com/react/react_usecontext.asp
// https://www.w3schools.com/react/react_router.asp#gsc.tab=0&gsc.q=usestate
// https://commercejs.com/docs/community/creating-a-cart-with-react-js/
// https://commercejs.com/docs/guides/cart-react/
// https://www.openai.com
