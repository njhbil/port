import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import {} from "react";
import "./expe.css";
import aug from "../foto/aug.png";
import genre from "../foto/genre.png";
import osis from "../foto/osis.png";
import wbj from "../foto/wbj.png";
import sby from "../foto/sby.png";
import styled from 'styled-components';


const AnimatedText = styled.h4`
  transition:  color 0.5s ease, transform 0.5s ease;

  &:hover {
  color : #fff000;
  transform: scale(1.35);
    
  }
`;


const AnimatedTexts = styled.h2`
  transition:  color 0.5s ease;

  &:hover {
  color : #00ffff;
    
  }
`;

const AnimatedSvg = styled.svg`
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const AnimatedImages = styled.img`
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

function Expe() {
  return (
    <div className="expe bg-black text-whiteflex-lg-row" id="expe">
      <div
        className="gel"
        style={{margin: 0, padding: 0, gap: 0}}
      >
        <AnimatedSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#3c3d37"
            fill-opacity="1"
            d="M0,64L34.3,74.7C68.6,85,137,107,206,112C274.3,117,343,107,411,128C480,149,549,203,617,218.7C685.7,235,754,213,823,181.3C891.4,149,960,107,1029,90.7C1097.1,75,1166,85,1234,96C1302.9,107,1371,117,1406,122.7L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </AnimatedSvg>
      </div>
      <div>
        <AnimatedText className=" text-center bg-black vv">
          <strong>Experience</strong>
        </AnimatedText>
      </div>
      <div
        id="carouselExampleRide"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <div class="card text-center">
              <div class="card-header text-white">
                {" "}
                <AnimatedTexts>DUTA GENRE SURABAYA</AnimatedTexts>
              </div>
              <div class="card-body">
                <div>
                  <AnimatedImages
                    src={genre}
                    style={{ height: "400px" }}
                    alt="description"
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center text-center mt-3">
                <p class="card-text col-7 text-white">
                  As a Duta GenRe (Generation with a Plan) since 2023, I have
                  actively promoted the importance of life planning for
                  adolescents, including reproductive health, education, and
                  readiness for the future. Throughout my involvement in this
                  program, I have participated in various social and educational
                  activities, such as providing counseling to young people about
                  the dangers of early marriage and the significance of mental
                  health. My public speaking skills have greatly improved, and I
                  have also gained leadership and teamwork experience through
                  various community initiatives. Through this role, I contribute
                  to empowering young people to face life’s challenges with
                  better understanding and preparation in terms of planning and
                  health.
                </p>
                </div>
              </div>
              <div className="card-footer text-white">2023-Present</div>
            </div>
          </div>
          <div className="carousel-item">
            <div class="card text-center">
              <div class="card-header text-white">
                {" "}
                <AnimatedTexts>OSIS SMAN 12 SURABAYA</AnimatedTexts>
              </div>
              <div class="card-body">
                <div>
                  <AnimatedImages
                    src={osis}
                    style={{ height: "400px" }}
                    alt="description"
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center text-center mt-3">
                <p class="card-text col-7 text-white">
                  I actively participated in the student council organization
                  (OSIS) at SMAN 12 Surabaya, where I was entrusted with the
                  role of Vice President. In this position, I was responsible
                  for overseeing various student activities, both academic and
                  non-academic, ensuring that OSIS programs ran smoothly and met
                  their objectives. Through this role, I developed leadership,
                  time management, and collaboration skills while working
                  closely with OSIS members and school staff. I was also
                  involved in planning and managing various events, from social
                  and cultural activities to educational programs, all aimed at
                  enriching students' experiences at school. This responsibility
                  has taught me the importance of accountability and being a
                  role model for other students.
                </p>
                </div>
              </div>
              <div className="card-footer text-white">2021-2023</div>
            </div>
          </div>
          <div className="carousel-item">
            <div class="card text-center">
              <div class="card-header text-white">
                {" "}
                <AnimatedTexts>ASEAN UNIVERSITY GAME</AnimatedTexts>
              </div>
              <div class="card-body">
                <div>
                  <AnimatedImages
                    src={aug}
                    style={{ height: "400px" }}
                    alt="description"
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center text-center mt-3">
                <p class="card-text col-7 text-white">
                  As a member of the Awarding Ceremony Team (UPP) at the ASEAN
                  University Games, I was responsible for ensuring that every
                  stage of the ceremony ran smoothly and adhered to the
                  established protocol. In this role, I handled the coordination
                  of the award presentations for the athletes, including
                  logistical preparations, welcoming honorary guests, and
                  ensuring the seamless flow of the ceremony. This experience
                  provided me with the opportunity to work in an international
                  environment and interact with representatives from various
                  ASEAN countries. I also learned the importance of teamwork,
                  attention to detail, and the ability to perform under pressure
                  in formal situations. Through this role, I contributed
                  directly to the success of one of Southeast Asia’s most
                  prestigious sports events.
                </p>
                </div>
              </div>
              <div className="card-footer text-white">June 2024</div>
            </div>
          </div>
          <div className="carousel-item">
            <div class="card text-center">
              <div class="card-header text-white">
                {" "}
                <AnimatedTexts>CONTENT CREATOR & DIGITAL MARKETING</AnimatedTexts>
              </div>
              <div class="card-body">
                <div>
                  <AnimatedImages
                    src={wbj}
                    style={{ height: "400px" }}
                    alt="description"
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center text-center mt-3">
                <p class="card-text col-7 text-white">
                  As a Content Creator and Digital Marketing professional at PT
                  Wong Bejo Joyo, I was responsible for designing digital
                  marketing strategies and creating engaging content to enhance
                  brand awareness and audience engagement. I produced various
                  digital materials, such as social media posts, promotional
                  videos, and other visual content tailored to the company’s
                  target market. In addition, I managed digital advertising
                  campaigns using platforms like Instagram, Facebook, and Google
                  Ads to expand audience reach and increase conversions. This
                  role sharpened my skills in digital marketing data analysis,
                  SEO, and collaboration with the team to ensure the achievement
                  of company targets.
                </p>
                </div>
              </div>
              <div className="card-footer text-white">May 2024 - June 2024</div>
            </div>
          </div>
          <div className="carousel-item">
            <div class="card text-center">
              <div class="card-header text-white">
                {" "}
                <AnimatedTexts>PROJECT WEBSITE SURABAYA</AnimatedTexts>
              </div>
              <div class="card-body">
                <div>
                  <img
                    src={sby}
                    style={{ height: "400px" }}
                    alt="description"
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center text-center mt-3">
                <p class="card-text col-7 text-white">
                  I was involved in a project to create a website aimed at
                  promoting Surabaya City as a tourist destination and cultural
                  hub. In this project, I was responsible for designing and
                  developing the website, including setting up the page
                  structure, user interface (UI) design, and user experience
                  (UX). I utilized technologies such as HTML, CSS, and
                  JavaScript to create an attractive and responsive layout.
                  Additionally, I incorporated informative content about tourist
                  attractions, history, cuisine, and cultural events in
                  Surabaya. This project also involved SEO optimization to
                  enhance the website's visibility on search engines. Through
                  this experience, I not only improved my technical skills in
                  web development but also learned about the importance of
                  digital marketing and how to attract visitors to explore the
                  uniqueness of Surabaya City.
                </p>
                </div>
              </div>
              <div className="card-footer text-white">2024</div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        
      </div>
    </div>
  );
}
export default Expe;
