import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../Styles/courses.css";

const coursesData = [
  {
    
    title: "Web Design BootCamp-2022 for Beginners",
   
    // imgUrl: courseImg1,
   imgUrl: "/Images/web-design.png"
 
  },

  {
   
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
   
    imgUrl:"/Images/graphics-design.png" 
  },

  {
    title: "UI/UX BootCamp for Beginners in 2022",
   
    imgUrl:"/Images/ui-ux.png"
  },
];
const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">Explore Courses</button>
              </div>
            </div>
          </Col>
          {coursesData.map((num) => (
            <Col lg="4" md="6" sm="6">
              <img src={num.imgUrl} alt="" className="w-100" />
              <h6 className="course__title mb-4">{num.title}</h6>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
