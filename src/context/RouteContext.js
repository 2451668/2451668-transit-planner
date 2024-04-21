/* file will define the context for global state managing cross-app. Managing cart will be handled here with useContext.*/

import React, { createContext, useState } from 'react';

// creating context object; will be used to provide/consume state in other components
export const RouteContext = createContext();

// provider component encapsulates state logic and will provide in other comps
export const RouteProvider = ({ children }) => {
    // state for managing array of available routes
    const [routes, setRoutes] = useState([
        { id: 1, name: 'Route 1', description: 'This is the description for Route 1.', detailed: 'Detailed description for Route 1', price: '$20' },
        { id: 2, name: 'Route 2', description: 'This is the description for Route 2.', detailed: 'Detailed description for Route 2', price: '$25' },
        { id: 3, name: 'Route 3', description: 'This is the description for Route 3.', detailed: 'Detailed description for Route 3', price: '$15' }
    ]);

    // State for managing the routes selected by the user
    const [selectedRoutes, setSelectedRoutes] = useState([]);

    // function to add a route to cart
    const addRouteToCart = (route) => {
        setSelectedRoutes([...selectedRoutes, route]);
    };

    // function to remove a route from cart based on ID
    const removeRouteFromCart = (routeId) => {
        setSelectedRoutes(selectedRoutes.filter(route => route.id !== routeId));
    };

    // provider pass down states to children
    return (
        <RouteContext.Provider value={{ routes, setRoutes, selectedRoutes, addRouteToCart, removeRouteFromCart }}>
            {children}
        </RouteContext.Provider>
    );
};
// exporting the provider and context to be used in other comps cross-app

/* references and learning */

// https://react.dev/reference/react/useContext
// https://react.dev/reference/react/createContext
// https://react.dev/reference/react/useState
/* https://borstch.com/blog/development/context-in-react-18-simplifying-data-flow-with-usecontext */
/* https://medium.com/@JeffyJeff/a-step-by-step-guide-to-managing-state-with-react-18-and-context-api-5962f90ef1d5#:~:text=The%20React%20Context%20API%20is,and%20keep%20track%20of%20changes. */