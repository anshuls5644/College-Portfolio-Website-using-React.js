import React from "react";
import "./authorities.css";
import Gov from "../../assets/Rectangle 8.png";
import proc from "../../assets/Rectangle 9.png";
import vc from "../../assets/Rectangle 10.png";

import regis from "../../assets/Rectangle 21.png";
import cfo from "../../assets/Rectangle 22.png";
import dean from "../../assets/Rectangle 23.png";
import hss from "../../assets/hss.png";
import cse from "../../assets/cse.png";

export default function authorities() {
  return (
    <div className="autho">
      <div className="head">
        <p>AUTHORITIES</p>
        <hr class="separator" />

        <div class="container-cc">

          <div class="card">
            <div class="front">
              <img src={Gov} alt="gov" class="card-img" />
            </div>
            <div class="back">
              <h5></h5>
              <p></p>
            </div>
          
          </div>
          



          <div class="card">
            <div class="front">
              <img src={proc} alt="gov" class="card-img" />
            </div>
            <div class="back">
              <p>The tracks lead nowhere, but you don't need to know that.</p>
            </div>
          </div>

          <div class="card">
            <div class="front">
              <img src={vc} alt="gov" class="card-img" />
            </div>
            <div class="back">
              <p>The tracks lead nowhere, but you don't need to know that.</p>
            </div>
          </div>

          <div class="card">
            <div class="front">
              <img src={regis} alt="gov" class="card-img" />
            </div>
            <div class="back">
              <p>The tracks lead nowhere, but you don't need to know that.</p>
            </div>
          </div>
        </div>


        <div class="container-cc">

          <div class="card">
            <div class="front">
              <img src={dean} alt="gov" class="card-img" />
            </div>
            <div class="back">
              <p>The tracks lead nowhere, but you don't need to know that.</p>
            </div>
          </div>

          <div class="card">
            <div class="front">
              <img src={cfo} alt="gov" class="card-img" />
            </div>
            <div class="back">
              <p>The tracks lead nowhere, but you don't need to know that.</p>
            </div>
          </div>

          <div class="card">
            <div class="front">
              <img src={cse} alt="gov" class="card-img" />
            </div>
            <div class="back">
              <p>The tracks lead nowhere, but you don't need to know that.</p>
            </div>
          </div>

          <div class="card">
            <div class="front">
              <img src={hss} alt="gov" class="card-img" />
            </div>
            <div class="back">
              <p>The tracks lead nowhere, but you don't need to know that.</p>
            </div>
          </div>
        </div>

      </div>
    </div>


    



  );
}
