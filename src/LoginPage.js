import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import * as React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export const LoginPage = ({ history }) => {
  return (
    <>
      <Jumbotron bsPrefix="jumbotron d-flex justify-content-center align-items-center">
        <Card className="w-50 mb-2" bg="light">
          <Card.Header>welcome to the login page</Card.Header>
          <Card.Text className=" p-3" as={"div"}>
            <Form>
              <Form.Group controlId="formHorizontalEmail">
                <Form.Label column sm={12}>
                  Email
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Form.Group>
              <Form.Group controlId="formHorizontalPassword">
                <Form.Label column sm={12}>
                  Password
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>
              <Button
                variant="primary"
                onClick={() => {
                  localStorage.setItem("isLoggedIn", "true");
                  history.push("/");
                }}
              >
                Submit
              </Button>
            </Form>
          </Card.Text>
        </Card>
      </Jumbotron>
    </>
  );
};
