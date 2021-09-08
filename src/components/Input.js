import React from 'react';
import { useState } from 'react';

const Input = (props) => {
    const[currentTask, setCurrentTask] = useState("");


    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(currentTask);


        const newTask = {
            text: currentTask,
            checked: false
        }

            props.setTasks([...props.tasks,newTask]);

    }
    return(
        <form onSubmit={onSubmitHandler}>
        <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => setCurrentTask(event.target.value)}/>
            <input type="submit" className="btn btn-primary btn=lg"/>
            
        </div>
        </form>
    )
}
export default Input;