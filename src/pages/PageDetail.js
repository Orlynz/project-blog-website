import React from "react";
import { Image, Form, Card, Button } from "react-bootstrap";
// import "../home.css";

const PageDetail = () => {
  return (
    <div className="container">
      <div className="PageDetail">
        <div className="title">
          <h2>Tip Coding Java Untuk Pemula</h2>
          <h6>by : Admin G2 | Des 8, 2021 | Pendidikan | 0 comments</h6>
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
            Kiat Pengodean Java untuk Pemula – Digunakan oleh lebih dari 10 juta
            pengembang dan berjalan di 56 miliar perangkat secara global, Java
            dengan mudah menjadi salah satu bahasa pemrograman paling populer di
            luar sana. Banyak pengembang lebih menyukainya daripada yang lain
            karena fleksibilitas dan portabelnya, memungkinkan mereka untuk
            menulis kode untuk mesin dari berbagai arsitektur dan platform.
            Diluncurkan pada awal 90-an, Java telah bertahan dalam ujian waktu.
            Ini masih banyak digunakan bahkan ketika teknologi terus berkembang.
            Biasanya, bahasa pemrograman cenderung menjadi usang atau berkurang
            relevansinya dengan munculnya teknologi baru. Ini karena bahasa
            harus terus ditingkatkan dan diubah untuk beradaptasi di lingkungan
            komputasi yang berbeda. Jika tidak, maka itu akan menjadi
            berlebihan. Meskipun sudah ketinggalan zaman, Java telah terbukti
            bertahan dan meningkat dengan setiap peningkatan yang dirilis. Untuk
            alasan ini, Java masih digunakan di setiap sudut; dari desktop dan
            aplikasi web, hingga konsol game dan ponsel. Itu tidak mungkin
            menghilang dalam waktu dekat dan kemungkinan besar akan tetap ada
            bahkan jika pengembang kehilangan minat.
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
