/* component for showing detailed info about one route. useParams hook to fetch route ID for any given route. Will feature an option to add to cart.*/

import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RouteContext } from '../context/RouteContext';

const RouteInfo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { routes } = useContext(RouteContext); // uses shared data

    const route = routes.find(r => r.id.toString() === id); // finds route by ID to show whichever info

    return (
        <div className="route-info">
            <h1>{route.name}</h1>
            <p>{route.detailed}</p>
            <p>Ticket Price: {route.price}</p>
            <button onClick={() => navigate('/purchase')}>Purchase Ticket</button>
            <button onClick={() => navigate('/')}>Back to Routes</button>
        </div>
    );
}

export default RouteInfo;
