import React from 'react';
import"./Homepage.css";
import sidenav from "./navigation/sidenav";
import timeline from "./timeline/timeline";

function Homepage() {
  return (
    <div className='homepage'>
        <div className="homepage__navbar">
        <sidenav />
        </div>
        <div className="homepage__timeline">
        <timeline />
        </div>
    </div>
  )
}

export default Homepage;