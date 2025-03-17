import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CrudForm from "../components/CrudForm";
import { AppContext } from "../context/AppContext";
import Alert from "react-bootstrap/Alert";

const EditCrud = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cruds, updateCrud, alert } = useContext(AppContext);
  const [crud, setCrud] = useState(null);

  useEffect(() => {
    const selectedCrud = cruds.find((crud) => crud._id === id);
    if (selectedCrud) setCrud(selectedCrud);
  }, [id, cruds]);

  const handleSubmit = (updatedCrud) => {
    updateCrud(id, updatedCrud);
    navigate("/");
  };

  if (!crud) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-center mb-4">Edit CRUD Entry</h1>
      {alert.show && (
        <Alert variant={alert.type} className="mb-4">
          {alert.message}
        </Alert>
      )}
      <CrudForm crud={crud} onSubmit={handleSubmit} buttonText="Update Entry" />
    </div>
  );
};

export default EditCrud;