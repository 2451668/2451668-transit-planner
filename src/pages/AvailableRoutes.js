/* component for showing all available transit routes that can be accessed. Each route rendered will be from the RouteCard component; interacting with it will lead to the Route Information page thereafter.*/

import React, { useContext } from 'react';
import { RouteContext } from '../context/RouteContext';
import { Link } from 'react-router-dom';
import './AvailableRoutes.css';  // will be using its own styling

const AvailableRoutes = () => {
    const { routes } = useContext(RouteContext); // uses shared route data from context

    return (
        <div>
            <h1>Available Routes</h1>
            <ul>
                {routes.map(route => (
                    <li key={route.id}>
                        <Link to={`/route/${route.id}`}>{route.name}: {route.description}</Link>
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