import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core'
import TodoItem from '../TodoItem/TodoItem';
import { todoContext } from '../../contexts/todoContext';

function TodoList(props) {
  const { filterList, setFilterList } = React.useContext(todoContext);

  return (
    <div className='container'>

      <List >
        {filterList && filterList.length ? <></> : <center> <ListItem ><ListItemText primary={'no todos...'} /></ListItem></center>}
        {filterList && filterList.map((item, key) => (
          <TodoItem key={key} item={item} index={item.index} />
        ))}
      </List>
    </div>
  );
}

export default TodoList;
