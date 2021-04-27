import React from "react";
import { Table } from "reactstrap";
import { listGroups } from "../informationTable";
import "./DisplayTable.css";

export const DisplayTable = ({ tableToDisplay, data }) => {
  return (
    <div className="table__container">
      <Table responsive hover>
        <thead>
          <tr>
            {listGroups[tableToDisplay].map((tableTitle, index) => (
              <th key={index}>{tableTitle.fieldName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((rowItem, index) => (
            <tr key={index}>
              {listGroups[tableToDisplay].map((cellItem, index) => (
                <td key={index}>
                  {cellItem.dbName === "user_id_last_update" ? (
                    <div className="user-initials">
                      {rowItem[cellItem.dbName]}
                    </div>
                  ) : (
                    rowItem[cellItem.dbName]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DisplayTable;
