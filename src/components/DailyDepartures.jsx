import { Container, /*Table,*/ Row, Col } from "react-bootstrap";

const DailyDepartures = () => {
  return (
    <Container className="my-5 ">
      <Row>
        <h3>Daily Departures</h3>
      </Row>
      <Row className="cubaoBaguio mt-3">
        <Col sm={12} md={6} className="leftCol">
          <Row>
            <h4>Cubao to Baguio</h4>
          </Row>
          <Row>
            <Col>2:00 AM </Col>
            <Col>Regular </Col>
            <Col>600</Col>
          </Row>
          <Row>
            <Col>4:00 AM </Col>
            <Col>Premium</Col>
            <Col>700</Col>
          </Row>
          <Row>
            <Col>6:00 AM </Col>
            <Col>P2P</Col>
            <Col>900</Col>
          </Row>
          <Row>
            <Col>4:00 PM </Col>
            <Col>Regular </Col>
            <Col>600</Col>
          </Row>
          <Row>
            <Col>6:00 PM </Col>
            <Col>Premium</Col>
            <Col>700</Col>
          </Row>
          <Row>
            <Col>8:00 PM </Col>
            <Col>P2P</Col>
            <Col>900</Col>
          </Row>
        </Col>
        <Col sm={12} md={6} className="rightCol">
          <Row>
            <h4>Baguio to Cubao</h4>
          </Row>
          <Row>
            <Col>9:00 AM</Col>
            <Col>Regular </Col>
            <Col>600</Col>
          </Row>
          <Row>
            <Col>11:00 AM</Col>
            <Col>Premium</Col>
            <Col>700</Col>
          </Row>
          <Row>
            <Col>1:00 PM</Col>
            <Col>P2P</Col>
            <Col>900</Col>
          </Row>
          <Row>
            <Col>11:00 PM</Col>
            <Col>Regular </Col>
            <Col>600</Col>
          </Row>
          <Row>
            <Col>1:00 AM</Col>
            <Col>Premium</Col>
            <Col>700</Col>
          </Row>
          <Row>
            <Col>3:00 AM</Col>
            <Col>P2P</Col>
            <Col>900</Col>
          </Row>
        </Col>
      </Row>
      <Row className="pasayBaguio mt-3">
        <Col sm={12} md={6} className="leftCol">
          <Row>
            <h4>Pasay to Baguio</h4>
          </Row>
          <Row>
            <Col>4:00 AM</Col>
            <Col>Regular </Col>
            <Col>600</Col>
          </Row>
          <Row>
            <Col>6:00 AM</Col>
            <Col>Premium</Col>
            <Col>700</Col>
          </Row>
          <Row>
            <Col>8:00 AM</Col>
            <Col>P2P</Col>
            <Col>900</Col>
          </Row>
          <Row>
            <Col>6:00 PM</Col>
            <Col>Regular</Col>
            <Col>600</Col>
          </Row>
          <Row>
            <Col>8:00 PM</Col>
            <Col>Premium</Col>
            <Col>700</Col>
          </Row>
          <Row>
            <Col>10:00 PM</Col>
            <Col>P2P</Col>
            <Col>900</Col>
          </Row>
        </Col>
        <Col sm={12} md={6} className="rightCol">
          <Row>
            <h4>Baguio to Pasay</h4>
          </Row>
          <Row>
            <Col>11:00 AM</Col>
            <Col>Regular </Col>
            <Col>600</Col>
          </Row>
          <Row>
            <Col>1:00 PM</Col>
            <Col>Premium</Col>
            <Col>700</Col>
          </Row>
          <Row>
            <Col>3:00 PM</Col>
            <Col>P2P</Col>
            <Col>900</Col>
          </Row>
          <Row>
            <Col>1:00 AM</Col>
            <Col>Regular </Col>
            <Col>600</Col>
          </Row>
          <Row>
            <Col>3:00 AM</Col>
            <Col>Premium</Col>
            <Col>700</Col>
          </Row>
          <Row>
            <Col>5:00 AM</Col>
            <Col>P2P</Col>
            <Col>900</Col>
          </Row>
        </Col>
      </Row>
      <Row className="pasayTuguegarao mt-3">
        <Col sm={12} md={6} className="leftCol">
          <Row>
            <h4>Cubao to Tuguegarao</h4>
          </Row>
          <Row>
            <Col>3:00 AM</Col>
            <Col>Regular </Col>
            <Col>600</Col>
          </Row>
          <Row>
            <Col>5:00 AM</Col>
            <Col>Premium</Col>
            <Col>700</Col>
          </Row>
          <Row>
            <Col>7:00 AM</Col>
            <Col>P2P</Col>
            <Col>900</Col>
          </Row>
          <Row>
            <Col>5:00 PM</Col>
            <Col>Regular</Col>
            <Col>600</Col>
          </Row>
          <Row>
            <Col>7:00 PM</Col>
            <Col>Premium</Col>
            <Col>700</Col>
          </Row>
          <Row>
            <Col>9:00 PM</Col>
            <Col>P2P</Col>
            <Col>900</Col>
          </Row>
        </Col>
        <Col sm={12} md={6} className="rightCol">
          <Row>
            <h4>Tuguegarao to Cubao</h4>
          </Row>
          <Row>
            <Col>10:00 AM</Col>
            <Col>Regular </Col>
            <Col>600</Col>
          </Row>
          <Row>
            <Col>12:00 PM</Col>
            <Col>Premium</Col>
            <Col>700</Col>
          </Row>
          <Row>
            <Col>2:00 PM</Col>
            <Col>P2P</Col>
            <Col>900</Col>
          </Row>
          <Row>
            <Col>12:00 AM</Col>
            <Col>Regular </Col>
            <Col>600</Col>
          </Row>
          <Row>
            <Col>2:00 AM</Col>
            <Col>Premium</Col>
            <Col>700</Col>
          </Row>
          <Row>
            <Col>4:00 AM</Col>
            <Col>P2P</Col>
            <Col>900</Col>
          </Row>
        </Col>
      </Row>
      <Row className="tuguegaraoPasay mt-3">
        <Col sm={12} md={6} className="leftCol">
          <Row>
            <h4>Tuguegarao to Cubao</h4>
          </Row>
          <Row>
            <Col>3:00 AM</Col>
            <Col>Regular </Col>
            <Col>600</Col>
          </Row>
          <Row>
            <Col>5:00 AM</Col>
            <Col>Premium</Col>
            <Col>700</Col>
          </Row>
          <Row>
            <Col>7:00 AM</Col>
            <Col>P2P</Col>
            <Col>900</Col>
          </Row>
          <Row>
            <Col>5:00 PM</Col>
            <Col>Regular</Col>
            <Col>600</Col>
          </Row>
          <Row>
            <Col>7:00 PM</Col>
            <Col>Premium</Col>
            <Col>700</Col>
          </Row>
          <Row>
            <Col>9:00 PM</Col>
            <Col>P2P</Col>
            <Col>900</Col>
          </Row>
        </Col>
        <Col sm={12} md={6} className="rightCol">
          <Row>
            <h4>Tuguegarao to Cubao</h4>
          </Row>
          <Row>
            <Col>10:00 AM</Col>
            <Col>Regular </Col>
            <Col>600</Col>
          </Row>
          <Row>
            <Col>12:00 PM</Col>
            <Col>Premium</Col>
            <Col>700</Col>
          </Row>
          <Row>
            <Col>2:00 PM</Col>
            <Col>P2P</Col>
            <Col>900</Col>
          </Row>
          <Row>
            <Col>12:00 AM</Col>
            <Col>Regular </Col>
            <Col>600</Col>
          </Row>
          <Row>
            <Col>2:00 AM</Col>
            <Col>Premium</Col>
            <Col>700</Col>
          </Row>
          <Row>
            <Col>4:00 AM</Col>
            <Col>P2P</Col>
            <Col>900</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DailyDepartures;
