import React from "react";

export default function SoundSection() {
  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">New Sound System</h2>
          <p className="text">Feel the base.</p>
          <span className="description">
            {" "}
            From $14.64/mo. for 24 m0. or $999 before trade-in
          </span>
          <ul className="links">
            <li>
                <button className="button">Buy</button>
            </li>
            <li className="link">Learn more</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
