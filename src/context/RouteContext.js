/* file will define the context for global state managing cross-app. Managing cart will be handled here with useContext.*/

import React, { createContext, useState } from 'react';

// creating context object; will be used to provide/consume state in other components
export const RouteContext = createContext();

// provider component encapsulates state logic and will provide in other comps
export const RouteProvider = ({ children }) => {
    // state for managing array of available routes
    const [routes, setRoutes] = useState([
        { id: 'route-1', title: 'Downtown Express', duration: '25 mins', stops: 5, price: 245.5, description: 'The quickest way to the heart of the city, with minimal stops.' },
        { id: 'route-2', title: 'Scenic Coastal Line', duration: '55 mins', stops: 8, price: 255.75, description: 'Enjoy breathtaking views of the coastline as you travel.' },
        { id: 'route-3', title: 'Suburban Shuttle', duration: '45 mins', stops: 6, price: 99.0, description: 'Connects the suburbs with downtown, running every half hour.' },
        { id: 'route-4', title: 'Night Owl', duration: '30 mins', stops: 4, price: 56.65, description: 'Operates after midnight, serving all major nightlife districts.' }
    ]);

    // state for managing selected routes 
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
// https://www.openai.com
/* https://borstch.com/blog/development/context-in-react-18-simplifying-data-flow-with-usecontext */
/* https://medium.com/@JeffyJeff/a-step-by-step-guide-to-managing-state-with-react-18-and-context-api-5962f90ef1d5#:~:text=The%20React%20Context%20API%20is,and%20keep%20track%20of%20changes. */