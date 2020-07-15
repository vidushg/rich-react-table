import React from "react";
import TableHeader from "../components/tableheader";
import TableBody from "../components/tablebody";
import JSONData from "../../content/data.json";


class Table extends React.Component {
//  state1 = {
 //   columns: Object.keys(JSONData.content[0].properties[0]).map(value => ({
//      key: value
 //   })),
  //  data: JSONData
 // };
   
   state = {
   	columns: Object.keys(JSONData.content[0].properties), data: JSONData
   };

  render() {
  //const obj = JSON.parse(JSONData);
  //document.getElementById('message').innerHTML = obj;
  {console.log("Printing keys")}
  {console.log(JSONData.content[0])}
  {console.log("Printing data")}
  {console.log(this.state.data)}
  {console.log("Printing columns")}
  {console.log(this.state.columns)}
    return (<>
    <p id = "message"></p>
    <p> json <script>JSON.parse(JSONData).title</script> </p>
      <table>
        <TableHeader columns={this.state.columns} />
        <TableBody
          columns={this.state.columns}
          data={this.state.data}
        />
      //  {console.log(this.state.columns)}
      </table>
      </>
    );
  }
}

export default Table;

