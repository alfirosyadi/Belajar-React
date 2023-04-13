import React from 'react';

function Navbar(props) {
    return (
        <div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>{props.test}</li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;