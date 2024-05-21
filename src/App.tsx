import React from 'react';
import './App.css';
import { TaskType, Todolist } from './todolist/Todolist';




function App() {

    const todolistTitle = "One";

    const tasks:  Array<TaskType> = [
        {id: 1 , title:"One", IsDone:true},
        {id: 2 , title:"Two", IsDone:true},
        {id: 3 , title:"Three", IsDone:false},
        {id: 4 , title:"Four", IsDone:false},
    ];
        const tasks1 = [
          { id: 1, title: 'HTML&CSS', isDone: true },
          { id: 2, title: 'JS', isDone: true },
          { id: 3, title: 'ReactJS', isDone: false },
          { id: 4, title: 'Redux', isDone: false },
    ]
       

    return (
        <div className="App">
            <Todolist title={todolistTitle} tasks={tasks} />
        </div>
    );
}

export default App;
