import React,{useState}from 'react'



function Todo() {

    const [tasks,setTask]=useState(["eat breakfast","take a shower","walk the dog"]);
    const [newTask,setNewTask]=useState()

    function handleChange(event){
        setNewTask(event.target.value)
         
    }
    function addTask(){
      if(newTask?.trim()==="") return;
      setTask([...tasks, newTask]); 
      setNewTask("");


    }
    function DeleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTask(updatedTasks);

    }
    function moveup(index){

        if (index === 0) return; // Already at top
        const updatedTasks = [...tasks];
        [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
        setTask(updatedTasks); 
    }
    function movedown(index){
        if (index === tasks.length - 1) return; // Already at bottom
        const updatedTasks = [...tasks];
        [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
        setTask(updatedTasks);

    }

  return (
  <div className='to-do-list'>
    <h1>To-Do-List</h1>

    <div>
        <input  type='text' placeholder='Enter a task'
        value={newTask}  onChange={handleChange}/>

        <button className='add-button ' onClick={addTask}>Add</button>
    </div>
    <ol>
        {tasks.map((task,index)=>
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => DeleteTask(index)}> Delete</button>
            <button onClick={() => moveup(index)}> Up</button>
            <button onClick={() => movedown(index)}> Down</button>
          </li>
        )}
    </ol>

  </div>
  )
}

export default Todo