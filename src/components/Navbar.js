import React from 'react';

function Navbar(props) {
    return (
        <div className='navigation'>
            <nav className='navbar'>
                <ul className='list__navbar'>
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