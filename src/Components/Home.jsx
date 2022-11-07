import React from "react";
// import Header from "../components/Header/Header";
// import HeroSection from "../components/Hero-Section/HeroSection";
import AboutUs from "../Components/AboutUs";
import ChooseUs from "../Components/ChooseUs";
import Courses from "../Components/Courses";
import Features from "../Components/Features";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import Testimonials from "../Components/Testimonials";
// import ChooseUs from "../components/Choose-us/ChooseUs";
// import Features from "../components/Feature-section/Features";
// import Testimonials from "../components/Testimonial/Testimonials";
const Home = () => {
 return(
 <div> 
    <Header />
    <HeroSection />
     <AboutUs/>
    <ChooseUs/> 
    <Courses />
    <Features />
    <Testimonials />
     </div>
 )   
};

export default Home;
