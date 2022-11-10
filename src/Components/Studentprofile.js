import React from 'react'
import './Studentprofile.css';
function Studentprofile() {
  return (
      <div className='background'>
    <div class="info">
     <label for="FullName">Name</label><br></br>
    <input class="in1" type="text" name="name" placeholder='FullName'/><br></br>
    <label for="Email">Email</label><br></br>
    <input class="in1" type="email" name="email"  placeholder='Email'/><br></br>
    <label for="PhoneNumber">Mobile.No</label><br></br>
    <input class="in1" type="number" name="Phone_no" placeholder='Mobile.No'/><br></br>
    <label for="Year">Year</label><br></br>
    <input class="in1" type="number" name="year" placeholder='Date.Of.Birth'/><br></br>
    <label for="Branch">Branch</label><br></br>
    <input class="in1"type="text" name="branch" placeholder='Branch'/>
    <button class="lout">Logout</button>
    <button class="myme">My Meeting</button>
    <button class="sav">Save</button>
    </div>
    <img className='studpic' src="/images/Studentpic.png" alt="good or bad" width="1000px" height="900px"></img>
    </div>
  )
}


export default Studentprofile;