import React from "react";
import { Table } from "reactstrap";
import { listGroups } from "../informationTable";

export const DisplayTable = ({ tableToDisplay }) => {
  return (
    <div>
      <Table responsive hover>
        <thead>
          <tr>
            {listGroups[tableToDisplay].map((tableTitle) => (
              <th>{tableTitle.fieldName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default DisplayTable;
