import React from "react";
import { Container, Image } from "react-bootstrap";
// import "../home.css";
// import "../anu.css";
import $ from "jquery";

const Home2 = () => {
  function getPageList(totalPages, page, maxLength) {
    if (maxLength < 5) throw "maxLength must be at least 5";

    function range(start, end) {
      return Array.from(Array(end - start + 1), (_, i) => i + start);
    }

    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
    if (totalPages <= maxLength) {
      // no breaks in list
      return range(1, totalPages);
    }
    if (page <= maxLength - sideWidth - 1 - rightWidth) {
      // no break on left of page
      return range(1, maxLength - sideWidth - 1)
        .concat([0])
        .concat(range(totalPages - sideWidth + 1, totalPages));
    }
    if (page >= totalPages - sideWidth - 1 - rightWidth) {
      // no break on right of page
      return range(1, sideWidth)
        .concat([0])
        .concat(
          range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
        );
    }
    // Breaks on both sides
    return range(1, sideWidth)
      .concat([0])
      .concat(range(page - leftWidth, page + rightWidth))
      .concat([0])
      .concat(range(totalPages - sideWidth + 1, totalPages));
  }

  $(function () {
    // Number of items and limits the number of items per page
    var numberOfItems = $("#jar .content").length;
    var limitPerPage = 4;
    // Total pages rounded upwards
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    // Number of buttons at the top, not counting prev/next,
    // but including the dotted buttons.
    // Must be at least 5:
    var paginationSize = 7;
    var currentPage;

    function showPage(whichPage) {
      if (whichPage < 1 || whichPage > totalPages) return false;
      currentPage = whichPage;
      $("#jar .content")
        .hide()
        .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
        .show();
      // Replace the navigation items (not prev/next):
      $(".pagination li").slice(1, -1).remove();
      getPageList(totalPages, currentPage, paginationSize).forEach((item) => {
        $("<li>")
          .addClass(
            "page-item " +
              (item ? "current-page " : "") +
              (item === currentPage ? "active " : "")
          )
          .append(
            $("<a>")
              .addClass("page-link")
              .attr({
                href: "javascript:void(0)",
              })
              .text(item || "...")
          )
          .insertBefore("#next-page");
      });
      return true;
    }

    // Include the prev/next buttons:
    $(".pagination").append(
      $("<li>")
        .addClass("page-item")
        .attr({ id: "previous-page" })
        .append(
          $("<a>")
            .addClass("page-link")
            .attr({
              href: "javascript:void(0)",
            })
            .text("Prev")
        ),
      $("<li>")
        .addClass("page-item")
        .attr({ id: "next-page" })
        .append(
          $("<a>")
            .addClass("page-link")
            .attr({
              href: "javascript:void(0)",
            })
            .text("Next")
        )
    );
    // Show the page links
    $("#jar").show();
    showPage(1);

    // Use event delegation, as these items are recreated later
    $(document).on(
      "click",
      ".pagination li.current-page:not(.active)",
      function () {
        return showPage(+$(this).text());
      }
    );
    $("#next-page").on("click", function () {
      return showPage(currentPage + 1);
    });

    $("#previous-page").on("click", function () {
      return showPage(currentPage - 1);
    });
    $(".pagination").on("click", function () {
      $("html,body").animate({ scrollTop: 0 }, 0);
    });
  });
  return (
    <div>
      {/* <header>
      <div class="container">
      </div>
    </header> */}

      <main>
        <div class="main">
          <div class="container" id="jar">
            <div class="blog">
              <div class="blog-card-group">
                <div class="blog-card content">
                  <div class="blog-card-banner">
                    <Image
                      src="https://insights.g2academy.co/wp-content/uploads/2021/12/Java-tips-for-beginners-scaled.jpg"
                      alt=""
                      width="400"
                      class="blog-banner-img"
                    />
                  </div>

                  <div class="blog-content-wrapper">
                    {/* <button class="blog-topic text-tiny">Database</button> */}

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

                <div class="blog-card content">
                  <div class="blog-card-banner">
                    <Image
                      src="https://insights.g2academy.co/wp-content/uploads/2021/11/business-english-scaled.jpg"
                      alt=""
                      width="400"
                      class="blog-banner-img"
                    />
                  </div>

                  <div class="blog-content-wrapper">
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
                <div class="blog-card content">
                  <div class="blog-card-banner">
                    <Image
                      src="https://insights.g2academy.co/wp-content/uploads/2021/11/business-english-scaled.jpg"
                      alt=""
                      width="400"
                      class="blog-banner-img"
                    />
                  </div>

                  <div class="blog-content-wrapper">
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
                <div class="blog-card content">
                  <div class="blog-card-banner">
                    <Image
                      src="https://insights.g2academy.co/wp-content/uploads/2021/11/business-english-scaled.jpg"
                      alt=""
                      width="400"
                      class="blog-banner-img"
                    />
                  </div>

                  <div class="blog-content-wrapper">
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
                <div class="blog-card content">
                  <div class="blog-card-banner">
                    <Image
                      src="https://insights.g2academy.co/wp-content/uploads/2021/11/business-english-scaled.jpg"
                      alt=""
                      width="400"
                      class="blog-banner-img"
                    />
                  </div>

                  <div class="blog-content-wrapper">
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
                <div class="blog-card content">
                  <div class="blog-card-banner">
                    <Image
                      src="https://insights.g2academy.co/wp-content/uploads/2021/11/business-english-scaled.jpg"
                      alt=""
                      width="400"
                      class="blog-banner-img"
                    />
                  </div>

                  <div class="blog-content-wrapper">
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
                <div class="blog-card content">
                  <div class="blog-card-banner">
                    <Image
                      src="https://insights.g2academy.co/wp-content/uploads/2021/11/business-english-scaled.jpg"
                      alt=""
                      width="400"
                      class="blog-banner-img"
                    />
                  </div>

                  <div class="blog-content-wrapper">
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
                <div class="blog-card content">
                  <div class="blog-card-banner">
                    <Image
                      src="https://insights.g2academy.co/wp-content/uploads/2021/11/business-english-scaled.jpg"
                      alt=""
                      width="400"
                      class="blog-banner-img"
                    />
                  </div>

                  <div class="blog-content-wrapper">
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
                <div class="blog-card content">
                  <div class="blog-card-banner">
                    <Image
                      src="https://insights.g2academy.co/wp-content/uploads/2021/11/business-english-scaled.jpg"
                      alt=""
                      width="400"
                      class="blog-banner-img"
                    />
                  </div>

                  <div class="blog-content-wrapper">
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
                <div class="blog-card content">
                  <div class="blog-card-banner">
                    <Image
                      src="https://insights.g2academy.co/wp-content/uploads/2021/11/business-english-scaled.jpg"
                      alt=""
                      width="400"
                      class="blog-banner-img"
                    />
                  </div>

                  <div class="blog-content-wrapper">
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
                <div class="blog-card content">
                  <div class="blog-card-banner">
                    <Image
                      src="https://insights.g2academy.co/wp-content/uploads/2021/11/business-english-scaled.jpg"
                      alt=""
                      width="400"
                      class="blog-banner-img"
                    />
                  </div>

                  <div class="blog-content-wrapper">
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

              <nav>
                <ul class="pagination justify-content-center pagination-sm"></ul>
              </nav>
            </div>

            <div class="aside">
              <div class="topics">
                <h2 class="h2">Categories</h2>

                <a href="#" class="topic-btn">
                  {/* <div class="icon-box">
                    <ion-icon name="server-outline"></ion-icon>
                  </div> */}
                  <p>Database</p>
                </a>

                <a href="#" class="topic-btn">
                  {/* <div class="icon-box">
                    <ion-icon name="accessibility-outline"></ion-icon>
                  </div> */}
                  <p>Accessibility</p>
                </a>

                <a href="#" class="topic-btn">
                  {/* <div class="icon-box">
                    <ion-icon name="rocket-outline"></ion-icon>
                  </div> */}
                  <p>Web Performance</p>
                </a>
              </div>

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
                        <i class="bi bi-instagram"></i>
                      </a>
                    </li>

                    <li>
                      <a href="#" class="icon-box twitter">
                        <i class="bi bi-twitter"></i>
                      </a>
                    </li>

                    <li>
                      <a href="#" class="icon-box facebook">
                        <i class="bi bi-facebook"></i>
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
                    <p>
                      Raih Beasiswa Bootcamp G2Academy Dan Wujudkan Impianmu
                    </p>
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
                    <p>
                      Raih Beasiswa Bootcamp G2Academy Dan Wujudkan Impianmu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home2;
