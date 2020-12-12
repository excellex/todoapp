import React from 'react';
import { List } from '@material-ui/core'
import TodoItem from '../TodoItem/TodoItem';

function TodoList(props) {
  return (
    <div>
      <List >
        <ul >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <TodoItem item={item} sectionId={item + 10} />
          ))}
        </ul>
      </List>
    </div>
  );
}

export default TodoList;
