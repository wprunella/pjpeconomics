import React from "react"
import { Helmet } from "react-helmet"
import Header from "./Header"
import Footer from "./Footer"
import { Container } from "react-bootstrap"

import "../styles/custom.scss"
import "../styles/global.css"
import favicon from "../images/PJPEconFavicon.svg"

export default function Layout({ children }) {
  return (
    <div className="flexarea">
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header />
      <main className="content mt-5">
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  )
}
