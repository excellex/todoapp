import React from 'react';
import { ListItem, ListItemText, Checkbox } from '@material-ui/core'
import { todoContext } from '../../contexts/todoContext';
import Delete from '@material-ui/icons/DeleteOutlined';


function TodoItem({ item, index }) {
  const { swithched, setswithched, filterList, setFilterList, todoList, setTodoList } = React.useContext(todoContext);

  const { todo, checked, moreinfo } = item
  const checkBoxHandler = () => {
    const list = todoList.slice()
    list[index].checked = !checked
    setswithched(false);
    setTodoList(list)
  }

  const deleteHandler = () => {
    const list = todoList.slice()
    list.splice(index, 1)
    setswithched(false);
    setTodoList(list)
  }
  return (
    <div>
      <ListItem >
        <ListItemText primary={todo} onTouchEnd={()=>alert('touched!')} />
        <Checkbox checked={checked} onChange={checkBoxHandler} />
        <Delete onClick={deleteHandler} />
      </ListItem>
    </div>
  );
}

export default TodoItem;
