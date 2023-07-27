import { useEffect, useRef, useState } from "react";
import coctail3 from "../img/coctail3.jpg";


export default function Section5() {

  return(
  
<section className="section-five">
    <div className="flex-group section-five-flex-group">
      <div>
        <img src={coctail3}>
      </img>
      </div>
      <div className="content-container">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="" className="learn-more-btn section-four-btn">Read More</a>
      </div>
    </div>
  </section>
    

  
  
  
  
    )
}


