import React from "react";

function TableBody(arr) {
  const rows = arr.columns.map(item => {
    const cells = arr.columns.map(colData => {
      return <td key={colData.key}>{item[colData.key]}</td>;
    });

    return <tr key={item.uniqueID}>{cells}</tr>;
  });

  return <tbody>{rows}</tbody>;
}
export default TableBody;

