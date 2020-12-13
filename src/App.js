import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core'

import AddButton from "./components/AddButton/AddButton";
import { todoContext } from './contexts/todoContext';
import TodoList from "./components/TodoList/TodoList";

const useStyles = makeStyles({
  inputform: {
    padding: '20px',
  },
});

function App() {
  const [todoList, setTodoList] = useState([])
  const [filterList, setFilterList] = useState([])
  const [swithched, setSwithched] = useState(false);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setFilterList(todoList)
  }, [todoList])

  return (
    <div>
      <todoContext.Provider value={{ classes, swithched, setSwithched, todoList, setTodoList, filterList, setFilterList, open, setOpen }}>
        <TodoList />
        <AddButton />
      </todoContext.Provider>
    </div>
  );
}

export default App;
