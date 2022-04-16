import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
// import { useState } from "react";
import ScrollToTop from "./ScrollToTop";
import axios from "axios";

// import useInfiniteScroll from "react-infinite-scroll-hook";

const Home2 = () => {
  // const [data, setData] = useState([]);

  // const [since, setSince] = useState(0);
  // const [limit, setLimit] = useState(3);

  // const [loading, setLoading] = useState(false);

  // const [hasNextPage, setHasNextPage] = useState(true);

  // const fetchmore = async (since) => {
  //   setLoading(true);
  //   setSince(since + limit);
  //   try {
  //     const response = await fetch(
  //       `https://api.github.com/users?since=${since}&per_page=${limit}`
  //     );
  //     const json = await response.json();
  //     return setData((data) => [...data, ...json]);
  //   } catch (e) {
  //     console.log(e);
  //     return setHasNextPage(false);
  //   } finally {
  //     return setLoading(false);
  //   }
  // };

  // const [sentryRef] = useInfiniteScroll({
  //   loading,
  //   hasNextPage: hasNextPage,
  //   delayInMs: 500,
  //   onLoadMore: () => {
  //     fetchmore(since);
  //   },
  // });

  const [post, setPost] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const post = await axios.get("http://localhost:2020/api/post/");
    setPost(post.data);
  };

  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const category = await axios.get("http://localhost:2020/api/category/");
    setCategory(category.data);
  };

  // const deletePost = async (id) => {
  //   await axios.delete(`http://localhost:4000/post/${id}`);
  //   getPost();
  // };

  // const [kategori, setKategori] = useState([]);

  // useEffect(() => {
  //   getKategori();
  // }, []);

  // const getKategori = async () => {
  //   const kategori = await axios.get("http://localhost:4000/kategori");
  //   setKategori(kategori.data);
  // };

  return (
    <main>
      <div class="main">
        <div class="container">
          <div class="blog">
            <div class="blog-card-group">
              {post.map((posts) => {
                return (
                  <div className="item">
                    <div class="blog-card content">
                      <div class="blog-card-banner">
                        <img
                          src={`http://localhost:2020/${posts.image}`}
                          alt=""
                          width="400"
                          class="blog-banner-img"
                        />
                      </div>

                      <div class="blog-content-wrapper">
                        <h3>
                          <a href={`/pageDetail/${posts.id}`} class="h3">
                            {posts.title}
                          </a>
                        </h3>

                        <p class="blog-text">{posts.description}</p>

                        <div class="wrapper-flex">
                          <div class="wrapper">
                            <a href="#" class="h4">
                              {posts.name}
                            </a>

                            {/* <p class="text-sm">
                              <time datetime="2021-09-21">
                                {posts.tanggal_upload}
                              </time>
                            </p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* {(loading || hasNextPage) && (
                <div className="loader" ref={sentryRef}>
                  <h5>Loading...</h5>
                </div>
              )} */}
            </div>

            {/* <button class="btn load-more">Load More</button> */}

            {/* <nav>
              <ul class="pagination justify-content-center pagination-sm"></ul>
            </nav> */}
          </div>

          <div class="aside">
            <div class="topics">
              <h2 class="h2">Kategori</h2>
              {category.map((blog) => (
                <div class="topic-btn">
                  <p>{blog.name}</p>
                </div>
              ))}
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
                    <a
                      href="https://api.whatsapp.com/send?text=Raih%20Beasiswa%20Bootcamp%20G2Academy%20Dan%20Wujudkan%20Impianmu%20https%3A%2F%2Finsights.g2academy.co%2Fg2academy-updates%2Fraih-beasiswa-bootcamp-g2academy%2F"
                      class="icon-box discord"
                    >
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
                    <a
                      href="https://twitter.com/intent/tweet?text=A%20Simple%20Introduction%20to%20Cloud%20Computing&url=https%3A%2F%2Finsights.g2academy.co%2Fg2academy-updates%2Fa-simple-introduction-to-cloud-computing%2F"
                      class="icon-box twitter"
                    >
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
                    <a
                      href="https://www.facebook.com/g2academygeeks?_rdc=2&_rdr"
                      class="icon-box facebook"
                    >
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
              {post.map((posts) => {
                return (
                  <div class="wrapper">
                    <div class="wrapper-box">
                      <img
                        src={`http://localhost:2020/${posts.image}`}
                        alt=""
                      />
                    </div>
                    <div class="wrapper-text">
                      <h6>{posts.title}</h6>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <ScrollToTop />
        </div>
      </div>
    </main>
  );
};

export default Home2;
