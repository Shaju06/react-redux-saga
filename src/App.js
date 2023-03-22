// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import NoteList from './containers/notelist';
import {Routes, Route} from 'react-router-dom'
import AddNewNote from './containers/addNotes';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
<Route path='/' index element={<NoteList />}></Route>
<Route path='/add-new-note' element={<AddNewNote />}></Route>
      </Routes>
    </div>
  );
}

export default App;
