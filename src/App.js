import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage';

function App() {
  return (
    <BrowserRouter>
      {/* header Reask bar, if exists */}
      <Routes>
        <Route path = '/' exact = {true} element = {<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
