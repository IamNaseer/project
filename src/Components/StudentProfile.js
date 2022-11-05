import '../Styles/StudentPro.css';

function StudentProfile() {
    return(
    <body>
    <div class="info">
     <label for="FullName">Name</label><br></br>
    <input class="in1" type="text" name="name" value="" placeholder='FullName'/><br></br>
    <label for="Email">Email</label><br></br>
    <input class="in1" type="email" name="email" value="" placeholder='Email'/><br></br>
    <label for="PhoneNumber">Name</label><br></br>
    <input class="in1" type="number" name="Phone_no" value="" placeholder='Mobile.No'/><br></br>
    <label for="Year">Year</label><br></br>
    <input class="in1" type="number" name="year" value="" placeholder='Date.Of.Birth'/><br></br>
    <label for="Branch">Branch</label><br></br>
    <input class="in1"type="text" name="branch" value="" placeholder='Branch'/>
    <button class="lout">Logout</button>
    <button class="myme">My Meeting</button>
    <button class="sav">Save</button>
    </div>
    <div class="profile">
        <p className='he'>Profile</p>
        <div class="box">
          <img src="/images/prof.png" alt='abc'></img>
        </div> 
        <button class="bt1">uplode</button>
    </div>
    </body>
    )
}

export default StudentProfile;