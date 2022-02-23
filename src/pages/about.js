import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { Container, Image, Row, Col } from "react-bootstrap"

export default function About() {
  return (
    <Layout>
      <div>
        <Container>
          <h1>About Us</h1>
          <hr></hr>
          <p>
            PJP Economics is a minority-woman-owned small consulting firm
            located in Maryland that provides expertise in economic, regulatory,
            management, and policy consulting. PJP Economics provides analytical
            and research support to government and private clients on economic
            matters pertaining to rulemaking, economic impact, cost-benefit
            analysis, program evaluation and statistical analysis. We guide
            clients through critical strategies and performance related issues
            pertaining to public policy and regulatory alternatives.
          </p>
        </Container>
        <Row>
          <Col md={6} className="text-center mt-3 mb-3">
            <Image
              src="/pjp.png"
              alt="PJP Headshot"
              className="fluid mb-3"
              height="300"
            />
            <h3>Priscila Jimenez Prunella</h3>
            <h5>Owner and CEO</h5>
            <Link to="/priscila-jimenez-prunella" className="btn btn-success">
              Read Bio
            </Link>
          </Col>
          <Col md={6} className="text-center mt-3 mb-3">
            <Image
              src="/wjp.png"
              alt="WJP Headshot"
              className="fluid mb-3"
              height="300"
            />
            <h3>Warren J Prunella</h3>
            <h5>President</h5>
            <Link to="/warren-j-prunella" className="btn btn-success">
              Read Bio
            </Link>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}
