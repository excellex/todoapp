import React from 'react';
import { Fab, Switch, FormControlLabel, FormGroup } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { bottom, buttons } from './addbutton.module.css';
import { todoContext } from '../../contexts/todoContext';
import AddModal from '../AddModal/AddModal';

function AddButton() {
  const [open, setOpen] = React.useState(false);
  const { swithched, setswithched, todoList, filterList, setFilterList } = React.useContext(todoContext);

  const toggleChecked = () => {
    const filtered = todoList.filter(item => !item.checked || swithched)
    setFilterList(filtered)
    setswithched((prev) => !prev);

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
                    checked={swithched}
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
            <AddModal />
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
