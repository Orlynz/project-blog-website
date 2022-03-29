import React from "react";
import "../index.css";
import { Row, Col, Container, Card, Image } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="blog">
      <h3>Latest Blog Post</h3>
      <hr />
        <Row className="post">
          <Col>
            <Image
              src="https://insights.g2academy.co/wp-content/uploads/2021/11/business-english-scaled.jpg"
              alt=""
              width="380"
              class="blog-banner-img"
            />
          </Col>
          <Col>
            <h4>Business English – Why is it important for your career?</h4>
            <p>
              Is English the universal language for business? The simple answer
              is yes. According to the latest data published by Ethnologue,
              English is the most spoken language worldwide with 1.35 billion
              people speaking it, either natively or as a second language.
              Transcending into the business world, it has become the medium of
              communication for many companies across the globe.
            </p>
          </Col>
        </Row>
    </div>
  );
};

export default Blog;
