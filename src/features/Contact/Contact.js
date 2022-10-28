import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, ButtonGroup, Form, Row, Col, Container, Spinner, Stack }from 'react-bootstrap/';
import './Contact.scss';

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm('service_eebfngx', 'template_kxfotyk', form.current, 'iiVDNRReRknYbSnT7')
      .then((result) => {
          form.current.reset();
          setIsLoading(false);
          setFormSubmitted(true);

          setTimeout(() => setFormSubmitted(false), 4000);
      }, (error) => {
          setIsLoading(false);
          console.log(error.text);
      });
  };

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
            <Form className="contact-form" ref={form} onSubmit={sendEmail}>
              {formSubmitted && (
                <Row className="mb-4">
                  <Form.Group as={Col}>
                    <div class="contact-msg">
                      Your message has been sent. We appreciate your interest in our services. Someone on our team will contact you soon.
                    </div>
                  </Form.Group>
                </Row>
              )}
              <Row className="mb-4">
                <Form.Group as={Col} controlId="firstName">
                  <Form.Label>* First Name</Form.Label>
                  <Form.Control name="firstName" required />
                </Form.Group>
                <Form.Group as={Col} controlId="lastName">
                  <Form.Label>* Last Name</Form.Label>
                  <Form.Control name="lastName" required />
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} controlId="email">
                  <Form.Label>* Email</Form.Label>
                  <Form.Control name="email" required />
                </Form.Group>
                <Form.Group as={Col} controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control name="phone" />
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} controlId="company">
                  <Form.Label>Company</Form.Label>
                  <Form.Control name="company" />
                </Form.Group>
                <Form.Group as={Col} controlId="projectRef">
                  <Form.Label>Project Reference</Form.Label>
                  <Form.Control name="projectRef" />
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} controlId="details">
                  <Form.Label>* Pick-Up Details</Form.Label>
                  <Form.Control as="textarea" name="details" rows={6} required />
                </Form.Group>             
              </Row>
              <ButtonGroup className="contact-form-btns">
                <Button variant="primary" type="submit" className="contact-submit">
                  {isLoading && <Spinner animation="border" variant="light" className="contact-spinner" />} Submit
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