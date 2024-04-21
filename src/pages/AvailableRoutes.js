/* component for showing all available transit routes that can be accessed. Each route rendered will be from the RouteCard component; interacting with it will lead to the Route Information page thereafter.*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AvailableRoutes.css';  // will be using its own styling

const AvailableRoutes = () => {
    // mock data for routes
    const [routes] = useState([
        { id: 1, name: 'Route 1', description: 'This is the description for Route 1.' },
        { id: 2, name: 'Route 2', description: 'This is the description for Route 2.' },
        { id: 3, name: 'Route 3', description: 'This is the description for Route 3.' }
    ]);

    return (
        <div>
            <h1>Available Routes</h1>
            <ul>
                {routes.map(route => (
                    <li key={route.id}>
                        <Link to={`/route/${route.id}`}>
                            {route.name}: {route.description}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AvailableRoutes;

/* references and learning */


// https://www.w3schools.com/react/react_usestate.asp
// https://www.w3schools.com/react/react_css.asp