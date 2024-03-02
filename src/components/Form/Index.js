import React from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import "./Form.css";

export default function Form({ handleSubmit, handleChange, newTask }) {
  return (
    <form onSubmit={handleSubmit} action="#" id="form" className="form">
      <input
        onChange={handleChange}
        placeholder="Write your task"
        type="text"
        value={newTask}
      />
      <button type="submit" className="custom-btn btn-16">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};
