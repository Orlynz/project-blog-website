import React from "react";
import { Image } from "react-bootstrap";

const Home = () => {
  return (
    <div className="header">
      {/* Desktop */}
      <div class="container">
        <div class="d-none d-md-block">
          <div class="row mt-4">
            <div class="col-md-6">
              <div class="d-flex h-100">
                <div class="justify-content-center align-self-center">
                  <h3>
                    <b>
                      BERMINAT MENCIPTAKAN ZERO TECHNOLOGY GAP EKOSISTEM DIGITAL
                    </b>
                  </h3>
                  <p>
                    G2Academy memberdayakan transformasi digital dengan
                    mengembangkan talenta teknologi kelas dunia di semua
                    tingkatan, elemen, dan sektor industri. Didorong oleh visi
                    ini, kami mengangkat calon profesional dengan memajukan
                    pendidikan teknologi, mengintegrasikan saluran bakat, dan
                    memfasilitasi proyek perusahaan.
                  </p>
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
                  <h3>
                    <b>
                      BERMINAT MENCIPTAKAN ZERO TECHNOLOGY GAP EKOSISTEM DIGITAL
                    </b>
                  </h3>
                  <p>
                    G2Academy memberdayakan transformasi digital dengan
                    mengembangkan talenta teknologi kelas dunia di semua
                    tingkatan, elemen, dan sektor industri. Didorong oleh visi
                    ini, kami mengangkat calon profesional dengan memajukan
                    pendidikan teknologi, mengintegrasikan saluran bakat, dan
                    memfasilitasi proyek perusahaan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
