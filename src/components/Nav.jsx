import React from "react";
import logo from "../assets/images/logo.svg";
import Search from '../assets/images/search.svg'
import Store from '../assets/images/store.svg'

export default function Nav() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={logo} alt="Apple Logo" />
          </li>
          <li>
            <a className="link-styled">Store</a>
          </li>
          <li>
            <a className="link-styled">Mac</a>
          </li>
          <li>
            <a className="link-styled">Ipad</a>
          </li>
          <li>
            <a className="link-styled">Iphone</a>
          </li>
          <li>
            <a className="link-styled">IWatch</a>
          </li>
          <li>
            <a className="link-styled">Airpods</a>
          </li>
          <li>
            <a className="link-styled">TV & Home</a>
          </li>
          <li>
            <a className="link-styled">Enterainment</a>
          </li>
          <li>
            <a className="link-styled">Accessories</a>
          </li>
          <li>
            <a className="link-styled">Support</a>
          </li>
          <li>
           <img src={Search} alt="Search Icon"/>
          </li>
          <li>
           <img src={Store} alt="Store"/>
          </li>
        </ul>
      </div>
    </nav>
  );
}
