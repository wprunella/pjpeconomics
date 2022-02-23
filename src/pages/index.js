import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import "../styles/global.css"

export default function Home() {
  return (
    <div className="pagebackground">
      <Layout>
        <section className="text-center" class="banner-content">
          <div>
            <h2>Consulting</h2>
            <h2 className="mt-4">Economic Impact Analysis</h2>
            <h2 className="mt-4">Cost-Benefit Analysis</h2>
            <h2 className="mt-4">Project Management</h2>
            <h2 className="mt-4 mb-5">Program Evaluation</h2>
            <h4 className="mt-5 mb-3">
              We guide clients through critical strategies and performance
              related issues pertaining to public policy and regulatory
              alternatives.
            </h4>
            <Link to="/services" className="btn btn-lg btn-success">
              SERVICES
            </Link>
          </div>
        </section>
      </Layout>
    </div>
  )
}
