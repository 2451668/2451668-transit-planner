/* component for rendering the navigation bar for the app. will feature react router dom to link and handle routing across.*/

import React from 'react';
import { Link } from 'react-router-dom'; // import Link from react-router-dom to enable routing without page reloads.

// functional comp. for navbar
const Navbar = () => {
    return (
        <nav className="navbar">
            {/* className to reference CSS styles */}
            <ul className="nav-list">
                <li>
                    <Link to="/" className="nav-link">Available Routes</Link>
                    {/* linking home page */}
                </li>
                <li>
                    <Link to="/purchase" className="nav-link">Ticket Purchase</Link>
                    {/* linking ticket purchase page */}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar; // exporting navbar for use in other files

/* references and learning */

// https://reactrouter.com/en/main/components/link
// https://v5.reactrouter.com/web/guides/quick-start
// https://www.freecodecamp.org/news/react-router-tutorial/
// https://www.telerik.com/blogs/react-basics-how-to-use-react-router-v6
// https://www.w3schools.com/react/react_css.asp
// https://www.w3schools.com/react/react_router.asp
