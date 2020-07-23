//Using Popover instead of tip

import { Link } from "gatsby"
  import React from "react";
//import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
//import Layout from "../components/layout"
//import SEO from "../components/seo"
import "../css/custom.css"

import JSONData from "../../content/data.json"
import {Button, Container, OverlayTrigger, Tooltip, Popover, Table} from 'react-bootstrap'


const page2 = () => {

/*function to render a popover with list of traits, list of icons, and ruletext for a given card*/

function renderCardNamePopover(val){
 return (
 	  <Popover id="popover-basic">
 	  <Popover.Title as="h3">{val.name}</Popover.Title>
 	  <Popover.Content>	
 	  <em> Traits </em>
 	  {val.traits.map(val => (<ul><li>{val.traitname}</li></ul>))}<br />
 	  <em>Icons</em> <br />
 	  {val.testicons.map(val => (<ul><li>{val.iconname}</li></ul>))} <br />
 	  <p>{val.ruletext}</p>
 	  </Popover.Content>
 	  </Popover>
	);
}

var state = JSONData;
 
  
 const element = <div id='root'>
 	<Table striped bordered hover className="align-items-center table-flush" responsive>
         <thead className="thead-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">Cost</th>
            <th scope="col">Type</th>
            <th scope="col">Set</th>
          </tr>
        </thead>
        <tbody>
          {state.content.map(info => (
            <tr>
              <td>
              <OverlayTrigger placement="right" overlay = {renderCardNamePopover(info.properties)}>
 	 <Button variant="Link">
              
              {info.properties.name}</Button>
              </OverlayTrigger></td>
              
              <td><ul class="comma-list">
              {info.properties.class.map(val => (<li>{val.classname}</li>))}</ul>
              </td>
              
              <td>{info.properties.cost}</td>
             
                <td>{info.properties.type}</td>
              
              <td>{info.properties.set}</td>
              
            </tr>
          ))}
        </tbody>
      </Table>
      </div>;
     return element;
      
}


export default page2
