import { useState } from 'react';
import ShowTasks from './ShowTasks';

function App() {
  const [newToDo, setNewToDo] = useState('')
  const [allTasks, setAllTasks] = useState([])

  const handleChange = ({ target }) => setNewToDo(prev => target.value)

  const handleSubmit = (e) => {
    // Prevents the button to reload the page on when clicked
    e.preventDefault();

    // Adds newToDo to allTasks
    setAllTasks(
      prev =>
        [...prev,
        {
          value: e.target.value,

          // React needs a unique key to track the items 
          key: e.target.value
        }]
    )

    // Resets newToDo to an empty string
    setNewToDo('')
  }

  // Removes a task if its cross is clicked
  const handleRemove = ({ target }) => {
    const textToRemove = target.previousSibling.innerHTML;
    setAllTasks(prev => prev.filter(task => task.value !== textToRemove))
  }

  return (
    <div>
      <form>
        <input type='text' value={newToDo} onChange={handleChange}></input>
        <button value={newToDo} onClick={handleSubmit}>Add</button>
      </form>
      <ShowTasks tasks={allTasks} handleRemove={handleRemove} />
    </div>)
}

export default App;
