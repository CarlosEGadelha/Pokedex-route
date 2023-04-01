import {Routes, Route} from 'react-router-dom';
import Home from './Home'

function App() {
  return (
    <Routes>
      <Route path='/pokemon'>
        <Route path=':num_poke' element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
