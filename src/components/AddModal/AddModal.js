import React from 'react';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import { todoContext } from '../../contexts/todoContext';
import AddForm from '../AddForm/AddForm';

function ModalForm(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <AddForm />
    </Dialog>
  );
}

export default function AddModal() {
  const { open, setOpen} = React.useContext(todoContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <ModalForm open={open} onClose={handleClose} />
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
    </div>
  );
}
