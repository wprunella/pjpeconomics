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
      </div>
    </Layout>
  )
}
