import React from "react";
import { Table } from "reactstrap";
import { listGroups } from "../informationTable";

export const DisplayTable = ({ tableToDisplay, data }) => {
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
          {data.map((rowItem) => (
            <tr>
              {listGroups[tableToDisplay].map((cellItem) => (
                <td>{rowItem[cellItem.dbName]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DisplayTable;
