import React from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
} from "@tanstack/react-table";

const ReactTable = ({
  columns,
  data = [],
  headerProps = {},
  headerCellProps = {},
  bodyProps = {},
  className = "",
  rowDataProps = { className: "" },
  cellProps = { className: "" },
  ...restConfig
}) => {
  const tableConfig = {
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...restConfig,
  };
  
  const table = useReactTable(tableConfig);

  // Render the UI for your table
  return (
    <table className={className}>
      <thead {...headerProps}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                {...headerCellProps} // Changed from headerCellprops to headerCellProps
              >
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...bodyProps}> {/* Fixed typo from tbady to tbody */}
        {table.getRowModel().rows.map((row) => (
          <tr {...rowDataProps} className={rowDataProps.className} key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className={cellProps.className}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())} {/* Fixed typo from cell getContext() to cell.getContext() */}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { ReactTable };
