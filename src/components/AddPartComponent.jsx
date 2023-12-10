import React, { useState, useEffect } from "react";
import PartService from "../service/PartService";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddPartComponent = () => {
  const [partName, setPartName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const partData = { partName, description, category, quantity, price };
  function savePart(e) {
    e.preventDefault();
    if (
      partData.partName !== "" &&
      partData.description !== "" &&
      partData.category !== "" &&
      partData.quantity !== "" &&
      partData.price !== ""
    ) {
      if (id) {
        PartService.updatePart(id, partData)
          .then(navigate("/parts"))
          .catch((e) => console.log(e));
      } else {
        PartService.savePart(partData)
          .then(navigate("/parts"))
          .catch((e) => console.log(e));
      }
    } else {
      alert("Please fill all the fields");
    }
  }

  function title() {
    if (id) {
      return "Update Part";
    } else {
      return "Add Part";
    }
  }

  useEffect(() => {
    if (id) {
      PartService.getPartById(id)
        .then((res) => {
          setPartName(res.data.partName);
          setDescription(res.data.description);
          setCategory(res.data.category);
          setQuantity(res.data.quantity);
          setPrice(res.data.price);
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
                    value={partName}
                    onChange={(e) => setPartName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Enter Part Name"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Enter Part Description"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Enter Part Category"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    type="number"
                    className="form-control"
                    placeholder="Enter Part Quantity"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                    className="form-control"
                    placeholder="Enter Part Price"
                  />
                </div>
                <button
                  onClick={(e) => savePart(e)}
                  className="btn btn-success pr-2"
                >
                  Save
                </button>
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

export default AddPartComponent;
