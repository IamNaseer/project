
import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

// import chooseImg from "../../assests/images/why-choose-us.png";
import "../Styles/choose-us.css";

import ReactPlayer from "react-player";


const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <div className="main">
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt mollitia nostrum harum eos praesentium odit a sed quod
                aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
                minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores cupiditate facilis provident quidem accusamus impedit
                tenetur laboriosam debitis nisi eius!
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <span className="yv">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=JlRfIUH8ENww"
                  controls
                  width="100%"
                  height="430px"
                />
                </span>
              ) : (
                <img src={"/Images/why-choose-us.png"} alt="" className="w-100"
                width= "600px"
                 />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
        </div>
      </Container>
    </section>
  );
};

export default ChooseUs;
