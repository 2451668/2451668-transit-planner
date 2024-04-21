/* will be for displaying confirmation promtps after an initial purchases log */

import React from 'react';
import './ConfirmationPage.css'; // will be using its own styling

const ConfirmationPage = () => {
    return (
        <div className="confirmation">
            <h1>Purchase Successful!</h1>
            <p>Thank you for your purchase. Your tickets will be sent to your email shortly.</p>
            <p>Have a great trip!</p>
        </div>
    );
}

export default ConfirmationPage;