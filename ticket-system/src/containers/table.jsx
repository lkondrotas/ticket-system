import React, { useMemo } from "react";
import { Table } from "react-bootstrap";
import { useTable, useSortBy } from "react-table";

export default function CustomTable() {
  const data = [
    {
      name: "Test test",
      age: 26,
      position: "AS Audit",
      department: "Advanced support",
    },
    {
      name: "Lukas Kondrotas",
      age: 22,
      position: "ASER",
      department: "Advanced support",
    },
    {
      name: "Vardas pavardenis",
      age: 26,
      position: "AS POS",
      department: "Advanced support",
    },
    {
      name: "DX DX",
      age: 24,
      position: "CS Tier 1",
      department: "Customer service",
    },
  ];

  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Position",
      accessor: "position",
    },
    {
      Header: "Department",
      accessor: "department",
    },
  ];

  useMemo(() => columns, []);
  useMemo(() => data, []);

  const tableInstace = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstace;

  return (
    <Table striped hover {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
