import React from 'react';

const navigation = (props) => {
    return (
        <div>
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li style={{float:'right'}}><a href="#">About</a></li>
            </ul>
        </div>
    )
};

export default navigation; 