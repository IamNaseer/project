import Container from './Container';
import Header from './Header';
import PaidCourses from './PaidCourses';
import Search from './Search';


function Profile(){
    return(
        <div>
           <Header/>
           <Search/>
           <Container/>
           <Container/>
           <PaidCourses/>
        </div>
    );
}

export default Profile