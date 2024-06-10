import logo from './logo.svg';
import './App.css';
import AddFriends from './componenet.jsx/AddFriends';
import ViewFriends from './componenet.jsx/ViewFriends';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AddFriends/>}/>
      <Route path='/viewFriends'element={<ViewFriends/>}/>
      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
