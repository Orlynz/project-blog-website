import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="AboutHeader">
      {/* Desktop */}
      <div class="container">
        <div class="d-none d-md-block">
          <div class="row mt-4">
            <div class="col-md-6">
              <div class="d-flex h-100">
                <div class="justify-content-center align-self-center">
                  <h2>
                    <strong>
                      Tingkatkan
                      <br />
                      Potensi Geek Anda
                    </strong>
                  </h2>
                  <p>
                    Kami menghadirkan solusi transformatif yang dirancang <br />
                    untuk membantu Anda berkembang di dunia digital.
                  </p>
                  <Link
                    class="btn btn-lg"
                    style={{
                      backgroundColor: "orange",
                      borderRadius: "10px",
                      color: "white",
                    }}
                    to="/contact"
                  >
                    Hubungi Kami
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <Image
                src="https://www.g2academy.co/img/hero.4e7737ff.png"
                width="100%"
              />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div class="d-sm-block d-md-none">
          <div class="row mt-4">
            <div class="col-md-6 mb-3">
              <img
                src="https://www.g2academy.co/img/hero.4e7737ff.png"
                width="100%"
              />
            </div>
            <div class="col-md-6">
              <div class="d-flex h-100">
                <div class="justify-content-center align-self-center">
                  <h2>
                    <strong>Tingkatkan</strong>
                    <br />
                    Potensi Geek Anda
                  </h2>
                  <p>
                    Kami menghadirkan solusi transformatif yang dirancang untuk
                    membantu Anda berkembang di dunia digital.
                  </p>
                  <button
                    class="btn btn-lg"
                    style={{
                      backgroundColor: "orange",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    Hubungi Kami
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
