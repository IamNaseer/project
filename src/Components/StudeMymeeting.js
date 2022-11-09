import '../Styles/StudMymeeting.css';

function Stude_Mymeeting() {

    return(
      <div className='background'>
      <form className='Mymeeting'>
      <h1 className='hed'>My Meetings</h1>
      <h2>meetings</h2>

      <img className='sub_image1' src="/Images/advancejava.png" alt='bad' width="300px" height="150px"></img>
      <h3 className='sub-info1'>Session Over</h3>
      <button className='bt1' type="Submit">Download Attached Files</button>
      <button className='bt2' type="Submit">View Assginement</button>
      <button className='bt3' type="Submit">Upload Work</button>
      <h3 className='subhed'>Up Comeing Meetings</h3>
      <img className='sub_image2' src="/Images/SUBJ-java-DSA.png" alt='bad' width="300px" height="150px"></img>
      <img className='sub_image3' src="/Images/SUBJ-c++.png" alt='bad' width="300px" height="150px"></img>
      <h5 className='sub-info2'>Time Left: 10:30:54s</h5>
      <h5 className='sub-info3'>Time Left: 20:10:34s</h5>
      <button className='bt4'>Join</button>
      <button className='bt5'>Join</button>
      </form>
      </div>
        
    );
}
export default Stude_Mymeeting;