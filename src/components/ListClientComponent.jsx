import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClientService from "../service/ClientService";

const ListClientComponent = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getAllClients();
  });

  function getAllClients() {
    ClientService.getAllClients()
      .then((res) => {
        setClients(res.data);
        console.log(res);
      })
      .catch((e) => console.log(e));
  }

  function deleteClient(e, id) {
    e.preventDefault();
    ClientService.deleteClient(id)
      .then(getAllClients())
      .catch((e) => console.log(e));
  }

  return (
    <div className="container">
      <Link to={"/add-client"} className="btn btn-primary mb-2 mt-3" href="">
        Add Client
      </Link>
      <h2 className="text-center mb-4">List Part</h2>
      <table className="table table-bordered table striped">
        <thead>
          <th>Client Id</th>
          <th>Client FirstName</th>
          <th>Client LastName</th>
          <th>Client Email</th>
          <th>Client Phone</th>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr id={client.id}>
              <td>{client.id}</td>
              <td>{client.firstName}</td>
              <td>{client.lastName}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>
                <Link
                  to={`/add-client/${client.id}`}
                  className="btn btn-info"
                  href=""
                >
                  Update
                </Link>{" "}
                {""}
                <a
                  onClick={(e) => {
                    deleteClient(e, client.id);
                  }}
                  className="btn btn-danger"
                  href=""
                >
                  Delete
                </a>{" "}
                {""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListClientComponent;
