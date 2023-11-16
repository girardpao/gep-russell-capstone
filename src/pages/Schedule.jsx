import { Container, /*Table,*/ Row, Col } from "react-bootstrap";
import Sched from "../components/Schedule-hero";

const Schedule = () => {
  return (
    <div>
      {/* <h2 className="text-center mt-5">Daily Bus Schedule</h2> */}
      <Sched />
      <Container className="my-5">
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
    </div>
  );
};

export default Schedule;

// Table no longer in use

{
  /* <Container>
        <h3 className="mt-5">Cubao to Baguio Departure</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th scope="col">Schedule</th>
              <th scope="col">Destination</th>
              <th scope="col">Bus Type</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>2:00 AM</th>
              <td>Baguio</td>
              <td>Regular</td>
              <td>600</td>
            </tr>
            <tr>
              <th scope="row">4:00 AM</th>
              <td>Baguio</td>
              <td>Premium</td>
              <td>700</td>
            </tr>
            <tr>
              <th scope="row">6:00 AM</th>
              <td>Baguio</td>
              <td>Express</td>
              <td>900</td>
            </tr>
            <tr>
              <th scope="row">4:00 PM</th>
              <td>Baguio</td>
              <td>Regular</td>
              <td>600</td>
            </tr>
            <tr>
              <th scope="row">6:00 PM</th>
              <td>Baguio</td>
              <td>Premium</td>
              <td>700</td>
            </tr>
            <tr>
              <th scope="row">8:00 PM</th>
              <td>Baguio</td>
              <td>Express</td>
              <td>900</td>
            </tr>
          </tbody>
        </Table>
        <h3 className="mt-4">Baguio to Cubao Departure</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th scope="col">Schedule</th>
              <th scope="col">Destination</th>
              <th scope="col">Bus Type</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">9:00 AM</th>
              <td>Cubao</td>
              <td>Regular</td>
              <td>600</td>
            </tr>
            <tr>
              <th scope="row">11:00 AM</th>
              <td>Cubao</td>
              <td>Premium</td>
              <td>700</td>
            </tr>
            <tr>
              <th scope="row">1:00 PM</th>
              <td>Cubao</td>
              <td>Premium</td>
              <td>900</td>
            </tr>
            <tr>
              <th scope="row">11:00 PM</th>
              <td>Cubao</td>
              <td>Regular</td>
              <td>600</td>
            </tr>
            <tr>
              <th scope="row">1:00 AM</th>
              <td>Cubao</td>
              <td>Premium</td>
              <td>700</td>
            </tr>
            <tr>
              <th scope="row">3:00 AM</th>
              <td>Cubao</td>
              <td>Premium</td>
              <td>900</td>
            </tr>
          </tbody>
        </Table>
        <h3 className="mt-5">Pasay to Baguio Departure</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th scope="col">Schedule</th>
              <th scope="col">Destination</th>
              <th scope="col">Bus Type</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">4:00 AM</th>
              <td>Baguio</td>
              <td>Regular</td>
              <td>600</td>
            </tr>
            <tr>
              <th scope="row">6:00 AM</th>
              <td>Baguio</td>
              <td>Premium</td>
              <td>700</td>
            </tr>
            <tr>
              <th scope="row">8:00 AM</th>
              <td>Baguio</td>
              <td>Express</td>
              <td>900</td>
            </tr>
            <tr>
              <th scope="row">6:00 PM</th>
              <td>Baguio</td>
              <td>Regular</td>
              <td>600</td>
            </tr>
            <tr>
              <th scope="row">8:00 PM</th>
              <td>Baguio</td>
              <td>Premium</td>
              <td>700</td>
            </tr>
            <tr>
              <th scope="row">10:00 PM</th>
              <td>Baguio</td>
              <td>Express</td>
              <td>900</td>
            </tr>
          </tbody>
        </Table>
        <h3 className="mt-4">Baguio to Pasay Departure</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th scope="col">Schedule</th>
              <th scope="col">Destination</th>
              <th scope="col">Bus Type</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">11:00 AM</th>
              <td>Pasay</td>
              <td>Regular</td>
              <td>600</td>
            </tr>
            <tr>
              <th scope="row">1:00 PM</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>700</td>
            </tr>
            <tr>
              <th scope="row">3:00 PM</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>900</td>
            </tr>
            <tr>
              <th scope="row">1:00 AM</th>
              <td>Pasay</td>
              <td>Regular</td>
              <td>600</td>
            </tr>
            <tr>
              <th scope="row">3:00 AM</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>700</td>
            </tr>
            <tr>
              <th scope="row">5:00 AM</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>900</td>
            </tr>
          </tbody>
        </Table>
        <h3 className="mt-4">Pasay to Baguio Departure</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th scope="col">Schedule</th>
              <th scope="col">Destination</th>
              <th scope="col">Bus Type</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">11:00 AM</th>
              <td>Pasay</td>
              <td>Regular</td>
              <td>600</td>
            </tr>
            <tr>
              <th scope="row">1:00 PM</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>700</td>
            </tr>
            <tr>
              <th scope="row">3:00 PM</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>900</td>
            </tr>
            <tr>
              <th scope="row">1:00 AM</th>
              <td>Pasay</td>
              <td>Regular</td>
              <td>600</td>
            </tr>
            <tr>
              <th scope="row">3:00 AM</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>700</td>
            </tr>
            <tr>
              <th scope="row">5:00 AM</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>900</td>
            </tr>
          </tbody>
        </Table>
        <h3 className="mt-4">Baguio to Pasay Departure</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th scope="col">Schedule</th>
              <th scope="col">Destination</th>
              <th scope="col">Bus Type</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">11:00 AM</th>
              <td>Pasay</td>
              <td>Regular</td>
              <td>600</td>
            </tr>
            <tr>
              <th scope="row">1:00 PM</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>700</td>
            </tr>
            <tr>
              <th scope="row">3:00 PM</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>900</td>
            </tr>
            <tr>
              <th scope="row">1:00 AM</th>
              <td>Pasay</td>
              <td>Regular</td>
              <td>600</td>
            </tr>
            <tr>
              <th scope="row">3:00 AM</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>700</td>
            </tr>
            <tr>
              <th scope="row">5:00 AM</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>900</td>
            </tr>
          </tbody>
        </Table>
        <h3 className="mt-4">Pasay to Tuguegarao Departure</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th scope="col">Schedule</th>
              <th scope="col">Destination</th>
              <th scope="col">Bus Type</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">11:00 AM</th>
              <td>Pasay</td>
              <td>Regular</td>
              <td>600</td>
            </tr>
            <tr>
              <th scope="row">1:00 PM</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>700</td>
            </tr>
            <tr>
              <th scope="row">3:00 PM</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>900</td>
            </tr>
            <tr>
              <th scope="row">1:00 AM</th>
              <td>Pasay</td>
              <td>Regular</td>
              <td>600</td>
            </tr>
            <tr>
              <th scope="row">3:00 AM</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>700</td>
            </tr>
            <tr>
              <th scope="row">5:00 AM</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>900</td>
            </tr>
          </tbody>
        </Table>
        <h3 className="mt-4">Tuguegarao to Pasay Departure</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th scope="col">Schedule</th>
              <th scope="col">Destination</th>
              <th scope="col">Bus Type</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">12:00 PM</th>
              <td>Pasay</td>
              <td>Regular</td>
              <td>600</td>
            </tr>
            <tr>
              <th scope="row">2:00 PM</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>700</td>
            </tr>
            <tr>
              <th scope="row">4:00 PM</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>900</td>
            </tr>
            <tr>
              <th scope="row">2:00 AM</th>
              <td>Pasay</td>
              <td>Regular</td>
              <td>600</td>
            </tr>
            <tr>
              <th scope="row">4:00 AM</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>700</td>
            </tr>
            <tr>
              <th scope="row">6:00 AM</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>900</td>
            </tr>
          </tbody>
        </Table>
      </Container> */
}
