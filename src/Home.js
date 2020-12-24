import * as React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export const HomePage = () => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-start ">
      <Card className="col-10  p-0 mt-5 h-75" bg="light">
        <Card.Header>G Notes</Card.Header>
        <Card.Body as="div" className="p-0 ">
          <Row className="w-100 m-0 p-0 height-overflow">
            <Col
              xl={3}
              lg={3}
              md={3}
              sm={3}
              xs={3}
              className="p-0 border-right  height-overflow overflow-auto"
            >
              <ListGroup>
                <ListGroup.Item className="rounded-0 border-top-0 border-left-0 border-right-0">
                  <Row>
                    <Col className="flex-grow-1 ">title</Col>
                    <Col className="flex-grow-0 p-0 m-0">close</Col>
                  </Row>
                  <Row className="pl-3">description</Row>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xl={9} lg={9} md={9} sm={9} xs={9} className="p-0 pl-3 pr-3">
              <Form className="position-relative ">
                <Form.Group
                  controlId="exampleForm.ControlInput1"
                  className="mt-3 position-relative "
                >
                  <Form.Label>Title:</Form.Label>
                  <Form.Control type="title" />
                </Form.Group>
                <Form.Group
                  controlId="exampleForm.ControlInput1"
                  className="position-relative "
                >
                  <Form.Label>Body</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button type="primary">Save</Button>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
