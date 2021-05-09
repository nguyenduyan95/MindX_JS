import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table1: {
        header: "Todo",
        tableData: ["Items 1", "Items 2", "Items 3", "Items 4", "Items 5"]
      },
      table2: {
        header: "Completed",
        tableData: []
      }
    };
  }

  rendertable1() {
    return this.state.table1.tableData.map((Element, index) => {
      return (
        <div
          key={index}
          onClick={() => {
            this.removeItemtable1(index);
          }}
        >
          {Element}
        </div>
      );
    });
  }

  rendertable2() {
    return this.state.table2.tableData.map((Element, index) => {
      return (
        <div
          key={index}
          onClick={() => {
            this.removeItemtable2(index);
          }}
        >
          {Element}
        </div>
      );
    });
  }

  removeItemtable1(index) {
    //set state table 1
    const removeItemtable1 = this.state.table1.tableData[index];
    const newdatatable1 = this.state.table1.tableData;
    newdatatable1.splice(index, 1);

    this.setState({
      table1: {
        header: this.state.table1.header,
        tableData: newdatatable1
      }
    });

    //set state table 2
    const intialDataTable2 = [...this.state.table2.tableData];
    const newdatatable2 = [];
    newdatatable2.push(removeItemtable1);

    const tableData2 = intialDataTable2.concat(newdatatable2);
    console.log(tableData2);
    this.setState({
      table2: {
        header: this.state.table2.header,
        tableData: tableData2
      }
    });
  }

  removeItemtable2(index) {
    const removeItemtable2 = this.state.table2.tableData[index];
    const newdatatable2 = this.state.table2.tableData;
    newdatatable2.splice(index, 1);

    this.setState({
      table2: {
        header: this.state.table2.header,
        tableData: newdatatable2
      }
    });

    const intialDataTable1 = [...this.state.table1.tableData];
    const newdatatable1 = [];
    newdatatable1.push(removeItemtable2);

    const tableData1 = intialDataTable1.concat(newdatatable1);
    this.setState({
      table1: {
        header: this.state.table1.header,
        tableData: tableData1
      }
    });
  }

  render() {
    return (
      <div class="App">
        <h1>Todo App</h1>
        <div class="sub-app">
          <div class="Todo">
            <h2>{this.state.table1.header}</h2>
            <ul>{this.rendertable1()}</ul>
          </div>
          <div class="complete">
            <h2>{this.state.table2.header}</h2>
            <ul>{this.rendertable2()}</ul>           
          </div>
        </div>
      </div>
    );
  }
}

export default App;
