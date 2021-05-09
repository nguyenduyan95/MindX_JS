import React from "react";

import "./App.css";

class App1 extends React.Component {
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

  // renderHeader = () => {
  //   return (
  //     <tr>
  //       <th>{this.state.table1.header}</th>
  //     </tr>
  //   );
  // };

  // renderTableData = () => {
  //   return this.state.table1.tableData.map((value, rowIndex) => {
  //     return (
  //       <tr key={rowIndex}>
  //         <td
  //           onClick={() => {
  //             this.removeRowTable(rowIndex);
  //           }}
  //         >
  //           {value}
  //         </td>
  //       </tr>
  //     );
  //   });
  // };

  renderTable1() {
    return (
      <table>
        <thead>
          <tr>
            <th>{this.state.table1.header}</th>
          </tr>
        </thead>
        <tbody>
          {this.state.table1.tableData.map((value, rowIndex) => {
            return (
              <tr key={rowIndex}>
                <td onClick={() => {
                    this.removeRowTable1(rowIndex);
                  }}>
                  {value}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  renderTable2() {
    return (
      <table>
        <thead>
          <tr>
            <th>{this.state.table2.header}</th>
          </tr>
        </thead>
        <tbody>
          {this.state.table2.tableData.map((value, rowIndex) => {
            return (
              <tr key={rowIndex}>
                <td
                  onClick={() => {
                    this.removeRowTable2(rowIndex);
                  }}
                >
                  {value}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  removeRowTable1(index) {
    const removeItemTable1 = this.state.table1.tableData[index];
    const newDataTable1 = this.state.table1.tableData;
    newDataTable1.splice(index, 1);

    this.setState({
      table1: {
        header: this.state.table1.header,
        tableData: newDataTable1
      }
    });

    const intialDataTable2 = [...this.state.table2.tableData];
    const newDataTable2 = [];
    newDataTable2.push(removeItemTable1);

    const tableData2 = intialDataTable2.concat(newDataTable2);
    this.setState({
      table2: {
        header: this.state.table2.header,
        tableData: tableData2
      }
    });
  }

  removeRowTable2(index) {
    const removeItemTable2 = this.state.table2.tableData[index];
    const newDataTable2 = this.state.table2.tableData;
    newDataTable2.splice(index, 1);

    this.setState({
      table2: {
        header: this.state.table2.header,
        tableData: newDataTable2
      }
    });

    const intialDataTable1 = [...this.state.table1.tableData];
    const newDataTable1 = [];
    newDataTable1.push(removeItemTable2);

    const tableData1 = intialDataTable1.concat(newDataTable1);
    this.setState({
      table1: {
        header: this.state.table1.header,
        tableData: tableData1
      }
    });
  }

  render() {
    return (
      <>
      
              <td>{this.renderTable1()}</td>
              <td>{this.renderTable2()}</td>
          
      </>
    );
  }
}
export default App1;
