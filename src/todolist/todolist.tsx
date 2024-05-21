

type TodolistPropsType = {
title:string
tasks: Array<TaskType>
date?: string
}

 export type TaskType = {
    id: number
    title: string
    IsDone: boolean
}




export const Todolist = ( props: TodolistPropsType) => {
   
    const tasksElements: Array<JSX.Element> = props.tasks.map((task) => {
        return(
            <li>
            <input type="checkbox" checked={task.IsDone} /> <span>{task.title}</span>
        </li>
        );
    });

    return (
        <div className="todolist">
            <h3>{props.title}</h3>
                <div>
                    <input />
                    <button>+</button>
                </div>
                <ul>
                    {tasksElements}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
    )
}