import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { listGroups } from "../informationTable";
import { Link } from "react-router-dom";
import { fetcherListData } from "../API";
import "./DisplayTable.css";

export const DisplayTable = ({ tableToDisplay, data }) => {
  return (
    <div className="table__container">
      <Table responsive hover>
        <thead>
          <tr>
            {listGroups[tableToDisplay].map((tableTitle) => (
              <th>{tableTitle.fieldName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((rowItem) => (
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
