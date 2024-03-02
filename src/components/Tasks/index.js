import React from "react";
import PropTypes from "prop-types";

import "./tasks.css";

import { FaEdit, FaWindowClose } from "react-icons/fa";

export default function Tarefas({ tasks, handleEdit, handleClose }) {
  return (
    <ul className="tarefas">
      {tasks.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
            <FaWindowClose
              onClick={(e) => handleClose(e, index)}
              className="close"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};
