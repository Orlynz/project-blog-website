import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <div className="d-flex h-100">
            <div className="justify-content-center align-self-center">
              <h3>
                <b>
                  ASPIRING TO CREATE ZERO TECHNOLOGY GAP DIGITAL ECOSYSTEM
                </b>
              </h3>
              <br />
              <p>
                G2Academy empowers digital transformation by developing
                world-class tech talents across all levels, elements and sectors
                of the industry. Driven by this vision, we elevate aspiring
                professionals by advancing technology education, integrating
                talent pipelines, and facilitating corporate projects.
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <Image
            src="https://www.g2academy.co/img/hero.4e7737ff.png"
            width="100%"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
