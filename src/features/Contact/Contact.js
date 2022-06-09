import { Button, ButtonGroup, Form, Row, Col, Container, Stack }from 'react-bootstrap/';
import './Contact.scss';

function Contact() {
  return (
    <Container className="contact" fluid>
      <Row className="contact-row justify-content-md-center">
        <Col className="contact-col" xxl="8">
          <Stack className="contact-gen">
            <h2 className="contact-title">General Inquiries</h2>
            <div className="contact-address">
              <h3 className="contact-office">Fort Worth Office</h3>
              301 Commerce Street, Suite 240 <br />
              Fort Worth, Texas 76102
              <div className="contact-phone">
                Call: <a href="tel:817-870-0330">817-870-0330</a>
              </div>
              <a href="mailto:manuel@falcondocs.com" className="contact-email">manuel@falcondocs.com</a>
            </div>
          </Stack>
          <Stack className="contact-pickup">
            <h2 className="contact-title">Schedule a Pick-Up</h2>
            <Form className="contact-form">
              <Row className="mb-4">
                <Form.Group as={Col} controlId="firstName">
                  <Form.Label>* First Name</Form.Label>
                  <Form.Control required />
                </Form.Group>
                <Form.Group as={Col} controlId="lastName">
                  <Form.Label>* Last Name</Form.Label>
                  <Form.Control required />
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} controlId="email">
                  <Form.Label>* Email</Form.Label>
                  <Form.Control required />
                </Form.Group>
                <Form.Group as={Col} controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} controlId="company">
                  <Form.Label>Company</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="projectRef">
                  <Form.Label>Project Reference</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} controlId="details">
                  <Form.Label>* Pick-Up Details</Form.Label>
                  <Form.Control as="textarea" rows={6} required />
                </Form.Group>             
              </Row>
              <ButtonGroup className="contact-form-btns">
                <Button variant="primary" type="submit" className="contact-submit">
                  Submit
                </Button>
              </ButtonGroup>
            </Form>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;