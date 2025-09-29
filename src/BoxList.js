import React from "react";
import "./BoxList.css";

function BoxList({ headers, rows }) {
  return (
    <div className="box-list">
      <div className="box-row box-header">
        {headers.map((header, idx) => (
          <div key={idx} className="box-cell">
            {header}
          </div>
        ))}
      </div>

      {rows.map((row, rowIdx) => (
        <div key={rowIdx} className="box-row">
          {row.map((cell, cellIdx) => (
            <div key={cellIdx} className="box-cell">
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default BoxList;
