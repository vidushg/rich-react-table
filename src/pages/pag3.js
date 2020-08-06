import {useStaticQuery, StaticQuery, graphql, Link } from "gatsby"
import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "../css/custom.css"

import ReactDOM from "react-dom";

import JSONData from "../../content/data.json"
import {Button, Container, OverlayTrigger, Tooltip, Table} from 'react-bootstrap'
import MultiSelect from "react-multi-select-component";
import select from "./table.js"
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { CardComponent } from "../components/query"





 
const table = ({data}) => {


console.log("helloo"+{data})


 const traits = {
	"talent":"Talent",
	"spell":"Spell",
	"icon":"Icon",
	"relic":"Relic",
	"weapon":"Weapon",
	"melee":"Melee"
	}

 const traitslist = Object.keys(traits)
	.map(key => ({
		value: key,
		label: traits[key],
		}));



 function handleSelectedChanged ({selected}) {
    this.setState({ selected });
  };

  // [selected, setSelected] = useState([]);
//state=this.state.bind(this);
 function traitSelect (){

 
  return (
    <select props={this.traitslist} />
  );
}


function renderSelect (){
 	console.log({data})
return (<>{this.traitSelect()}</>)

}


// function listening for changes on traits assets classes

/**
*when change detected, call render function again with updated params
*/

 const cards = data.allCleanJson;

function renderTable (){
 return (<>

 	{this.renderSelect()}
	
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
          {this.cards.edges.map(node => (
            <tr>
              <td>
              <OverlayTrigger placement="right" overlay = {this.renderCardNameToolTip(node.properties)}>
 	 <Button variant="Link">
              
              {node.properties.name}</Button>
              </OverlayTrigger></td>
              
              <td><ul class="comma-list">
              {node.properties.class.map(val => (<li>{val.classname}</li>))}</ul>
              </td>
              
              <td>{node.properties.cost}</td>
             
                <td>{node.properties.type}</td>
              
              <td>{node.properties.set}</td>
              
            </tr>
          ))}
        </tbody>
      </Table>
    </>)
	
}


/*function to render a tooltip with list of traits, list of icons, and ruletext for a given card*/

function renderCardNameToolTip(val){
 return (
 	  <Tooltip id="button-tooltip">	
 	  <em> Traits </em>
 	  {val.traits.map(val => (<ul><li>{val.traitname}</li></ul>))}<br />
 	  <em>Icons</em> <br />
 	  {val.testicons.map(val => (<ul><li>{val.iconname}</li></ul>))} <br />
 	  <p>{val.ruletext}</p>
 	  </Tooltip>
	);
}


const element = <div id="root">{this.renderTable()}</div>;
    
};

export const query = graphql`
 query TraitQuery  {
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
`;




const pag3 = () => {

const r = new table().element;

return r;

}

export  default pag3

//ReactDOM.render(<Exp />, document.getElementById('root'));
//const rootElement = document.getElementById("root");
//ReactDOM.render(<pag3 />, rootElement);
//export default pag3
