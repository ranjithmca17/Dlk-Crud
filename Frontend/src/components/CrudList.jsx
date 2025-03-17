import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaEye, FaEyeSlash } from "react-icons/fa";

const CrudList = ({ cruds, onDelete }) => {
  const [showPassword, setShowPassword] = useState({});

  // Toggle password visibility
  const togglePasswordVisibility = (id) => {
    setShowPassword((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cruds.map((crud, index) => (
            <tr key={crud._id}>
              <td>{index + 1}</td>
              <td>{crud.name}</td>
              <td>{crud.email}</td>
              <td>
                <div className="input-group">
                  <input
                    type={showPassword[crud._id] ? "text" : "password"}
                    className="form-control"
                    value={crud.password}
                    readOnly
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => togglePasswordVisibility(crud._id)}
                  >
                    {showPassword[crud._id] ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </td>
              <td>
                <Link
                  to={`/edit/${crud._id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  <FaEdit />
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(crud._id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudList;