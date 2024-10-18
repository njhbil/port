import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import {} from "react";
import "./aboutme.css";
import Me from "../foto/me.png";
import styled from 'styled-components';


const AnimatedText = styled.h4`
  transition:  color 0.5s ease, transform 0.5s ease;

  &:hover {
  color : #fff000;
    transform: scale(1.35);
    
  }
`;

const AnimatedImages = styled.img`
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;


function AboutMe() {
  return (
    <div className="xx d-flex flex-lg-row flex-column justify-content-center text-white" >
      <div class="d-flex mobile flex-sm-row-reverse justify-content-center align-items-center">
        <div class=" col-sm-6" >
          <div>
            <AnimatedText className="ms-3" >
              <strong> About Me</strong>{" "}
            </AnimatedText>
          </div>
          <div class="vv card ">
            <div class="card-body">
              <p class="card-text text-white ">
                Informatics student at the State University of Surabaya with a
                high enthusiasm for learning new things and a strong
                determination to face challenges. I have an enthusiasm in{" "}
                <li>
                  {" "}
                  HTML <li>CSS</li> <li>JavaScript</li>
                  <li>React Js</li>
                  <li>Canva</li>
                  <li>Capcut</li>
                </li>
              </p>
              </div>
          </div>
        </div>
        <div class=" justify-content-center align-content-center">
                <AnimatedImages src={Me} alt="me" className="img-fluid" />
            </div>
      </div>
    </div>
  );
}
export default AboutMe;
