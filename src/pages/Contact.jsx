import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Container
      fluid
      style={{
        background: "linear-gradient(135deg, #3498db, #9b59b6)",
        minHeight: "100vh",
        padding: 0,
        color: "#fff",
      }}
    >
      <Row className="align-items-center" style={{ minHeight: "100vh" }}>
        {/* Left Section */}
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "#fefefe", borderRadius: "0 30px 30px 0" }}
        >
          <motion.div
            className="p-5 shadow-lg rounded"
            style={{
              backgroundColor: "#ffffff",
              maxWidth: "450px",
              width: "90%",
              borderRadius: "15px",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-center mb-4"
              style={{
                fontFamily: "Montserrat",
                fontSize: "32px",
                color: "#2c3e50",
              }}
            >
              Contact Us
            </h1>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  style={{
                    padding: "15px",
                    borderRadius: "10px",
                    border: "1px solid #d1d1d1",
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Your Email Address"
                  style={{
                    padding: "15px",
                    borderRadius: "10px",
                    border: "1px solid #d1d1d1",
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Your Contact Number"
                  style={{
                    padding: "15px",
                    borderRadius: "10px",
                    border: "1px solid #d1d1d1",
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your Message"
                  style={{
                    padding: "15px",
                    borderRadius: "10px",
                    border: "1px solid #d1d1d1",
                  }}
                />
              </Form.Group>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-100"
                style={{
                  background:
                    "linear-gradient(135deg, #3498db, #2ecc71)",
                  color: "#fff",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "16px",
                }}
              >
                Send Message
              </motion.button>
            </Form>
          </motion.div>
        </Col>

        {/* Right Section */}
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
          style={{
            textAlign: "center",
            position: "relative",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              style={{
                fontFamily: "Montserrat",
                fontSize: "40px",
                marginBottom: "20px",
                color: "#fff",
              }}
            >
              We're Here to Help!
            </h2>
            <p style={{ fontSize: "18px", color: "#f0f0f0" }}>
              Got any questions or feedback? Reach out to us now!
            </p>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
