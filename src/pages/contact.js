import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

export default function Contact() {
  return (
    <Layout>
      <Helmet title="Contact Us | PJP Economics" />
      <div>
        <h1>Contact Us</h1>
        <hr></hr>
        <p>
          <strong>PJP Economics</strong>
          <div>11505 Luxmanor Road</div>
          <div>Rockville, MD 20852</div>
        </p>
        <p>
          <strong>Phone: </strong>301-231-7944
        </p>
        <p>
          <a
            href="mailto: %69%6E%66%6F%40%70%6A%70%65%63%6F%6E%6F%6D%69%63%73%2E%63%6F%6D"
            className="btn btn-success"
          >
            Email Us
          </a>
        </p>
      </div>
    </Layout>
  )
}
