import React from 'react';
import { Fab, Switch, FormControlLabel, FormGroup } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { bottom, buttons } from './addbutton.module.css';
import SimpleDialogDemo from '../SimpleDialogDemo';

function AddButton() {
  const [checked, setChecked] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div className='container'>
      <div className={bottom}>
        <div className={buttons}>
          <div>
            <FormGroup>
              <FormControlLabel
                value="bottom"
                control={
                  <Switch
                    checked={checked}
                    onChange={toggleChecked}
                    name="checked"
                    color="primary"
                  />
                }
                label={' '}
                labelPlacement="bottom"
              />

            </FormGroup>
          </div>
          <div>
            <SimpleDialogDemo />
            {/* <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
              <AddIcon />
            </Fab> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddButton;
