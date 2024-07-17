import { Card, Container, Row, Col, Image } from "react-bootstrap";
import antman from "../assets/images/superhero/antman.jpg";
import avenger from "../assets/images/superhero/avenger.jpg";
import batman from "../assets/images/superhero/batman.jpg";
import spiderman from "../assets/images/superhero/spiderman-cover.jpg";
import superman from "../assets/images/superhero/superman.jpg";

const Superhero = () => {
    return (
        <div>
        <Container>
          <br />
          <br />
          <h1 className="text-center text-white"> Superhero Movies</h1>
          <br />
          <Row>
            <Col md={4} className="MovieWrapper" id="superhero">
              <Card className="MovieImage">
                <Image src={antman} alt="Antman Movies" className="superheroImage" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Antman Movies</Card.Title>
                    <Card.Text className="text-left">This is a wider card with supporting text below . </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
  
            <Col md={4} className="MovieWrapper">
              <Card className="MovieImage">
                <Image src={avenger} alt="Avenger Movies" className="superheroImage" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Avenger Movies</Card.Title>
                    <Card.Text className="text-left">This is a wider card with supporting text below . </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
  
            <Col md={4} className="MovieWrapper">
              <Card className="MovieImage">
                <Image src={batman} alt="Batman Movies" className="superheroImage"/>
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Batman Movies</Card.Title>
                    <Card.Text className="text-left">This is a wider card with supporting text below . </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
  
            <Col md={4} className="MovieWrapper">
              <Card className="MovieImage">
                <Image src={spiderman} alt="Spiderman Movies" className="superheroImage"/>
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Spiderman Movies</Card.Title>
                    <Card.Text className="text-left">This is a wider card with supporting text below . </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
  
            <Col md={4} className="MovieWrapper">
              <Card className="MovieImage">
                <Image src={superman} alt="Superman Movies" className="superheroImage"/>
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Superman Movies</Card.Title>
                    <Card.Text className="text-left">This is a wider card with supporting text below . </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
  
            
  
          </Row>
        </Container>
      </div>
    )
}


export default Superhero;