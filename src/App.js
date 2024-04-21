// 2451668 - Thabang Maleka - WSOA4175A -  transit manager application

/* disclaimer - as per the brief I'll feature some commentary throughout the build. It might get a little wordy or redundant at times, but I feel for my own sake I'll need the context and annotations - to really understand what it is I'm doing. I've seen the CBO and I think I'll be revisiting this build a lot, it being our first proper submission and all. I understand if this leads to penalties in marking.  */


/* main component and root of application. Will integrate React router for navigation between the pages and also setup context provider to manage states globally cross-app */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // import comps. from react-router-dom
import AvailableRoutes from './pages/AvailableRoutes'; 
import RouteInfo from './pages/RouteInfo'; 
import TicketPurchase from './pages/TicketPurchase'; 
import { RouteProvider } from './context/RouteContext'; 
import Navbar from './components/Navbar'; 

function App() {
    return (
        <Router>
            {/* router comp.to handle routing logic */}
            <RouteProvider>
                {/* context provider to pass down the routes state */}
                <Navbar />
                {/* persistent navbar */}
                <div className="container">
                    <Routes>
                        {/* routes comp. to define multiple route components */}
                        <Route path="/" element={<AvailableRoutes />} />
                        {/* route comp. for available routes page; enders when at root url */}
                        <Route path="/route/:id" element={<RouteInfo />} />
                        {/* route comp. for route info page; captures route ID from the url */}
                        <Route path="/purchase" element={<TicketPurchase />} />
                        {/* route comp. for ticket Purchase page; renders when navigating to purchase */}
                    </Routes>
                </div>
            </RouteProvider>
        </Router>
    );
}

export default App; // exported for use in index.js

/* references and learning */

// https://www.w3schools.com/react/react_router.asp
// https://www.geeksforgeeks.org/reactjs-router/
// https://luqmanshaban.medium.com/react-router-a-step-by-step-guide-4c5ec964d2e9
// https://hygraph.com/blog/routing-in-react