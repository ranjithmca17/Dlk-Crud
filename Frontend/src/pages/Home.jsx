import React, { useContext } from "react";
import CrudList from "../components/CrudList";
import { AppContext } from "../context/AppContext";
import Alert from "react-bootstrap/Alert";

const Home = () => {
  const { cruds, deleteCrud, alert } = useContext(AppContext);

  return (
    <div>
      <h1 className="text-center mb-4">CRUD Entries</h1>
      {alert.show && (
        <Alert variant={alert.type} className="mb-4">
          {alert.message}
        </Alert>
      )}
      <CrudList cruds={cruds} onDelete={deleteCrud} />
    </div>
  );
};

export default Home;