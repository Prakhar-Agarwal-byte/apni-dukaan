import { Container, Form, DropdownButton, Dropdown } from "react-bootstrap";

const SearchAndSort = ({ setSearchTerm, setSortOption }) => {
  return (
    <Container className="mt-4">
      <div className="d-flex">
        <Form.Control
          type="text"
          placeholder="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <DropdownButton className="ml-2" title="Sort">
          <Dropdown.Item onSelect={(e) => setSortOption("CHAR_ASC")}>
            Name (A-Z)
          </Dropdown.Item>
          <Dropdown.Item onSelect={(e) => setSortOption("CHAR_DSC")}>
            Name (Z-A)
          </Dropdown.Item>
          <Dropdown.Item onSelect={(e) => setSortOption("PRICE_ASC")}>
            Price (low-high)
          </Dropdown.Item>
          <Dropdown.Item onSelect={(e) => setSortOption("PRICE_DSC")}>
            Price (high-low)
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </Container>
  );
};

export default SearchAndSort;
