import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path = '/' exact = {true} element = {<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
