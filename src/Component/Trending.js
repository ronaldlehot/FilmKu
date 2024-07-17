import { Card, Container, Row, Col, Image } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everything from "../assets/images/trending/everything.jpg";
import infinite from "../assets/images/trending/infinite.jpg";
import joker from "../assets/images/trending/joker.jpg";    
import lightyear from "../assets/images/trending/lightyear.jpg";
import morbius from "../assets/images/trending/morbius.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <br />
        <h1 className="text-center text-white"> Trending Movies</h1>
        <br />

        <Row>
          <Col md={4} className="MovieWrapper" id="trending">
            <Card className="MovieImage">
              <Image src={duneImage} alt="Dune Movies" className="trandingImage" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Dune Movies</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below . </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="MovieWrapper">
            <Card className="MovieImage">
              <Image src={everything} alt="Everything Movies" className="trandingImage" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Everything Movies</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below . </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="MovieWrapper">
            <Card className="MovieImage">
              <Image src={infinite} alt="Infinite Movies" className="trandingImage"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Infinite Movies</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below . </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="MovieWrapper">
            <Card className="MovieImage">
              <Image src={joker} alt="Joker Movies" className="trandingImage"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Joker Movies</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below . </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="MovieWrapper">
            <Card className="MovieImage">
              <Image src={lightyear} alt="Lightyear Movies" className="trandingImage"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Lightyear Movies</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below . </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="MovieWrapper">
            <Card className="MovieImage">
              <Image src={morbius} alt="Morbius Movies" className="trandingImage"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Morbius Movies</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below . </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Trending;
