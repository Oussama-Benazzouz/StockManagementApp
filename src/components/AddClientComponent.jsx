import React, { useState, useEffect } from "react";
import ClientService from "../service/ClientService";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddClientComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const clientData = { firstName, lastName, email, phone };
  function saveClient(e) {
    e.preventDefault();
    if (
      clientData.firstName !== "" &&
      clientData.lastName !== "" &&
      clientData.email !== "" &&
      clientData.phone !== ""
    ) {
      if (id) {
        ClientService.updateClient(id, clientData)
          .then(navigate("/clients"))
          .catch((e) => console.log(e));
      } else {
        ClientService.saveClient(clientData)
          .then(navigate("/clients"))
          .catch((e) => console.log(e));
      }
    } else {
      alert("Please fill all the fields");
    }
  }

  function title() {
    if (id) {
      return "Update Client";
    } else {
      return "Add Client";
    }
  }

  useEffect(() => {
    if (id) {
      ClientService.getClientById(id)
        .then((res) => {
          setFirstName(res.data.firstName);
          setLastName(res.data.lastName);
          setEmail(res.data.email);
          setPhone(res.data.phone);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h2 className="text-center">{title()}</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Enter Client first Name"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Enter Client last Name"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    placeholder="Enter Client Email"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="number"
                    className="form-control"
                    placeholder="Enter Client Phone"
                  />
                </div>
                <button
                  onClick={(e) => saveClient(e)}
                  className="btn btn-success pr-2"
                >
                  Save
                </button>
                {""}
                <Link to={"/clients"} href="" className="btn btn-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClientComponent;
