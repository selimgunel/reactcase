import "./Table.css";
import { useState, useEffect } from "react";

const Table = ({ info,onItemSelected }) => {

 

  console.log(info);
  

  const getNames = (e) => {

  
  const selectedItem = e.target.parentElement.nextElementSibling.textContent;
    
  const selectedMemberInfo = info[Number(selectedItem) - 1];
  console.log(selectedMemberInfo);


  onItemSelected(selectedItem,selectedMemberInfo);
  
  
    
   }

  return (
    <div className="tablo">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Size</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          {info.map((res) => (
            <tr key={res.id}>
              
              <td><input className="checkbox" type="checkbox" onChange={getNames}></input></td>
              <td>{res.id}</td>
              <td scope="row">
               {res.name}
              </td>
              <td>{res.status}</td>
              <td>{res.size}</td>
              <td>{res.date}</td>
              <td>{res.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;