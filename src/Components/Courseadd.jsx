import  React  from "react";
import './Courseadd';
function Courseadd() {
    return (
        <div className="background">
            <div class="adding">
            <input class="in1" type="text"  placeholder='Name of the course'/><br></br>
            <input class="in2" type="text" placeholder='About the course'/><br></br>
            <button class="addvi">Add Videos</button>
            <button class="addfi">Add Files</button>
            <br />
            <button class="add">ADD</button>
            
            <img className='addpic' src="/Images/addcourse.jpg" alt="good or bad" width="540px" height="450px"></img>
    </div>
            </div>
         )
}
export default Courseadd;