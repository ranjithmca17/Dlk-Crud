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
              <t