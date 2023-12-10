import React, { useState, useEffect } from "react";
import PartService from "../service/PartService";
import ClientService from "../service/ClientService";
import { Link, useNavigate, useParams } from "react-router-dom";

const SellPartComponent = () => {
  const [partName, setPartName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quant, setQuant] = useState("");
  const [desiredQuantity, setDesiredQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [totalPrice, setTotalPrice] = useState(desiredQuantity * price);
  const [client, setClient] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const quantity = quant - desiredQuantity;
  const partData = { partName, description, category, quantity, price };
  console.log(partData);
  function sellPart(e) {
    e.preventDefault();
    if (
      partData.partName !== "" &&
      partData.description !== "" &&
      partData.category !== "" &&
      quant !== "" &&
      partData.price !== "" &&
      partData.quantity !== "" &&
      desiredQuantity > 0 &&
      desiredQuantity <= quant &&
      client !== ""
    ) {
      if (id) {
        PartService.updatePart(id, partData)
          .then(navigate("/parts"))
          .catch((err) => console.log(err));
      } else {
        alert("Please fill all the fields");
      }
    }
  }

  useEffect(() => {
    if (id) {
      PartService.getPartById(id)
        .then((res) => {
          setPartName(res.data.partName);
          setDescription(res.data.description);
          setCategory(res.data.category);
          setQuant(res.data.quantity);
          setPrice(res.data.price);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  const [clients, setClients] = useState([]);
  useEffect(() => {
    ClientService.getAllClients()
      .then((res) => {
        const clientFullName = res.data.map(
          (client) => client.firstName + " " + client.lastName
        );
        setClients(clientFullName);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h2 className="text-center">Sell Part</h2>
            <div className="card-body">
              <form>
                <label htmlFor="partName" className="form-label">
                  Part Name :
                </label>
                <div className="form-group mb-2">
                  <input
                    id="partName"
                    disabled
                    value={partName}
                    onChange={(e) => setPartName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Enter Part Name"
                  />
                </div>
                <label htmlFor="desc" className="form-label">
                  Description :
                </label>
                <div className="form-group mb-2">
                  <input
                    id="desc"
                    disabled
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Enter Part Description"
                  />
                </div>
                <label htmlFor="category" className="form-label">
                  Category :
                </label>
                <div className="form-group mb-2">
                  <input
                    id="category"
                    disabled
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Enter Part Category"
                  />
                </div>
                <label htmlFor="quantity" className="form-label">
                  Quantity :
                </label>
                <div className="form-group mb-2">
                  <input
                    id="quantity"
                    disabled
                    value={quant}
                    onChange={(e) => setQuant(e.target.value)}
                    type="number"
                    className="form-control"
                    placeholder="Enter Part Quantity"
                  />
                </div>
                <label htmlFor="price" className="form-label">
                  Price :
                </label>
                <div className="form-group mb-2">
                  <input
                    id="price"
                    disabled
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                    className="form-control"
                    placeholder="Enter Part Price"
                  />
                </div>
                <label htmlFor="clients" className="form-label">
                  Client :
                </label>
                <div className="form-group mb-2">
                  {/* create a select with options from the clients array */}
                  <select
                    id="clients"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                    className="form-control"
                  >
                    <option value="">Select Client</option>
                    {clients.map((client) => (
                      <option key={client} value={client}>
                        {client}
                      </option>
                    ))}
                  </select>
                </div>
                <label htmlFor="desiredQuatity" className="form-label">
                  Desired Quantity :
                </label>
                <div className="form-group mb-2">
                  <input
                    id="desiredQuatity"
                    value={desiredQuantity}
                    onChange={(e) => setDesiredQuantity(e.target.value)}
                    type="number"
                    className="form-control"
                    placeholder="Enter Desired Quantity"
                  />
                </div>
                <label htmlFor="totalPrice" className="form-label">
                  Total Price :
                </label>
                <div className="form-group mb-2">
                  <input
                    id="totalPrice"
                    disabled
                    value={desiredQuantity * price}
                    onChange={(e) => setTotalPrice(e.target.value)}
                    type="number"
                    className="form-control"
                  />
                </div>
                <Link
                  to={"/parts"}
                  onClick={(e) => sellPart(e)}
                  className="btn btn-success pr-2"
                >
                  Sell
                </Link>
                {""}
                <Link to={"/parts"} href="" className="btn btn-danger">
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

export default SellPartComponent;
