import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ViewPosts from './Pages/ViewPosts';
import CreatePost from './Pages/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ViewPosts/>}/>
        <Route path='/send' element={<CreatePost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
