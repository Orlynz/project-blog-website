import React from "react";
import { Image, Form, Card, Button } from "react-bootstrap";
// import "../home.css";

const PageDetail = () => {
  return (
    <div className="container">
      <div className="PageDetail">
        <div className="title">
          <h2>Java Coding Tips For Beginners</h2>
          <h6>by : Admin G2 | Dec 8, 2021 | Educational | 0 comments</h6>
        </div>
        <div className="PageDetail-wrapper">
          <Image
            src="https://insights.g2academy.co/wp-content/uploads/2021/12/Java-tips-for-beginners-scaled.jpg"
            alt=""
          />
          <h5>Spread the love</h5>
          <ul class="social-link">
            <li>
              <a href="#" class="icon-box">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                  }}
                  alt=""
                />
              </a>
            </li>

            <li>
              <a href="#" class="icon-box">
                <Image
                  src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                  }}
                  alt=""
                />
              </a>
            </li>

            <li>
              <a href="#" class="icon-box">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBgiEFoK2MpvDZf6xCSwZ0v5hMoC4aQ8qzeaCZK8tKCB6EDKR08LfV-fVcq-P3W1HdVXw&usqp=CAU"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                  }}
                  alt=""
                />
              </a>
            </li>

            <li>
              <a href="#" class="icon-box">
                <Image
                  src="https://www.facebook.com/images/fb_icon_325x325.png"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                  }}
                  alt=""
                />
              </a>
            </li>
          </ul>
          <p>
            Java Coding Tips for Beginners – Used by over 10 million developers
            and running on 56 billion devices globally, Java is easily one of
            the most popular programming languages out there. Many developers
            prefer it over others because of how flexible and portable it is,
            enabling them to write code for machines of varying architectures
            and platforms. Having launched in the early 90s, Java has withstood
            the test of time. It is still widely utilized even as technology
            continues to evolve. Usually, programming languages tend to become
            obsolete or diminish in relevance as new technology emerges. This is
            because a language has to keep upgrading and changing to adapt in
            different computing environments. If not, then it will become
            redundant. In defiance of being outdated, Java has proven to
            persevere and improve with every released upgrade. For this reason,
            Java is still used in every nook and corner; from desktop and web
            applications, to game consoles and mobile phones. It’s unlikely to
            disappear anytime soon and will most probably still be around even
            if developers lose interest.
          </p>
        </div>

        <br />
        <div className="coment">
          <h4>0 Comment</h4>
          <h4>Submit a Comment</h4>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <Card>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" required />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                required
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Add Your Comment"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Save my name, email, and website in this browser for the next time I comment."
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <Button type="submit">Submit Comment</Button>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PageDetail;
