import React from 'react';
import { Button, FormControl, TextField, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { positions } from '@material-ui/system';

const useStyles = makeStyles({
  inputform: {
    padding: '20px',
  },
});

function AddForm(props) {
  const classes = useStyles();

  return (
    <div className={classes.inputform}>
      <FormControl>
        <TextField id="standard-basic" label="Add task to do..." />
        <Button variant="outlined">add</Button>
      </FormControl>
    </div>
  );
}

export default AddForm;
