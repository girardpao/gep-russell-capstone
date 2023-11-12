import { Container, Table, Button } from "react-bootstrap";

const SearchSched = () => {
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td className="text-center">
              <Button as="input" type="button" value="Buy Ticket" />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default SearchSched;
