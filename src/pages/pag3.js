import { Link } from "gatsby"
  import React, { Component } from "react";
//import { Table } from "reactstrap";

import Layout from "../components/layout"
import SEO from "../components/seo"

import JSONData from "../../content/data.json"
import { Container, Table} from 'react-bootstrap'


const pag3 = () => {

var state = JSONData;

  
  
 const element = <div id='root'>  <Table className="align-items-center table-flush" responsive>
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
              <th scope="row">{info.properties.name}</th>
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
