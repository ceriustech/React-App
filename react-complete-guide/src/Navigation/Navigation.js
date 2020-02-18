import React from "react";

import "./Navigation.css";

const navigation = props => {
  return (
    <div>
      <nav className="stroke">
        <ul>
          <li>
            <a className="active" href="#">
              {props.navItem}
            </a>
          </li>
          <li>
            <a className="news" href="#">
              {props.navItem2}
            </a>
          </li>
          <li>
            <a className="contact" href="#">
              {props.navItem3}
            </a>
          </li>
          <li>
            <a className="about" href="#">
              {props.navItem4}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navigation;
