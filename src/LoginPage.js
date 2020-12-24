import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import * as React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const LoginPage = ({ history }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassWord] = React.useState("");
  const setValue = React.useCallback(
    (event) => {
      if (event.target.getAttribute("type") === "email") {
        setEmail(event.target.value);
      } else {
        setPassWord(event.target.value);
      }
    },
    [email, password]
  );
  const validateEmailPassWord = React.useCallback(() => {
    if (email === "encora" && password === "interview") {
      localStorage.setItem("isLoggedIn", "true");
      history.push("/");
    } else {
      alert("wrong credentials");
    }
  }, [email, password]);
  const autoFillCredentials = React.useCallback(() => {
    setEmail("encora");
    setPassWord("interview");
  }, [email, password]);
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
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={setValue}
                  />
                </Col>
              </Form.Group>
              <Form.Group controlId="formHorizontalPassword">
                <Form.Label column sm={12}>
                  Password
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={setValue}
                  />
                </Col>
              </Form.Group>
              <Button variant="primary" onClick={validateEmailPassWord}>
                Submit
              </Button>
              <Button
                variant="info"
                className="ml-3"
                onClick={autoFillCredentials}
              >
                autofill credentials
              </Button>
            </Form>
          </Card.Text>
        </Card>
      </Jumbotron>
    </>
  );
};
