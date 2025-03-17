import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext(); // Named export

const ContextProvider = (props) => {
  const [cruds, setCruds] = useState([]);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  // Show alert
  const showAlert = (message, type) => {
    setAlert({ show: true, message, type });
    setTimeout(() => setAlert({ show: false, message: "", type: "" }), 3000);
  };

  // Fetch all CRUD entries
  const fetchCruds = async () => {
    try {
      const response = await axios.get("https://dlk-crud-backend.onrender.com/api/get");
      setCruds(response.data.data);
    } catch (error) {
      showAlert("Error fetching CRUD entries", "danger");
    }
  };

  // Add a new CRUD entry
  const addCrud = async (crud) => {
    try {
      const response = await axios.post("https://dlk-crud-backend.onrender.com/api/post", crud);
      setCruds([...cruds, response.data.data]);
      showAlert("CRUD entry added successfully", "success");
    } catch (error) {
      showAlert("Error adding CRUD entry", "danger");
    }
  };

  // Update a CRUD entry
  const updateCrud = async (id, updatedCrud) => {
    try {
      const response = await axios.put(`https://dlk-crud-backend.onrender.com/api/put/${id}`, updatedCrud);
      setCruds(cruds.map((crud) => (crud._id === id ? response.data.data : crud)));
      showAlert("CRUD entry updated successfully", "success");
    } catch (error) {
      showAlert("Error updating CRUD entry", "danger");
    }
  };

  // Delete a CRUD entry
  const deleteCrud = async (id) => {
    try {
      await axios.delete(`https://dlk-crud-backend.onrender.com/api/delete/${id}`);
      setCruds(cruds.filter((crud) => crud._id !== id));
      showAlert("CRUD entry deleted successfully", "success");
    } catch (error) {
      showAlert("Error deleting CRUD entry", "danger");
    }
  };

  // Fetch CRUD entries on component mount
  useEffect(() => {
    fetchCruds();
  }, []);

  return (
    <AppContext.Provider value={{ cruds, addCrud, updateCrud, deleteCrud, alert }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider; // Default export