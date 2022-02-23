import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

export default function NoPage() {
  return (
    <Layout>
      <Helmet title="Page Not Found | PJP Economics" />
      <div>
        <h2>Sorry! Page does not exist.</h2>
        <p>Please try another page.</p>
      </div>
    </Layout>
  )
}
