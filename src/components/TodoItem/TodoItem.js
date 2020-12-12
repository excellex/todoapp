import React from 'react';
import { ListItem, ListItemText, Checkbox } from '@material-ui/core'

function TodoItem({ sectionId, item }) {
  return (
    <div>
      <ListItem key={`item-${sectionId}-${item}`}>
        <ListItemText primary={`Item ${item}`} />
        <Checkbox checked={true} onChange={(e)=> e.target.checked = false}/>
      </ListItem>
    </div>
  );
}

export default TodoItem;
