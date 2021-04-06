import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>
          Hello world!
      </h1>
        <Link to="/about">About Page</Link>
      </div>
    </Layout>
  )
}
