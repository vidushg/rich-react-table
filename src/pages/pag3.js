import { Link } from "gatsby"
  import React, {Component} from "react";
//import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
//import Layout from "../components/layout"
//import SEO from "../components/seo"
import "../css/custom.css"

import ReactDOM from "react-dom";

import JSONData from "../../content/data.json"
import {Button, Container, OverlayTrigger, Tooltip, Table} from 'react-bootstrap'
import MultiSelect from "@khanacademy/react-multi-select";


class Pag3 extends Component {

constructor(props) {
    super(props);
    this.state = {
      selected: [],
      isLoading: true
    };
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 5000);
  }

//const [traits, setTraits, assets, setAssets, classes, setClasses] = useState(0);
/*
const updateTraits (val) {
	setTraits(val);
};

const updateAssets (val) {
	setAssets(val);
};

const updateClasses (val) {
	setClasses(val);
};*/

//multiselect

  traits = {
	"talent":"Talent",
	"spell":"Spell",
	"icon":"Icon",
	"relic":"Relic",
	"weapon":"Weapon",
	"melee":"Melee"
	}

 traitslist = Object.keys(this.traits)
	.map(key => ({
		value: key,
		label: this.traits[key],
		}));



 handleSelectedChanged = selected => {
    this.setState({ selected });
  };


 traitSelect (){
 const {selected} = this.state;

	
	return (<MultiSelect
			options={this.traitslist}
			selected={selected}
			          onSelectedChanged={this.handleSelectedChanged} />)
}


 renderSelect (){
 	console.log("hereselect")
return (<>{this.traitSelect()}</>)

}


//filter function listening for changes on traits assets classes

/**
*when change detected, call render function again with updated params
*/

 renderTable (){
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
          {this.data.content.map(info => (
            <tr>
              <td>
              <OverlayTrigger placement="right" overlay = {this.renderCardNameToolTip(info.properties)}>
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
    </>)
	
}










/*function to render a tooltip with list of traits, list of icons, and ruletext for a given card*/

 renderCardNameToolTip(val){
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

 data = JSONData;
 
  
  //const element = <div id='root'><p>hello</p>{renderTable()}</div>;
  
  element1 = <div id='root'>
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
          {this.data.content.map(info => (
            <tr>
              <td>
              <OverlayTrigger placement="right" overlay = {this.renderCardNameToolTip(info.properties)}>
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
    // return element;
 
 render() {
 
 	return(<div id="root">{this.renderTable}</div>);
 }     
};

const Exp = (props) => (
<div className="exp">
	<Pag3 />
	</div>
	)
export default Exp


//ReactDOM.render(<Exp />, document.getElementById('root'));
//const rootElement = document.getElementById("root");
//ReactDOM.render(<pag3 />, rootElement);
//export default pag3
