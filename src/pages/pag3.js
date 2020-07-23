import { Link } from "gatsby"
  import React, { Component, useState, useRef } from "react";
//import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/layout"
import SEO from "../components/seo"

import JSONData from "../../content/data.json"
import {Button, Container, OverlayTrigger, Tooltip, Table} from 'react-bootstrap'


const pag3 = () => {

function renderToolTip(props) {
 return (
 	<Tooltip id="button-tooltip" {...props}>
 	Tooooltip
 	</Tooltip>
 	);
 
}

function renderCardNameToolTip(val){
 return (
 	  <Tooltip id="button-tooltip">	
 	  <h3 Traits />
 	  {val.traits.map(val => (<ul><li>{val.traitname}</li></ul>))}
 	  </Tooltip>
	);
}

var state = JSONData;
 
  
 const element = <div id='root'>
 	<OverlayTrigger placement="right" overlay = {renderToolTip}>
 	 <Button>HERE</Button>
 	 </OverlayTrigger>
 	<Table striped bordered hover className="align-items-center table-flush" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">cost</th>
            <th scope="col">Type</th>
            <th scope="col">Set</th>
            <th scope="col">Traits</th>
          </tr>
        </thead>
        <tbody>
          {state.content.map(info => (
            <tr>
              <td scope="row">
              <OverlayTrigger placement="right" overlay = {renderCardNameToolTip(info.properties)}>
 	 <Button>
              
              {info.properties.name}</Button>
              </OverlayTrigger></td>
              <td>{info.properties.cost}</td>
             
                <td>{info.properties.type}</td>
              
              <td>{info.properties.set}</td>
              <td>{info.properties.traits.map(val => (<ul><li>{val.traitname}</li></ul>))}
              </td>
              
            </tr>
          ))}
        </tbody>
      </Table>
      </div>;
     return element;
      
}


export default pag3
