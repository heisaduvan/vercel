import React, { Component } from "react";
import TaskConsumer from "../../TaskContext";
import Task from "./Task";
export default class TaskList extends Component {
  render() {
    return (

        <TaskConsumer>
        {
            value => {
                const {tasks} = value;
                return <div>
                {
                    tasks.map((task) => {
                        return (
                            <Task
                            key = {task.id}
                            id = {task.id}
                            taskStatus = {task.taskStatus}
                            taskDescription = {task.taskDescription}
                            taskStatusClass = {task.taskStatusClass}
                            ></Task>
                        )
                    })
                }
                </div>;
            }
        }
    </TaskConsumer>
    );
  }
}
