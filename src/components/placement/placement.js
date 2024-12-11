import React from 'react'
import "./placement.css";
import img1 from "../../assets/placemts/Rectangle 29.png";
import img2 from "../../assets/placemts/Rectangle 30.png";
import img3 from "../../assets/placemts/Rectangle 31.png";
import img4 from "../../assets/placemts/Rectangle 32.png";
import img5 from "../../assets/placemts/Rectangle 33.png";
import img6 from "../../assets/placemts/Rectangle 34.png";

export default function placement() {
  return (
    <div class='placement'>
      <p className='head-p'>PLACEMENT</p>
      <hr class="separator" />
      <p class='intro-p1'> TOP PLACEMENTS</p>


      <div class="images-p1">
       <a href="https://www.adobe.com/in/" target="_blank"> <img src={img1}  alt="2"></img></a>
       <a href="https://www.microsoft.com/en-in" target="_blank"><img src={img2} alt="3"></img></a>
       <a href='https://careers.cognizant.com/india-en/'target="_blank"><img src={img3} alt="1"></img></a>
      </div>
      <div class="images-p2">
      <a href='https://www.zomato.com/' target="_blank"> <img src={img4} alt="4"></img></a>
      <a href='https://www.amazon.in/' target="_blank"> <img src={img5} alt="5"></img></a>
      <a href='https://www.google.com/about/careers/applications/' target="_blank"> <img src={img6} alt="6"></img></a>
      </div>
      <div class="intro-p2">
        <p>
          AND MANY MORE....
        </p>
      </div>
    </div>
  )
}
