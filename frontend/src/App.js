import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
  Link,
} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import DetailScreen from './Screens/DetailScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />={' '}
        <Route path="/detailScreen" element={<DetailScreen />} />={' '}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
