import React from 'react';

import './Navigation.css';
const navigation = (props) => {
    return (
        <div>
            <ul>
                <li><a className="active" href="#home">{props.navItem}</a></li>
                <li><a href="#news">{props.navItem2}</a></li>
                <li><a href="#contact">{props.navItem3}</a></li>
                <li style={{float:'right'}}><a href="#">{props.navItem4}</a></li>
            </ul>
        </div>
    )
};

export default navigation; 