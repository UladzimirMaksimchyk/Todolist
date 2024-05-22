import React from 'react';
import './App.css';
import { TaskType, Todolist } from './todolist/Todolist';




function App() {

    const tasks: Array<TaskType> = [
        { id: 1, title: "One", IsDone: true },
        { id: 2, title: "Two", IsDone: true },
        { id: 3, title: "Three", IsDone: false },
        { id: 4, title: "Four", IsDone: false },
    ];
    // const tasks1: Array<TaskType> = [
    //     { id: 1, title: 'HTML&CSS', IsDone: true },
    //     { id: 2, title: 'JS', IsDone: true },
    //     { id: 3, title: 'ReactJS', IsDone: false },
    //     { id: 4, title: 'Redux', IsDone: false },
    // ]


    return (
        <div className="App">
            <Todolist title={"One"} tasks={tasks} />
            {/* <Todolist title={"Two"} tasks={tasks1} /> */}

        </div>
    );
}

export default App;
