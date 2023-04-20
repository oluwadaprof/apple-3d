import React from "react";
import IPhone from "../assets/images/iphone-14.jpg";
import holdingIphone from '../assets/images/iphone-hand.png'

export default function Jumbotron() {
    const handleLearnMore = ()=>{
        const element = document.querySelector(".sound-section")
        window.scrollTo({
            top: element.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        })
    }
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New </h2>
      <img className="logo" src={IPhone} alt="iPhone 14 pro" />
      <p className="text">Big and bigger</p>
      <span className="description">
        From $14.64/mo. for 24 m0. or $999 before trade-in
      </span>
      <ul className="links">
        <li>
            <button className="button" type="">Buy</button>
        </li>
        <li>
            <a className="link" onClick={handleLearnMore} >Learn more</a>
        </li>
      </ul>
      <img className="iphone-img" src={holdingIphone} alt="Iphone"/>
    </div>
  );
}
