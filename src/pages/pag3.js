import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import JSONData from "../../content/data.json"
import { Container, Table} from 'react-bootstrap'


const pag3 = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/page-2">Go  to the JSON page</Link>
    <Container>   
   
   <h1>Hi from the JSON page</h1>
        <p>Welcome to JSONtest</p>
    <Link to="/">Go back to the homepage</Link>
     <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <h1>{JSONData.title}</h1>
  <ul>
     {JSONData.content.map((data, index) => {
       return (<><li key={`content_item_${index}`}>{data.uniqueID}</li>
       	<li key={`content_item_${index}`}>{data.properties.class}</li></>)
   })}
    </ul>
    </div>
</Container>
</Layout>    
 
 )

export default pag3
