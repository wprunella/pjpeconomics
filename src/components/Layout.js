import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"

import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="flexarea">
      <Header />
      <main className="content mt-5">
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  )
}
