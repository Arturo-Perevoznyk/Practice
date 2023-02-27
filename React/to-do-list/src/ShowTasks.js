import { React } from "react";
import cross from './close.png';
import './ShowTasks.css';

function Task(props) {
    return (
        <div className='task'>
            <p>{props.task.value}</p>
            <img src={cross} onClick={props.handleRemove} alt='A cross'/>
        </div>
    )
}

export default function ShowTasks(props) {
    return (<>
        {props.tasks.map((task) => <Task handleRemove={props.handleRemove} task={task} key={task.key}/>)}
    </>)
}
