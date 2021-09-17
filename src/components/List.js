import React, { useEffect, useState } from "react";
import Api from "../api/api.js";
const List = ({ items }) => {
  useEffect(() => {}, []);
  return (
    <>
      {
        <div className="List">
          {items.length ? (
            items.map((item, i) => (
              <div key={i} className="List_item active">
                <h3>{item["todo"]}</h3>
                <div>
                  <button
                    className="btn"
                    onClick={() => Api.deleteData(item["_id"])}
                  >
                    X
                  </button>
                  <button className="btn complete">completed</button>
                </div>
              </div>
            ))
          ) : (
            <h4>Loading..</h4>
          )}
        </div>
      }
    </>
  );
};

export default List;
