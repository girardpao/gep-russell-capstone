import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

const Schedule = () => {
  return (
    <div>
      <h2 className="text-center mt-5">Daily Bus Schedule</h2>
      <Container>
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
              <th scope="row">1</th>
              <td>Pasay</td>
              <td>Regular</td>
              <td>600</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>700</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>900</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Pasay</td>
              <td>Regular</td>
              <td>600</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>700</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Pasay</td>
              <td>Premium</td>
              <td>900</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Schedule;
