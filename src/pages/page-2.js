import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import JSONData from "../../content/data.json"
import { Container} from 'react-bootstrap'

import Table from "./table"

import ReactDOM from "react-dom";


function SecondPage () {

 return (
    <div id="root">
      <Table />
    </div>
  );
}
  
  
   // render Table();
    
    
const rootElement = document.getElementById("root");
//ReactDOM.render(<SecondPage />);

    
 //    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
//    <h1>{JSONData.title}</h1>
 // <ul>
   //  {JSONData.content.map((data, index) => {
     //  return <li key={`content_item_${index}`}>{data.uniqueID}</li>
 //  })}
  //  </ul>
 //      <Table striped bordered hover>
   // <thead>
//<tr>
//<th>Name</th>
//<th>Class</th>
//<th>Cost</th>
//<th>Type</th>
//</tr>
//    </thead>
//    <tbody>
//    <tr>
//    {JSONData.content.map((data, index) => {
//        return (<React.Fragment key={`content_item_${index}`}>
//        <tr>
//        <td> {data[key].properties.name}</td>
//        <td>{data.properties.class}</td>
//        <td> {data.cost}</td>
//        <td>{data.type}</td>
//        </tr>
//        </React.Fragment>)})};
// ;;   </tr>
//    </tbody>
//    </Table>
 //;; </div>
 
 //<script>
 //renderTableData() {
 //	return JSONData.content.map((data, index) => {
 //	return(
 //		<tr key={'content_item_${index}'}>
 //			<td>{data.properties.class}</td>
 //			<td>{data.properties.name}</td>
 //		</tr>
 //	)
 //	})
 //	}
// render(){
 //	return(
 //		<div>
 //		<table>
 //			<tbody>
 //				{this.renderTableData()}
 //			</tbody>
 //		</table>
 //		</div>
 //	)
 //	}
 //	</script>
  //</Container>
//  </Layout>


export default SecondPage
