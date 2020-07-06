import React from "react";

function TableHeader(props) {
  const headers = props.columns.map(colData => (
    <th key={colData.key}>{colData.label}</th>
  ));

  return (
    <thead>
      <tr>{headers}</tr>
    </thead>
  );
}

export default TableHeader;

