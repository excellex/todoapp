import React from 'react';
import { Button, FormControl, TextField, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { todoContext } from '../../contexts/todoContext';
import { positions } from '@material-ui/system';
import TodoList from '../TodoList/TodoList';

const useStyles = makeStyles({
  inputform: {
    padding: '20px',
  },
});

function AddForm(props) {
  const { classes, open, setOpen, todoList, setTodoList } = React.useContext(todoContext);
  const [text, setText] = React.useState('')
  const inputHandler = (e) => {
    setText(e.target.value);
  }
  const addTodo = () => {
    const list = todoList.slice()
    list.push({ todo: text, id: todoList.length + text, checked: false, moreinfo: '' })
    setTodoList(list)
    setOpen(false)
  }
  return (
    <div className={classes.inputform}>
      <FormControl >
        <TextField autoFocus id="standard-basic" label="Add task to do..." onChange={inputHandler} />
        <Button onClick={addTodo} type="button" variant="outlined">add</Button>
      </FormControl>
    </div>
  );
}

export default AddForm;
