import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './Components/Head';
import Title from './Components/Title';
import { TodoList } from './Components/TodoList';
import NewTodo from './Components/NewTodo';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import EditTodoo from './Components/EditTodo';
  

  
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
        <Head/>
        <Title/>
        <TodoList/>
        <NewTodo/>
      
    </div>
    <Switch>
      <Route path="/:id"><EditTodoo/></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
