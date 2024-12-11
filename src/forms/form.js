import React from 'react'
import "./form.css";

export default function form() {
  return (
    <div>
        <div class="name">
    <h1> jaypee university of information technology</h1>

   </div>

<form class="form" action="https://formsubmit.co/anshuls5644@gmail.com" method="POST">


  <u><h3>Admission Form</h3></u>

  <div class="cource-photo">

  <div class="cource-branch">
    <p class="p-1">SELECT COURCE and Branch</p>
  

  <div class="dropdown">
    <select class="dropdownMenu">
        <option value="" disabled selected>Select Cource</option>
        <option value="option1"> Bachelor of Technology (B.Tech)</option>
        <option value="option2">Masters of Technology (M.Tech)</option>
        <option value="option3">Doctor of Philosophy (P.hd)</option>
    </select>
  </div>

    <div class="dropdown">
      <select class="dropdownMenu">
          <option value="" disabled selected>Select Branch</option>
          <option value="option1">Computer Science</option>
          <option value="option2">Information Technology</option>
          <option value="option3">Civil Engineering</option>
          <option value="option3">Bio Informatics</option>
          <option value="option3">Bio Technology</option>
      </select>
</div>


   </div>
   <div class="photo-w">
    <div class="photo-inst">
    <div class="photo-choose">

      <input type="file"></input>
    </div>
    <div class="inst">
    <p>*UPLOAD YOUR PHOTO IN .JPG, .JPEG, .PNG, FORMAT.
      *THE SIZE OF THE PHOTO SHOULD BE LESS THAN 10 KB.</p>
      <button class="upload-p">UPLOAD</button>
    </div>
     
    </div>
   
    </div>
    
  </div>

  <div class="personal-detail">
  
    <p class="p-1">personal detail</p>
    <div class="field-personal">
      <input type="text" name="first-name" class="place-holder" placeholder="First Name"></input>
      <input type="text" name="first-name" class="place-holder" placeholder="Middle Name"></input>
      <input type="text" name="first-name" class="place-holder" placeholder="Last Name"></input>

        <select id="gender" name="gender" class="dropdow">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
        </select>

        <input type="date" id="birthdate" name="birthdate" class="place-holder"></input>
    </div>

    <div class="field-personal">
      <input type="text" name="" class="place-holder"  placeholder="Father's Name"></input>
      <input type="text" name="" class="place-holder" placeholder="Mother's Name"></input>
      <input type="text" name="" class="place-holder" placeholder="Nationality"></input>
      <select id="gender" name="gender" class="dropdow">
        <option value="">Select Category</option>
        <option value="General">General</option>
        <option value="SC">SC</option>
        <option value="ST">ST</option>
        <option value="OBC">OBC</option>
    </select>

    </div>

    
  </div>
  
  <div class="permenant-address">

    <p class="p-1">permenant-address</p>
    <input type="text" name="Address" class="place-holder" placeholder="Address"></input>

    <div class="permenant-addres">
      <input type="text" name="State" class="place-holder" placeholder="State"></input>
      <input type="text" name="Distict" class="place-holder" placeholder="Distict"></input>
      <input type="text" name="PIN Code" class="place-holder" placeholder="PIN Code"></input>

    </div>

 


  </div>
  <div class="corresponding-address">
    
<div class="c-address-check">
  <p class="p-1">corresponding-address</p>
  <p class="p-1">(SAME AS PERMENANT)</p>
  <input class="pc" type="checkbox"></input>
</div>


  <input type="text" name="Address" class="place-holder" placeholder="Address"></input>
  <div class="permenant-addres">
    <input type="text" name="State" class="place-holder" placeholder="State"></input>
    <input type="text" name="Distict" class="place-holder" placeholder="Distict"></input>
    <input type="text" name="PIN Code" class="place-holder" placeholder="PIN Code"></input>

  </div>
  

  </div>

  <div class="contact-detail">

    <p class="p-1">contact-detail</p>
    <p class="p-1c">candidate</p>
<div class="candidate-info">
  <input type="text" name="E-Mail ID" class="place-holder-info" placeholder="E-Mail ID"></input>
  <input type="text" name="Phone No." class="place-holder-info" placeholder="Phone No."></input>

</div>
<p class="p-1p">parent</p>
<div class="candidate-info">
  <input type="text" name="E-Mail ID" class="place-holder-info" placeholder="E-Mail ID"></input>
  <input type="text" name="Phone No." class="place-holder-info" placeholder="Phone No."></input>

</div>
  </div>

<div class="marks-detail">
  <p class="p-1">Enter marks</p>

  <p class="p-p1">
    <input type="text" name="" class="place-holder-info" placeholder="10th Percentage/CGPA"></input>
    <input type="text" name="" class="place-holder-info" placeholder="12th Percentage/CGPA"></input>
    <input type="text" name="" class="place-holder-info" placeholder="Graduation Percentage/CGPA"></input>
    <input type="text" name="" class="place-holder-info" placeholder="Post Graduation Percentage/CGPA"></input>
  </p>

</div>
<div class="declaration">
  <input class="pc" type="checkbox"></input>
  <p class="p-1">I hereby declare that the information provided by me is true</p>
  
  <a><button class="submit-btn">SUBMIT</button></a>
</div>
</form>
    </div>
  )
}

