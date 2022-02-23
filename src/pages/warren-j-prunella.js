import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

export default function WJP() {
  return (
    <Layout>
      <Helmet title="Warren J Prunella - President | PJP Economics" />
      <div>
        <h1>Warren J Prunella</h1>
        <h3>
          <em>President</em>
        </h3>
        <hr></hr>
        <p>
          Warren is a former federal government Senior Executive and Chief
          Economist at the Consumer Product Safety Commission, is widely
          recognized as an expert in regulatory and cost benefit analysis. He
          has vast experience with numerous federal agencies, private sector
          consulting, and taught economics in several colleges and universities.
          He is applying this experience to support client decision making.
        </p>
        <p>
          As Vice President at Econometrica, Inc. he directed numerous projects
          at the Departments of Transportation, Homeland Security, Labor,
          Housing and Urban Development, and the Corporation for National and
          Community Service.
        </p>
        <p>
          At CPSC he served on the Regulatory Working Group that developed the
          guidelines (now known as OMB Circular A-4) for complying with
          Executive Order 12866. He has had shorter stints at BLS and BEA. Prior
          to his government positions he was Assistant Professor of Economics at
          Canisius College and has also held teaching positions at the State U.
          of NY at Buffalo, Trinity University (Washington, DC), Elmhurst
          College (Illinois), Northwestern University (evening division), and
          State U. College of NY at Buffalo. He holds a BA from SUNY-Buffalo and
          a MA and ABD in economics from Northwestern University.
        </p>
        <Link to="/contact" className="btn btn-success">
          CONTACT
        </Link>
      </div>
    </Layout>
  )
}
