import React from 'react';
import './MainNav.css';

const MainNav = (props) => {
    let links = [
        { itemName: "About Me", section: "s-about" },
        { itemName: "Projects", section: "s-projects" },
        { itemName: "Contact Me", section: "s-contact" }
    ];
    return (
        <nav className="main-nav">
            <ul class="reset-list">
                {
                    links.map((item, idx) => {
                        return <li key = {idx}><a href={`#${item.section}`}>{item.itemName}</a></li>
                    })
                }
            </ul>
        </nav>
    )
}

export default MainNav;