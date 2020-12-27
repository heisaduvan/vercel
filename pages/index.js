import React, { Component } from "react";
import CreateTask from "./components/CreateTask";
import '../styles/Home.module.css'
import TaskList from "./components/TaskList";
export default function Home() {
  return (
    <div className="container">
      <CreateTask></CreateTask>
      <TaskList></TaskList>
    </div>
  );
}
