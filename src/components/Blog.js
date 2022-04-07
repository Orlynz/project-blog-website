import React from "react";
import { Image } from "react-bootstrap";
import { useState } from "react";
// import "../Home3.css";

import useInfiniteScroll from "react-infinite-scroll-hook";
// import $ from "jquery";

const Home2 = () => {
  const [data, setData] = useState([]);

  const [since, setSince] = useState(0);
  const [limit, setLimit] = useState(3);

  const [loading, setLoading] = useState(false);

  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchmore = async (since) => {
    setLoading(true);
    setSince(since + limit);
    try {
      const response = await fetch(
        `https://api.github.com/users?since=${since}&per_page=${limit}`
      );
      const json = await response.json();
      return setData((data) => [...data, ...json]);
    } catch (e) {
      console.log(e);
      return setHasNextPage(false);
    } finally {
      return setLoading(false);
    }
  };

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage: hasNextPage,
    delayInMs: 500,
    onLoadMore: () => {
      fetchmore(since);
    },
  });

  return (
    <main>
      <div class="main">
        <div class="container">
          <div class="blog">
            <div class="blog-card-group">
              {data &&
                data.map((item, index) => {
                  return (
                    <div key={index} className="item">
                      <div class="blog-card content">
                        <div class="blog-card-banner">
                          <Image
                            src="https://insights.g2academy.co/wp-content/uploads/2021/11/introduction-to-cloud-computing-1080x675.jpg"
                            alt=""
                            width="400"
                            class="blog-banner-img"
                          />
                        </div>

                        <div class="blog-content-wrapper">
                          <h3>
                            <a href="" class="h3">
                              How to connect a React frontend with a
                              NodeJS/Express backend
                            </a>
                          </h3>

                          <p class="blog-text">
                            The MERN (MongoDB, Express, React, NodeJS) stack is
                            very popular for making full stack applications,
                            utilizing Javascript for both the backend and
                            frontend as well as a document-oriented or non
                            relational database (MongoDB), meaning that it's
                            structured like JSON rather than a large excel sheet
                            like SQL databases are.
                          </p>

                          <div class="wrapper-flex">
                            <div class="wrapper">
                              <a href="#" class="h4">
                                Julia Walker
                              </a>

                              <p class="text-sm">
                                <time datetime="2021-09-21">Sep 21, 2021</time>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              {(loading || hasNextPage) && (
                <div className="loader" ref={sentryRef}>
                  <h5>Loading...</h5>
                </div>
              )}
            </div>

            {/* <button class="btn load-more">Load More</button> */}

            {/* <nav>
              <ul class="pagination justify-content-center pagination-sm"></ul>
            </nav> */}
          </div>

          <div class="aside">
            <div class="topics">
              <h2 class="h2">Categories</h2>

              <a href="#" class="topic-btn">
                {/* <div class="icon-box">
                    <ion-icon name="server-outline"></ion-icon>
                  </div> */}
                <p>Pendidikan</p>
              </a>

              <a href="#" class="topic-btn">
                {/* <div class="icon-box">
                    <ion-icon name="accessibility-outline"></ion-icon>
                  </div> */}
                <p>Pembaruan G2 Academy</p>
              </a>

              <a href="#" class="topic-btn">
                {/* <div class="icon-box">
                    <ion-icon name="rocket-outline"></ion-icon>
                  </div> */}
                <p>Teknologi</p>
              </a>
            </div>

            <div class="contact">
              <h2 class="h2">About Us</h2>

              <div class="wrapper">
                <p>
                  Kami memimpikan para penggemar teknologi berkelas dunia dengan
                  memajukan pendidikan teknologi, mengidentifikasi talenta
                  unggul, dan mendukung diskusi yang termutakhir.
                </p>

                <ul className="social-link">
                  <li>
                    <a href="#" class="icon-box discord">
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
                    <a href="#" class="icon-box twitter">
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
                    <a href="#" class="icon-box facebook">
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
              </div>
            </div>

            <div class="newsletter">
              <h2 class="h2">Latest Post</h2>

              <div class="wrapper">
                <div class="wrapper-box">
                  <img
                    src="https://insights.g2academy.co/wp-content/uploads/2021/11/Siswa-Bootcamp-G2Academy-min-scaled.jpg"
                    alt=""
                  />
                </div>
                <div class="wrapper-text">
                  <p>Raih Beasiswa Bootcamp G2Academy Dan Wujudkan Impianmu</p>
                </div>
              </div>

              <div class="wrapper">
                <div class="wrapper-box">
                  <img
                    src="https://insights.g2academy.co/wp-content/uploads/2021/11/Siswa-Bootcamp-G2Academy-min-scaled.jpg"
                    alt=""
                  />
                </div>
                <div class="wrapper-text">
                  <p>Raih Beasiswa Bootcamp G2Academy Dan Wujudkan Impianmu</p>
                </div>
              </div>

              <div class="wrapper">
                <div class="wrapper-box">
                  <img
                    src="https://insights.g2academy.co/wp-content/uploads/2021/11/Siswa-Bootcamp-G2Academy-min-scaled.jpg"
                    alt=""
                  />
                </div>
                <div class="wrapper-text">
                  <p>Raih Beasiswa Bootcamp G2Academy Dan Wujudkan Impianmu</p>
                </div>
              </div>

              <div class="wrapper">
                <div class="wrapper-box">
                  <img
                    src="https://insights.g2academy.co/wp-content/uploads/2021/11/Siswa-Bootcamp-G2Academy-min-scaled.jpg"
                    alt=""
                  />
                </div>
                <div class="wrapper-text">
                  <p>Raih Beasiswa Bootcamp G2Academy Dan Wujudkan Impianmu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home2;
