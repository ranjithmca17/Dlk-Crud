import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CrudForm from "../components/CrudForm";
import { AppContext } from "../context/AppContext";
import Alert from "react-bootstrap/Alert";

const AddCrud = () => {
  const navigate = useNavigate();
  const { addCrud, alert } = useContext(AppContext);

  const handleSubmit = (crud) => {
    addCrud(crud);
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-center mb-4">Add CRUD Entry</h1>
      {alert.show && (
        <Alert variant={alert.type} className="mb-4">
          {alert.message}
        </Alert>
      )}
      <CrudForm onSubmit={handleSubmit} buttonText="Add Entry" />
    </div>
  );
};

export default AddCrud;