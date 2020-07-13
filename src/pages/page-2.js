import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import JSONData from "../../content/data.json"
import { Container} from 'react-bootstrap'

import Table from "./table"

import ReactDOM from "react-dom";
import JsonTable from "ts-react-json-table";

// "title":"cards",
 // "internalinfo":"array of all cards",
 // "content": 


const SecondPage = () => {

 
 
 var itemsOG = [
  {"id":56480,"company":"Plasmox","name":{"first":"Catherine","last":"Welch"},"position":"Regional manager","address":"888 Himrod Street, Independence, Virgin Islands, 3588","phone":"+1 (968) 567-2395","mobile":"+1 (804) 414-3278","email":"catherine.welch@plasmox.name","registered":"Wednesday, August 27, 2014 11:46 AM"},
  {"id":27368,"company":"Accidency","name":{"first":"Goff","last":"Castro"},"position":"Operations manager","address":"295 Bogart Street, Defiance, Marshall Islands, 8354","phone":"+1 (831) 510-2392","mobile":"+1 (840) 446-2807","email":"goff.castro@accidency.ca","registered":"Monday, November 9, 2015 7:37 PM"},
  {"id":44914,"company":"Viagreat","name":{"first":"Guthrie","last":"Sullivan"},"position":"Office manager","address":"802 Wythe Place, Jardine, Ohio, 7435","phone":"+1 (990) 409-3109","mobile":"+1 (875) 417-3069","email":"guthrie.sullivan@viagreat.tv","registered":"Tuesday, December 6, 2016 11:38 AM"},
  {"id":86711,"company":"Maroptic","name":{"first":"Shelley","last":"Yang"},"position":"Accountant","address":"232 Utica Avenue, Shrewsbury, New Hampshire, 8440","phone":"+1 (925) 570-2258","mobile":"+1 (942) 596-3845","email":"shelley.yang@maroptic.me","registered":"Monday, July 31, 2017 4:22 PM"},
  {"id":89136,"company":"Suretech","name":{"first":"Poole","last":"Sims"},"position":"Operations manager","address":"244 Ellery Street, Kylertown, Guam, 4806","phone":"+1 (904) 489-3723","mobile":"+1 (876) 600-3017","email":"poole.sims@suretech.info","registered":"Saturday, October 31, 2015 3:15 AM"},

];

var columns = [
    {key: 'content.uniqueID', label: 'ID'},
    {key: 'content.properties.name', label: 'Name'},
    {key: 'content.properties.class', label: 'Class'},
    {key: 'content[0].cost', label: 'Cost'},
    {key: 'title',label: 'title'}
   // {key: 'address', label: 'Address', group: 'Contact Details'},
//    {key: 'phone', label: 'Phone', group: 'Contact Details'},
  //  {key: 'mobile', label: 'Mobile', group: 'Contact Details'},
  //  {key: 'email', label: 'Email', group: 'Contact Details'},
  //  {key: 'registered', label: 'Registered'}
];


 var columnsOG = [
    {key: 'company', label: 'Company'},
    {key: 'name.first', label: 'First Name', group: 'Employee'},
    {key: 'name.last', label: 'Last Name', group: 'Employee'},
    {key: 'position', label: 'Position', group: 'Employee'},
    {key: 'address', label: 'Address', group: 'Contact Details'},
    {key: 'phone', label: 'Phone', group: 'Contact Details'},
    {key: 'mobile', label: 'Mobile', group: 'Contact Details'},
    {key: 'email', label: 'Email', group: 'Contact Details'},
    {key: 'registered', label: 'Registered'}

];

//ReactDOM.render( <JsonTable theadClassName={'thead-light'} className="table table-sm table-bordered" rows = {items} columns={columns} / > ,
//  document.getElementById('container')
//);


const element = <div id='root'><JsonTable theadClassName={'thead-light'} className="table table-sm table-bordered" rows = {JSONData} columns = {columns}  / ></div> ;



//const element = <div id='root'><Scatter data={data} options = //{options} /></div> ;


	return element


}


export default SecondPage
