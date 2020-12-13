import React from 'react';
import { Switch, FormControlLabel, FormGroup } from '@material-ui/core'
import { bottom, buttons } from './addbutton.module.css';
import { todoContext } from '../../contexts/todoContext';
import AddModal from '../AddModal/AddModal';

function AddButton() {
  const { swithched, setSwithched, todoList, setFilterList } = React.useContext(todoContext);

  const toggleChecked = () => {
    const filtered = todoList.filter(item => !item.checked || swithched)
    setFilterList(filtered)
    setSwithched((prev) => !prev);
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddButton;
