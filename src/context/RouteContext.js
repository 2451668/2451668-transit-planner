/* file will define the context for global state managing cross-app. Managing cart will be handled here with useContext.*/

import React, { createContext, useState } from 'react';

// creating context object; will be used to provide/consume state in other components
export const RouteContext = createContext();

// provider component encapsulates state logic and will provide in other comps
export const RouteProvider = ({ children }) => {
  const [routes, setRoutes] = useState([]); // manage array of available routes
  const [selectedRoutes, setSelectedRoutes] = useState([]); // manage selected routes

  const addRouteToCart = (route) => { // add routes to cart
    setSelectedRoutes([...selectedRoutes, route]);
  };

  const removeRouteFromCart = (routeId) => { // remove a route from cart ( based on ID)
    setSelectedRoutes(selectedRoutes.filter(r => r.id !== routeId));
  };

  return ( // provider passes these states down to the children 
    <RouteContext.Provider value={{ routes, setRoutes, selectedRoutes, addRouteToCart, removeRouteFromCart }}>
      {children}
    </RouteContext.Provider>
  );
};
// exporting the provider and context can be used in other comps cross-app

/* references and learning */

// https://react.dev/reference/react/useContext
// https://react.dev/reference/react/createContext
// https://react.dev/reference/react/useState
/* https://borstch.com/blog/development/context-in-react-18-simplifying-data-flow-with-usecontext */
/* https://medium.com/@JeffyJeff/a-step-by-step-guide-to-managing-state-with-react-18-and-context-api-5962f90ef1d5#:~:text=The%20React%20Context%20API%20is,and%20keep%20track%20of%20changes. */