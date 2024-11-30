import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaEye, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <div style={{ fontFamily: "Roboto, sans-serif", backgroundColor: "#FFFFFF" }}>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(rgba(0, 51, 102, 0.7), rgba(0, 153, 204, 0.5)), url('https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#FFFFFF",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 style={{ fontFamily: "Montserrat Extra Bold", fontSize: "55px" }}>
            Transforming Healthcare, One Step at a Time
          </h1>
          <motion.p
            style={{ fontSize: "20px", color: "#E0E0E0", marginTop: "20px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Empowering lives with seamless access to quality medicines and personalized care.
          </motion.p>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              style={{
                marginTop: "30px",
                padding: "12px 30px",
                background: "linear-gradient(90deg, #0066CC, #00CCFF)",
                border: "none",
                borderRadius: "25px",
                color: "#FFFFFF",
                fontWeight: "bold",
                fontSize: "18px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
              }}
            >
              Learn More About Us
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section style={{ padding: "50px 0", backgroundColor: "#F8FAFC" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <motion.img
                src="https://images.pexels.com/photos/5910953/pexels-photo-5910953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team"
                style={{ width: "100%", borderRadius: "15px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              />
            </Col>
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <h2 style={{ fontFamily: "Poppins Bold", fontSize: "40px", color: "#003366" }}>
                  Who We Are
                </h2>
                <hr
                  style={{
                    width: "50px",
                    height: "4px",
                    background: "#0066CC",
                    border: "none",
                    marginBottom: "20px",
                  }}
                />
                <p style={{ fontSize: "18px", color: "#37474F" }}>
                  At VuMeds, we redefine healthcare by bridging the gap between quality and
                  accessibility. Since our inception, we've been on a mission to make healthcare
                  seamless, efficient, and within everyone's reach.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision & Mission Section */}
      <section
        style={{
          position: "relative",
          padding: "80px 0",
          background: "linear-gradient(to right, #D6EFFF 50%, #FFFFFF 50%, #E6FFE6)",
        }}
      >
        {/* Moving Particles */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            background: "url('https://via.placeholder.com/1920x800')",
            opacity: 0.1,
          }}
        ></div>

        <Container style={{ position: "relative", zIndex: 2 }}>
          <Row>
            {/* Vision Section */}
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div style={{ textAlign: "center" }}>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{
                      display: "inline-block",
                      padding: "20px",
                      borderRadius: "50%",
                      background: "linear-gradient(90deg, #002366, #004DFF)",
                    }}
                  >
                    <FaEye size={50} color="#FFFFFF" />
                  </motion.div>
                </div>
                <h3
                  style={{
                    fontFamily: "Montserrat Extra Bold",
                    fontSize: "38px",
                    color: "#002366",
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  Our Vision
                </h3>
                <p
                  style={{
                    fontFamily: "Roboto Slab",
                    fontSize: "20px",
                    color: "#333333",
                    marginTop: "15px",
                    textAlign: "center",
                  }}
                >
                  We envision a future where healthcare is seamless, accessible, and affordable for
                  everyone, enabling healthier and happier lives worldwide.
                </p>
              </motion.div>
            </Col>

            {/* Mission Section */}
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div style={{ textAlign: "center" }}>
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{
                      display: "inline-block",
                      padding: "20px",
                      borderRadius: "50%",
                      background: "linear-gradient(90deg, #004D40, #00FFCC)",
                    }}
                  >
                    <FaRocket size={50} color="#FFFFFF" />
                  </motion.div>
                </div>
                <h3
                  style={{
                    fontFamily: "Montserrat Extra Bold",
                    fontSize: "38px",
                    color: "#004D40",
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  Our Mission
                </h3>
                <p
                  style={{
                    fontFamily: "Roboto Slab",
                    fontSize: "20px",
                    color: "#333333",
                    marginTop: "15px",
                    textAlign: "center",
                  }}
                >
                  To deliver unparalleled healthcare services, combining innovation, care, and
                  convenience to make a real difference in people’s lives.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Add Additional Sections Similarly */}
    </div>
  );
};

export default About;