import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import JSONData from "../../content/data.json"

const SecondPage = () => (
  <Layout>
    <SEO title="JSON" />
    <h1>Hi from the JSON page</h1>
        <p>Welcome to JSONtest</p>
    <Link to="/">Go back to the homepage</Link>
      <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <h1>{JSONData.title}</h1>
    <ul>
      {JSONData.content.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.uniqueID}</li>
      })}
    </ul>
  </div>
  </Layout>
)

export default SecondPage
