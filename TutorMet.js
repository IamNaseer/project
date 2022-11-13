import React from "react";
import './TutorMet1.css';

function TutorMet()
{
    return(
        <>    
        <div>
        <h1 className="heading"><u>My Meetings</u></h1>
        <h2>Meetings</h2>
        <div className="meetings">
          <a href="#">Advance Java</a>
          <a href="#">Session Over</a>
          <a href="#">Download Attendence record</a>
          <a className="v" href="#">Upload Assignment</a>
          <a className="v" href="#">View Student's Uploads</a>
          <br /><br /><br />
          <a href="#">DSA in Java</a>
          <a href="#">Session Over</a>
          <a href="#">Download Attendence record</a>
        </div>
        <br />
        <h2>Upcoming Meetings</h2>
        <div>
          <a href="#">Java Technologies</a>
          <a href="#">Time left: 10:30:54s</a>
          <a href="#">Download Attendence record</a>
          <a className="start" href="#">Start</a>
          <br /><br /><br />
          <a href="#">C++ Programming</a>
          <a href="#">Time left: 10:30:54s</a>
          <a href="#">Download Attendence record</a>
          <a className="start" href="#">Start</a>
        </div>
         <img width="350px" src="cartoon.png" alt="cartoon" />
        
         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        </div>
        </>
    )
}
export default TutorMet;