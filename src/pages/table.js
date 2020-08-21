import React from "react"
import { graphql } from "gatsby"
//import Tooltip from "../components/Tooltip"
import {Button, Container, OverlayTrigger, Table, Tooltip} from 'react-bootstrap'


function renderCardNameToolTip(props) {
 return (
 	  <div className='item'><Tooltip id="button-tooltip">	
 	  <em> Traits </em>
 	  {props.traits.map(props => (<ul><li>{props.traitname}</li></ul>))}<br />
 	  <em>Icons</em> <br />
 	  {props.testicons.map(props => (<ul><li>{props.iconname}</li></ul>))} <br />
 	  <p>{props.ruletext}</p>
 	  </Tooltip></div>
	)
}

const table = ({ data }) =>  { 
const cards = data;




console.log(cards);
return(
<div>
{console.log("hello")}
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
          {cards.allCleanJson.edges.map(node => (
            <tr>
              <td>
              <OverlayTrigger placement="right" overlay = <Tooltip id="button-tooltip">	
 	  <em> Traits </em>
 	  {node.node.properties.traits.map(props => (<ul><li>{props.traitname}</li></ul>))}<br />
 	  <em>Icons</em> <br />
 	  {node.node.properties.testicons.map(props => (<ul><li>{props.iconname}</li></ul>))} <br />
 	  <p>{node.node.properties.ruletext}</p>
 	  </Tooltip>> 
 	 <Button variant="Link">
              
              {node.node.properties.name}</Button>
              </OverlayTrigger></td>
              
              <td><ul class="comma-list">
              {node.node.properties.class.map(val => (<li>{val.classname}</li>))}</ul>
              </td>
              
              <td>{node.node.properties.cost}</td>
             
                <td>{node.node.properties.type}</td>
              
              <td>{node.node.properties.set}</td>
              
            </tr>
          ))}
        </tbody>
      </Table>
</div>)
}

export const query = graphql`
 query Filterquery  {
  allCleanJson(filter: {properties: {traits: {elemMatch: {traitname: {in: "Item"}}}}}) {
    edges {
      node {
        properties {
          name
          traits {
            traitname
          }
          class {
            classname
          }
          cost
          credits
          encounter
          flavortext
          hidden
          image
          health
          ruletext
          ruling
          set
          sanity
          setnumber
          slot {
            slotname
          }
          testicons {
            iconname
          }
          type
          xp
        }
      }
    }
  }
}
`

export default table
