import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core'
import { todoContext } from '../../contexts/todoContext';
import TodoItem from '../TodoItem/TodoItem';

function TodoList() {
  const { filterList } = React.useContext(todoContext);

  return (
    <div className='container'>
      <List >
        {filterList && filterList.length
          ? <></>
          : <center> <ListItem ><ListItemText primary={'no todos...'} /></ListItem></center>}
        {filterList && filterList.map((item, key) => (
          <TodoItem key={item.id} item={item} id={item.id} />
        ))}
      </List>
    </div>
  );
}

export default TodoList;
