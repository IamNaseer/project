import React  from "react";
import { Container } from 'reactstrap';
import "../Styles/header.css";
const Header=()=>{
    return (
    <header className="header">
        <Container>
            {/* <div className="navigation d-flex align-items-center justify-content-between">
                <div className="logo">
                    <h2>
                        <i class="ri-pantone-line"></i>Online Tutorial System
                        </h2>
                </div>

            </div> */}
            <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line">Upturn</i> 
            </h2>
          </div>
          <div class="container">
      <div class="typed-out">
        <h1>Online Tutorial System </h1>
        </div>
    </div>

        </Container>
    </header>
)};
export default Header;