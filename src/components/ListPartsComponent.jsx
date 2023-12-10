import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PartService from "../service/PartService";

const ListPartsComponent = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    getAllParts();
  }, []);

  function getAllParts() {
    PartService.getAllParts()
      .then((res) => {
        setParts(res.data);
        console.log(res);
      })
      .catch((e) => console.log(e));
  }

  function deletePart(e, id) {
    e.preventDefault();
    PartService.deletePart(id)
      .then(getAllParts())
      .catch((e) => console.log(e));
  }

  return (
    <div className="container">
      <Link to={"/add-part"} className="btn btn-primary mb-2 mt-3" href="">
        Add Part
      </Link>
      <h2 className="text-center mb-4">List Part</h2>
      <table className="table table-bordered table striped">
        <thead>
          <th>Part ID</th>
          <th>Part Name</th>
          <th>Part Description</th>
          <th>Part Category</th>
          <th>Part Quantity</th>
          <th>Part Price</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {parts.map((part) => (
            <tr id={part.id}>
              <td>{part.id}</td>
              <td>{part.partName}</td>
              <td>{part.description}</td>
              <td>{part.category}</td>
              <td>{part.quantity}</td>
              <td>{part.price}</td>
              <td>
                <Link
                  to={`/add-part/${part.id}`}
                  className="btn btn-info"
                  href=""
                >
                  Update
                </Link>{" "}
                {""}
                <a
                  onClick={(e) => {
                    deletePart(e, part.id);
                  }}
                  className="btn btn-danger"
                  href=""
                >
                  Delete
                </a>{" "}
                {""}
                <Link
                  to={`/sell-part/${part.id}`}
                  className="btn btn-success"
                  href=""
                >
                  Sell
                </Link>{" "}
                {""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPartsComponent;
