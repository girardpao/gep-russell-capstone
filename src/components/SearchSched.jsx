import { Container, Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./SearchSched.module.css";
import http from "../lib/http";

const SearchSched = () => {
  const [busSched, setBusSched] = useState([]);

  useEffect(() => {
    getBusSched();
    return () => {};
  }, []);

  async function getBusSched() {
    const api = http();
    const response = await api.get("/buses");
    console.log(response.data.data);
    setBusSched(response.data.data);
  }
  return (
    <Container>
      <Table bordered>
        <thead>
          <tr>
            <th>Departure Time</th>
            <th>Bus Type</th>
            <th>Fare</th>
          </tr>
        </thead>
        <tbody>
          {busSched.map((buses, index) => {
            return (
              <tr key={index} value={buses.id}>
                <td>{buses.departure_time}</td>
                <td>{buses.bus_type}</td>
                <td>₱{buses.price}</td>
                <td className="text-center">
                  <Button
                    className={styles.bookTicket}
                    as={Link}
                    to="/reservation"
                  >
                    Buy Ticket
                  </Button>
                  {/* <Button as="input" type="button" value="Buy Ticket" /> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default SearchSched;
