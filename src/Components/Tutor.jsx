 import './Css/Tutor.css'
 
 const Tutor = () =>{
    return(
        <div>
            <div className='tutor'>
                <img src="https://www.pngitem.com/pimgs/m/517-5177724_vector-transparent-stock-icon-svg-profile-user-profile.png" alt="profile" />
                <div>
                    <input type="text" placeholder='Deb' /> <br/>
                    <input type="email" placeholder='Debendra123@gmail.com'/>
                </div>
            </div>
            <div className='bio'>
                <h3>Bio</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Consectetur quisquam quaerat harum corrupti dignissimos <br/>repudiandae, animi eius libero. Doloremque nobis omnis <br/>consectetur non quos illum temporibus tenetur reprehenderit culpa.</p>
            </div>
            <h2>Tutor Offered Courses</h2>
        </div>
    );
}

export default Tutor;