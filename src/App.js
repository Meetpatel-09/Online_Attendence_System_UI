import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import NoPage from './pages/NoPage';
import ViewUsers from './pages/ViewUsers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="addUser" element={<AddUser />} />
          <Route path="viewUsers" element={<ViewUsers />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
