import React from "react";
import {
  Table,
  Button,
  InputGroup,
  FormControl,
  Container,
} from "react-bootstrap";
import {
  useTable,
  usePagination,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
import ticketHandler from "./ticketHandler";
import ExampleTicket from "../containers/ticketExample"

export default function CustomTable({ columns, data }) {
  // useMemo(() => columns, []);
  // useMemo(() => data, []);

  const tableInstace = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 20 },
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    // pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = tableInstace;

  return (
    <React.Fragment>
      <GlobalFilter
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <Container fluid className="overflow-auto" style={{ maxHeight: "75vh" }}>
        <Table striped hover {...getTableProps()}>
          <thead className="sticky-top bg-white shadow">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                <th><input type="checkbox"></input></th>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            
            <tr >
              <td><input type="checkbox"></input></td>
              <td><a href="./tickets/123456" className=" text-decoration-none text-reset">123456</a></td>
              <td>This is a test ticket</td>
              <td>This is a test ticket</td>
              <td>This is a test ticket</td>
              <td>This is a test ticket</td>
              <td>This is a test ticket</td>
              <td>This is a test ticket</td>
            </tr>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  <td><input type="checkbox"></input></td>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
      {/* Buttons to go through pages */}
      <Container className="pt-2 justify-content-end d-flex">
        {/* Goto First page */}
        <Button
          className="m-1"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {"First"}
        </Button>
        {/* Goto previous page */}
        <Button
          className="m-1"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {"<"}
        </Button>
        {/* Current page */}
        <Button className="m-1 btn-dark" disabled={true}>
          {`${pageIndex + 1} of ${pageCount}`}
        </Button>{" "}
        {/* Goto next page */}
        <Button
          className="m-1"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {">"}
        </Button>{" "}
        {/* Goto last page */}
        <Button
          className="m-1"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {"Last"}
        </Button>
        {/* Selection to how many per page to display */}
        <select
          className="m-1"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[20, 50, 100].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </Container>
    </React.Fragment>
  );
}

function GlobalFilter({
  globalFilter,
  setGlobalFilter,
}) {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 0);

  return (
    <InputGroup className="pb-2">
      <InputGroup.Text>Search</InputGroup.Text>
      <FormControl
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </InputGroup>
  );
}
