import React, {useImperativeHandle} from "react";
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

type Props = {
  children?: React.ReactNode;
}

const CustomTable = React.forwardRef(({ columns, data }, ref) => {

  const tableInstace = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 20 },
    },
    useFilters,
    useGlobalFilter,
    usePagination,
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    setFilter,
    setGlobalFilter,
    state,

  } = tableInstace;

useImperativeHandle(ref, () => tableInstace);

  return (
    <React.Fragment>
      <input placeholder="Firstname" onChange={e => setFilter("email", e.target.value)} />
      <GlobalFilter
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <Container fluid className="overflow-auto" style={{ maxHeight: "75vh" }}>
        <Table striped hover {...getTableProps()}>
          <thead className="sticky-top bg-white shadow">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
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
});

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

export default CustomTable;