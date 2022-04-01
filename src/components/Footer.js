import React from "react";

const Footer = () => {
  return (
    <footer className="text-white text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">G2 | Academy</h5>
            <hr />
            <p>
              Kami memimpikan para penggemar teknologi berkelas dunia dengan
              memajukan pendidikan teknologi, mengidentifikasi talenta unggul,
              dan mendukung diskusi yang termutakhir.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <hr />

            <ul className="list-unstyled mb-0">
              <li>
                <i class="bi bi-envelope"></i> cs@g2academy.co
              </li>
              <li>
                <i class="bi bi-whatsapp"></i> +62 813-8822-3105
              </li>
              <li>
                <i class="bi bi-facebook"></i> G2Academy
              </li>
              <li>
                <i class="bi bi-instagram"></i> g2academyindonesia
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Object</h5>
            <hr />
            <p>
              Wisma Barito Pacific, Tower A Level Ground Jl. Letjen S. Parman,
              Slipi, Jakarta Barat, DKI Jakarta, Indonesia
            </p>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright :
        <a className="text-white" href="https://mdbootstrap.com/">
          PT Generasi Teknologi Buana
        </a>
      </div>
    </footer>
  );
};

export default Footer;
