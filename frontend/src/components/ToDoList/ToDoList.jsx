import React, { useState } from "react";

export default function ToDoList() {

    const [tasks, setTasks] = useState(["Complete TOC HW", "Fill in the IDFC form"]);
    const [newTask, setNewTask] = useState("");


    function handleTaskChange(e) {
        setNewTask(e.target.value);
    }

    function addTask() {
        if(newTask !== '') {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function removeTask(index) {

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [[updatedTasks[index]], [updatedTasks[index-1]]] = 
            [[updatedTasks[index-1]], [updatedTasks[index]]];
            setTasks(updatedTasks);
        }
    }

    function  moveTaskDown(index) {
        if(index < tasks.length) {
            const updatedTasks = [...tasks];
            [[updatedTasks[index]], [updatedTasks[index+1]]] = 
            [[updatedTasks[index+1]], [updatedTasks[index]]];
            setTasks(updatedTasks);
        }
    }

    function moveToLast(index) {
        if(index !== tasks.length-1) {
            const updatedTasks = tasks.filter((_, i) => i !== index);
            setTasks([...updatedTasks, tasks[index]]);
        }
    }

    function moveToFirst(index) {
        if(index !== 0) {
            const updatedTasks = tasks.filter((_, i) => i !== index);
            setTasks([tasks[index], ...updatedTasks]);
        }
    }

    return(
        <div className="container">
            <div class="list-group" style={{width: "23rem"}}>
                                <a href="#" class="list-group-item list-group-item-action bg-body-secondary">
                                    <div class="d-flex flex-column w-100 justify-content-between">
                                        <h4 class="p-2 mb-1">To-Do's</h4>
                                    </div>
                                </a>
                                <div class="d-flex flex-row gap-1 p-2">
                                    <input placeholder="Add task..."
                                            value={newTask}
                                            onChange={handleTaskChange}
                                            type="text" class="form-control"
                                            onKeyDown={(e) => {
                                                if(e.key == "Enter"){
                                                    addTask();
                                                }
                                            }}></input>
                                    <button onClick={addTask}
                                            className="add-btn"
                                            class="btn btn-success">
                                        Add
                                    </button>
                                </div>
                                {tasks.map((task, index) => (
                                    <div class="list-group-item d-flex flex-row align-items-center gap-1 justify-content-between" >
                                        <ul class="list-group list-group-horizontal">
                                            <li class="list-group-item bg-body-secondary" key={index}>{ index + 1 }</li>
                                            <li class="list-group-item">{ task }</li>
                                        </ul>
                                        <div class="d-flex flex-row gap-1">
                                            <button onClick={() => removeTask(index)}
                                                    class="btn btn-danger p-1">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                            <button onClick={() => moveTaskUp(index)}
                                                    class="btn btn-primary p-1 ">
                                                <i class="bi bi-chevron-up"></i>
                                            </button>
                                            <button onClick={() => moveTaskDown(index)}
                                                    class="btn btn-secondary p-1">
                                                <i class="bi bi-chevron-down"></i>
                                            </button>
                                            <button onClick={() => moveToLast(index)}
                                                    class="btn btn-warning p-1">
                                                <i class="bi bi-chevron-double-down"></i>
                                            </button>
                                            <button onClick={() => moveToFirst(index)}
                                                    class="btn btn-success p-1">
                                                <i class="bi bi-chevron-double-up"></i>
                                            </button>
                                        </div>
                                    </div>
                                ))}
            </div>
        </div>
    );

}

