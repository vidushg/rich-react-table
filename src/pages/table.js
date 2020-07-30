import React, { Component } from "react";
import ReactDOM from "react-dom";
import Multiselect from "@khanacademy/react-multi-select";

//import "./styles.css";

class App extends Component {
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

  options = [
    { label: "KPI Degradtion", value: "kpi_degradation" },
    { label: "Sleeping Cell", value: "sleeping_cell" },
    { label: "Anomaly", value: "anomaly" },
    { label: "Label1", value: "label_1" },
    { label: "Label2fgfgfgfghfghgh", value: "label_2" },
    { label: "Label3", value: "label_3" },
    { label: "Label4", value: "label_4" },
    { label: "Label5", value: "label_5" }
  ];

  handleSelectedChanged = selected => {
    this.setState({ selected });
  };

  render() {
    const { selected, isLoading } = this.state;
    return (
      <div>
        <h1>Multiselect dropdown</h1>
        <Multiselect
          options={this.options}
          onSelectedChanged={this.handleSelectedChanged}
          selected={selected}
          isLoading={isLoading}
          disabled={isLoading}
          disableSearch={true}
          overrideStrings={{
            selectSomeItems: "do me a favor by selecting something",
            allItemsAreSelected: "You have gone nuts... all selected",
            selectAll: "do u wanna select all of them?",
            search: "Fantasy search"
          }}
        />
        {selected.join(", ")}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

