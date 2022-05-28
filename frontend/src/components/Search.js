import React from "react";
import { Row, Container, Col, Button, Form } from "react-bootstrap";
const Search = ({handlesubmit, word, setWord}) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handlesubmit}>
            <Row>
              <Col xs={9}>
                <Form.Control 
                placeholder="Search new image ..." 
                type="text" 
                onChange = {(e) =>  setWord(e.target.value) }
                value= {word}
                />
              </Col>
              <Col>
                <Button variant="primary" type="submit"> Search </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
