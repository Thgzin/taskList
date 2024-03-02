import React, { Component } from "react";

import Form from "./Form/Index";
import Tasks from "./Tasks";
import "./Main.css";

export default class Main extends Component {
  state = {
    newTask: "",
    tasks: [],
    index: -1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;
    if (tasks === prevState.tasks) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) return;
    this.setState({ tasks });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;
    if (!newTask) {
      return;
    }

    const newTasks = [...tasks];
    if (index === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: "",
      });
    } else {
      newTasks[index] = newTask;

      this.setState({
        tasks: [...newTasks],
        index: -1,
        newTask: "",
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  handleEdit = (e, index) => {
    const { tasks } = this.state;
    this.setState({
      index,
      newTask: tasks[index],
    });
  };

  handleClose = (e, index) => {
    const { tasks } = this.state;
    const newTask = [...tasks];
    newTask.splice(index, 1);
    this.setState({
      tasks: [...newTask],
    });
  };

  render() {
    const { newTask, tasks } = this.state;
    return (
      <div className="main">
        <h1>Task List</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
        />
        <Tasks
          tasks={tasks}
          handleEdit={this.handleEdit}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}
