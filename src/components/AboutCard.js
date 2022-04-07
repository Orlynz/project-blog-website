import React from "react";
import { CardGroup, Card } from "react-bootstrap";

const AboutCard = () => {
  return (
    <div className="AboutCard">
      <div className="container">
        <div className="mt-5">
          <h3 className="text-center">Apa Yang Kami Sediakan</h3>
          <CardGroup className="mt-4">
            <Card
              style={{
                backgroundColor: "#e9e9e9",
              }}
            >
              <Card.Img
                className="p-4 w-50 mx-auto"
                variant="top"
                src="https://www.g2academy.co/img/section_icon_01.e85543b7.png"
              />
              <Card.Body className="text-center">
                <Card.Title>Card Program kelas dunia</Card.Title>
                <Card.Text className="px-4">
                  Membekali Anda dengan pengetahuan dan peluang yang dibutuhkan
                  untuk unggul di era digital.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                backgroundColor: "#e9e9e9",
              }}
            >
              <Card.Img
                className="p-4 w-50 mx-auto"
                variant="top"
                src="https://www.g2academy.co/img/section_icon_02.7c9b8dfa.png"
              />
              <Card.Body className="text-center">
                <Card.Title>Saluran bakat tingkat atas</Card.Title>
                <Card.Text className="px-4">
                  Layanan sumber strategis yang berfokus pada penyediaan bisnis
                  Anda dengan talenta digital terkemuka di industri.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                backgroundColor: "#e9e9e9",
              }}
            >
              <Card.Img
                className="p-4 w-50 mx-auto"
                variant="top"
                src="https://www.g2academy.co/img/section_icon_03.fd366f0f.png"
              />
              <Card.Body className="text-center">
                <Card.Title>Proyek perusahaan terkemuka</Card.Title>
                <Card.Text className="px-4">
                  Mendorong strategi dan inisiatif perusahaan yang bertujuan
                  untuk memberikan hasil yang berdampak bagi bisnis Anda.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
