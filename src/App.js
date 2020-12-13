import { useState, useEffect } from 'react';
import AddButton from "./components/AddButton/AddButton";
import { todoContext } from './contexts/todoContext';
import TodoList from "./components/TodoList/TodoList";

import AddForm from "./components/AddForm/AddForm";
import { Fab, TextField, Switch, FormControlLabel } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

function App() {
  const [filterList, setFilterList] = useState([])
  const [swithched, setswithched] = useState(false);
  const [open, setOpen] = useState(false);
  const [todoList, setTodoList] = useState([
    // {todo: 'Item 0', index: 0, checked: true, moreinfo: 'zero text'}, 
    // {todo: 'Item 1', index: 1, checked: true, moreinfo: 'first text'}, 
    // {todo: 'Item 2', index: 2, checked: false, moreinfo: 'sec text'}, 
    // {todo: 'Item 3', index: 3, checked: false, moreinfo: '3rd text'}, 
    // {todo: 'Item 4', index: 4, checked: true, moreinfo: '4th text'}, 
    // {todo: 'Item 5', index: 5, checked: false, moreinfo: '5th text'}, 
  ])

  useEffect(() => {
    setFilterList(todoList)
  }, [todoList])

  return (
    <div>
      <todoContext.Provider value={{ swithched, setswithched, todoList, setTodoList, filterList, setFilterList, open, setOpen }}>
        {/* <AddForm /> */}
        <TodoList />
        <AddButton />
      </todoContext.Provider>
    </div>
  );
}

export default App;
