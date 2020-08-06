import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { CardComponent } from "../components/query"
import { Container, Table} from 'react-bootstrap'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/page-2">Go  to the JSON page</Link>

    <h1>Table here</h1>
    <CardComponent />
    <Container>
     
    <Table size = "sm" striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</Container>

  </Layout>
)

export default IndexPage
