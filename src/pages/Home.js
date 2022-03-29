import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Blog from "../components/Blog";
import Categori from "../components/Categori";
import "../index.css";

const Home = () => {
  return (
    <div className="home mt-5">
      <Container>
        <Row>
          <Col xs={9}>
            <Blog />
          </Col>
          <Col>
            <Categori />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
