/* component for showing info about only one transit route. Will feature on the Available Routes page to render one route as a card to be interacted with later.*/

import React from 'react';
import { Link } from 'react-router-dom';

const RouteCard = ({ route }) => {
    return (
        <div className="route-card">
            <h3>{route.name}</h3>
            <p>{route.description}</p>
            <Link to={`/route/${route.id}`}>View Details</Link>
        </div>
    );
}

export default RouteCard;
