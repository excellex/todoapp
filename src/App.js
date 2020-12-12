import AddForm from "./components/AddForm/AddForm";
import AddButton from "./components/AddButton/AddButton";
import { Fab, TextField, Switch, FormControlLabel } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import TodoList from "./components/TodoList/TodoList";
import Switches from "./components/Switches";


function App() {
  return (
    <div className='container'>

      {/* <AddForm /> */}
      <TodoList />
      <AddButton />
    </div>
  );
}

export default App;
