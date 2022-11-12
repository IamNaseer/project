import React from 'react'
import './StudMYmeeting.css';
function StudentMYmeeting() {
  return (
      <div className='background'>
        <div className='navbox'></div>
        <img className='im1' src="/images/meetinglogo.png" alt="bad" width="25px" height="25px"></img>
        <h1 className='hed1'>My Meeting</h1>


        <p className='methead'>Meetings</p>
            <img className='subimg1' src="/images/advancejava.png" alt="bad"></img>
            <p className='info1'>Session Status: <span className='status'>Session Complete</span></p>
            <button className='bt1'>Download Attached File</button>
            <button className='bt2'>View Assginement</button>
            <button className='bt3'>Upload Work</button>
            <p className='methead1'>Upcomeing Meetings</p>
            <img className='subimg2' src="/images/c++image.png" alt="bad"></img>
            <p className='info2'>Time Status: <span className='status1'>10:30:32s</span></p>
            <button className='bt1'>Join</button>
            <img class="cart" src="/Images/meetcartoon.jpg" alt="bad"></img>
            
    </div>
  )
}


export default StudentMYmeeting;