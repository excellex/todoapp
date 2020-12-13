import React from 'react';
import { ListItem, ListItemText, Checkbox } from '@material-ui/core'
import { todoContext } from '../../contexts/todoContext';
import Delete from '@material-ui/icons/DeleteOutlined';
import Dialog from '@material-ui/core/Dialog';
import { Button, FormControl, TextField } from '@material-ui/core'


function ModalForm(props) {
  const { classes, onClose, selectedValue, open, setOpen, item, todoList, setTodoList } = props;
  const [text, setText] = React.useState('')
  const handleClose = () => {
    onClose(selectedValue);
  };

  const inputHandler = (e) => {
    setText(e.target.value);
  }

  const addInfo = () => {
    setOpen(false)
    const list = todoList.slice()
    item.moreinfo = text
    setTodoList(list)
  }

  return (

    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <div className={classes.inputform}>
        <div className='container'>{item.todo}</div><br />
        <div className='container'>{item.moreinfo}</div><br />
        <FormControl >
          <TextField autoFocus id="standard-basic" defaultValue={item.moreinfo} label={item.moreinfo ? "Update info..." : "Add more info..."} onChange={inputHandler} />
          <Button onClick={addInfo} type="button" variant="outlined">{item.moreinfo ? "Update..." : "Add..."}</Button>
        </FormControl>
      </div>
    </Dialog>
  );
}

function TodoItem({ item, id }) {
  const { setSwithched, todoList, setTodoList, classes } = React.useContext(todoContext);
  const [open, setOpen] = React.useState(false)

  const { todo, checked } = item
  const checkBoxHandler = () => {
    const list = todoList.slice()
    list.map(item => item.id == id ? item.checked = !checked : null)
    setSwithched(false);
    setTodoList(list)
  }

  const deleteHandler = () => {
    const list = todoList.slice()
    list.splice(list.indexOf(item), 1)
    setSwithched(false);
    setTodoList(list)
  }

  const todoInfoHandler = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ListItem >
        <ModalForm open={open} setOpen={setOpen} classes={classes} onClose={handleClose} item={item} setTodoList={setTodoList} todoList={todoList} />
        <ListItemText primary={todo} onClick={todoInfoHandler} />
        <Checkbox checked={checked} onChange={checkBoxHandler} />
        <Delete onClick={deleteHandler} />
      </ListItem>
    </div>
  );
}

export default TodoItem;
