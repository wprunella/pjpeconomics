import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

export default function PJP() {
  return (
    <Layout>
      <Helmet title="Priscila Jimenez Prunella - Owner and CEO | PJP Economics" />
      <div>
        <h1>Priscila Jimenez Prunella</h1>
        <h3>
          <em>Owner and CEO</em>
        </h3>
        <hr></hr>
        <p>
          Priscila Jimenez Prunella is a former U.S. government economist and
          private sector consultant with over 30 years’ experience. Ms. Prunella
          has worked as an economist, evaluator, and operations manager for the
          Federal Government, focusing on the evaluation of housing programs and
          on food and drug industry regulatory issues.
        </p>
        <p>
          Ms. Prunella worked 8 years in private industry as a senior economist
          and project manager at Econometrica, Inc. At Econometrica she assisted
          with projects involving regulatory issues, and housing and urban
          development policy projects. Ms.Prunella was a project manager for
          Econometrica on HUD and SBA contracts including: The Evaluation of the
          Section 108 Loan Guarantee Program; the Evaluation of the 8(a) Small
          Business Development Program; the Evaluation of the Disaster Housing
          Assistance Program; and the Evaluation of the Office of University
          Partnership Program. Recent projects to which Ms. Prunella has
          contributed include: (1) development of regulatory impact analyses on
          behalf of the U.S. Department of Transportation, Pipeline and
          Hazardous Materials Safety Administration, Office of Pipeline Safety,
          and the Federal Motor Carrier Safety Administration.
        </p>
        <p>
          Ms. Prunella worked more than 13 years at the U.S. Department of
          Housing and Urban Development (HUD) as Senior Economist on the
          evaluation staff of HUD’s Office of Policy Development and Research
          (PD&R) and as Management Operations Officer in the Office of Field
          Policy and Management (FPM). Her experience at HUD includes designing
          and conducting evaluations of numerous housing and community
          development programs. She served as the Government Technical
          Representative (GTR) on multiple contracts, managing the production of
          studies and reports for publication and coordinating official
          conferences. As Field Operations Manager, she led field investigation
          teams in performing quality management reviews and subsequently
          disseminated best practices. She also administered the development of
          Annual Management Plans as well as the Resource Allocation and
          Estimation Process. In addition, Ms. Prunella also served as an
          industry economist for more than 15 years of experience at the U.S.
          Department of Health and Human Services (HHS), Food and Drug
          Administration (FDA), where she evaluated food, drug, cosmetics, and
          medical device industry programs. She also provided economic analyses
          related to the agency’s regulatory authority. She has a BA in
          economics, with a minor in fine arts, from Manhattanville College and
          holds an MA in economics from Northwestern University.
        </p>
        <Link to="/contact" className="btn btn-success">
          CONTACT
        </Link>
      </div>
    </Layout>
  )
}
