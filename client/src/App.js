import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './layouts/Main';
import { SearchPage, SavePage } from './pages';

// import { Photo } from './pages/Photo';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<SearchPage />} />
          <Route path="/saved" element={<SavePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
