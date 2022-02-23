import React from "react"
import { Container } from "react-bootstrap"
import "../styles/global.css"

export default function Footer() {
  return (
    <footer className="text-center mt-5">
      <Container className="mt-5 mb-5">
        <p>Copyright {new Date().getFullYear()} - PJP Economics</p>
      </Container>
    </footer>
  )
}
