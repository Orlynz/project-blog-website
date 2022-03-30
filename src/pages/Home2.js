import React from "react";
import { Container, Image } from "react-bootstrap";
// import "../home.css";
// import "../anu.css";

const Home2 = () => {
  return (
    <div>
      {/* <header>
      <div class="container">
      </div>
    </header> */}

      <main>
        {/* <div class="hero">
        <div class="container">
          <div class="left">
            <h1 class="h1">
              Hi, I'm <b>Julia&nbsp;Walker</b>. <br />Web Developer
            </h1>

            <p class="h3">
              Specialized in <abbr title="Accessibility">a11y</abbr>
              and Core Web Vitals
            </p>

            <div class="btn-group">
              <a href="#" class="btn btn-primary">Contact Me</a>
              <a href="#" class="btn btn-secondary">About Me</a>
            </div>
          </div>

          <div class="right">
            <div class="pattern-bg"></div>
            <div class="img-box">
              <Image
                src=""
                alt="Julia Walker"
                class="hero-img"
              />
              <div class="shape shape-1"></div>
              <div class="shape shape-2"></div>
            </div>
          </div>
        </div>
      </div> */}

        <div class="main">
          <div class="container">
            <div class="blog">
              <h2 class="h2">Latest Blog Post</h2>

              <div class="blog-card-group">
                <div class="blog-card">
                  <div class="blog-card-banner">
                    <Image
                      src="https://insights.g2academy.co/wp-content/uploads/2021/12/Java-tips-for-beginners-scaled.jpg"
                      alt=""
                      width="400"
                      class="blog-banner-img"
                    />
                  </div>

                  <div class="blog-content-wrapper">
                    <button class="blog-topic text-tiny">Database</button>

                    <h3>
                      <a href="#" class="h3">
                        Building microservices with Dropwizard, MongoDB & Docker
                      </a>
                    </h3>

                    <p class="blog-text">
                      This NoSQL database oriented to documents (by documents
                      like JSON) combines some of the features from relational
                      databases, easy to use and the multi-platform is the best
                      option for scale up and have fault tolerance, load
                      balancing, map reduce, etc.
                    </p>

                    <div class="wrapper-flex">
                      <div class="profile-wrapper">
                        <Image
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsr2qne80colViST5F7DDb14m8CM3AhI690w&usqp=CAU"
                          alt="Julia Walker"
                          width="50"
                        />
                      </div>

                      <div class="wrapper">
                        <a href="#" class="h4">
                          Julia Walker
                        </a>

                        <p class="text-sm">
                          <time datetime="2022-01-17">Jan 17, 2022</time>
                          <span class="separator"></span>
                          <ion-icon name="time-outline"></ion-icon>
                          <time datetime="PT3M">3 min</time>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="blog-card">
                  <div class="blog-card-banner">
                    <Image
                      src="https://insights.g2academy.co/wp-content/uploads/2021/11/business-english-scaled.jpg"
                      alt=""
                      width="400"
                      class="blog-banner-img"
                    />
                  </div>

                  <div class="blog-content-wrapper">
                    <button class="blog-topic text-tiny">
                      Web Performance
                    </button>

                    <h3>
                      <a href="" class="h3">
                        Fast web page loading on a $20 feature phone
                      </a>
                    </h3>

                    <p class="blog-text">
                      Feature phones are affordable (under $20-25), low-end
                      devices enabling 100s of millions of users in developing
                      countries to leverage the web. Think of them as a light
                      version of a smart phone.
                    </p>

                    <div class="wrapper-flex">
                      <div class="profile-wrapper">
                        <Image
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsr2qne80colViST5F7DDb14m8CM3AhI690w&usqp=CAU"
                          alt="Julia walker"
                          width="50"
                        />
                      </div>

                      <div class="wrapper">
                        <a href="#" class="h4">
                          Julia Walker
                        </a>

                        <p class="text-sm">
                          <time datetime="2021-12-10">Dec 10, 2021</time>
                          <span class="separator"></span>
                          <ion-icon name="time-outline"></ion-icon>
                          <time datetime="PT2M">2 min</time>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="blog-card">
                  <div class="blog-card-banner">
                    <Image
                      src="https://insights.g2academy.co/wp-content/uploads/2021/11/introduction-to-cloud-computing-1080x675.jpg"
                      alt=""
                      width="400"
                      class="blog-banner-img"
                    />
                  </div>

                  <div class="blog-content-wrapper">
                    <button class="blog-topic text-tiny">Database</button>

                    <h3>
                      <a href="" class="h3">
                        How to connect a React frontend with a NodeJS/Express
                        backend
                      </a>
                    </h3>

                    <p class="blog-text">
                      The MERN (MongoDB, Express, React, NodeJS) stack is very
                      popular for making full stack applications, utilizing
                      Javascript for both the backend and frontend as well as a
                      document-oriented or non relational database (MongoDB),
                      meaning that it's structured like JSON rather than a large
                      excel sheet like SQL databases are.
                    </p>

                    <div class="wrapper-flex">
                      <div class="profile-wrapper">
                        <Image
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsr2qne80colViST5F7DDb14m8CM3AhI690w&usqp=CAU"
                          alt="Julia walker"
                          width="50"
                        />
                      </div>

                      <div class="wrapper">
                        <a href="#" class="h4">
                          Julia Walker
                        </a>

                        <p class="text-sm">
                          <time datetime="2021-09-21">Sep 21, 2021</time>
                          <span class="separator"></span>
                          <ion-icon name="time-outline"></ion-icon>
                          <time datetime="PT4M">4 min</time>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button class="btn load-more justify-content-center">Load More</button>
            </div>

            <div class="aside">
              <div class="topics">
                <h2 class="h2">Categories</h2>

                <a href="#" class="topic-btn">
                  <div class="icon-box">
                    <ion-icon name="server-outline"></ion-icon>
                  </div>

                  <p>Database</p>
                </a>

                <a href="#" class="topic-btn">
                  <div class="icon-box">
                    <ion-icon name="accessibility-outline"></ion-icon>
                  </div>

                  <p>Accessibility</p>
                </a>

                <a href="#" class="topic-btn">
                  <div class="icon-box">
                    <ion-icon name="rocket-outline"></ion-icon>
                  </div>

                  <p>Web Performance</p>
                </a>
              </div>

              {/* <div class="tags">
              <h2 class="h2">Tags</h2>

              <div class="wrapper">
                <button class="hashtag">#mongodb</button>
                <button class="hashtag">#nodejs</button>
                <button class="hashtag">#a11y</button>
                <button class="hashtag">#mobility</button>
                <button class="hashtag">#inclusion</button>
                <button class="hashtag">#webperf</button>
                <button class="hashtag">#optimize</button>
                <button class="hashtag">#performance</button>
              </div>
            </div> */}

              <div class="contact">
                <h2 class="h2">About Us</h2>

                <div class="wrapper">
                  <p>
                    Kami memimpikan para penggemar teknologi berkelas dunia
                    dengan memajukan pendidikan teknologi, mengidentifikasi
                    talenta unggul, dan mendukung diskusi yang termutakhir.
                  </p>

                  <ul class="social-link">
                    <li>
                      <a href="#" class="icon-box discord">
                        <ion-icon name="logo-instagram"></ion-icon>
                      </a>
                    </li>

                    <li>
                      <a href="#" class="icon-box twitter">
                        <ion-icon name="logo-twitter"></ion-icon>
                      </a>
                    </li>

                    <li>
                      <a href="#" class="icon-box facebook">
                        <ion-icon name="logo-facebook"></ion-icon>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div class="newsletter">
              <h2 class="h2">Newsletter</h2>

              <div class="wrapper">
                <p>
                  Subscribe to our newsletter to be among the first to keep up
                  with the latest updates.
                </p>

                <form action="#">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />

                  <button type="submit" class="btn btn-primary">
                    Subscribe
                  </button>
                </form>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </main>

      {/* <footer>
      <div class="container">
        <div class="wrapper">
          <a href="#" class="footer-logo">
            <img
              src="./assets/images/logo-light.svg"
              alt="DevBlog's Logo"
              width="150"
              height="40"
              class="logo-light"
            />
            <img
              src="./assets/images/logo-dark.svg"
              alt="DevBlog's Logo"
              width="150"
              height="40"
              class="logo-dark"
            />
          </a>

          <p class="footer-text">
            Learn about Web accessibility, Web performance, and Database
            management.
          </p>
        </div>

        <div class="wrapper">
          <p class="footer-title">Quick Links</p>

          <ul>
            <li>
              <a href="#" class="footer-link">Advertise with us</a>
            </li>

            <li>
              <a href="#" class="footer-link">About Us</a>
            </li>

            <li>
              <a href="#" class="footer-link">Contact Us</a>
            </li>
          </ul>
        </div>

        <div class="wrapper">
          <p class="footer-title">Legal Stuff</p>

          <ul>
            <li>
              <a href="#" class="footer-link">Privacy Notice</a>
            </li>

            <li>
              <a href="#" class="footer-link">Cookie Policy</a>
            </li>

            <li>
              <a href="#" class="footer-link">Terms Of Use</a>
            </li>
          </ul>
        </div>
      </div>

      <p class="copyright">
        &copy; Copyright 2022 <a href="#">codewithsadee</a>
      </p>
    </footer> */}
    </div>
  );
};

export default Home2;
