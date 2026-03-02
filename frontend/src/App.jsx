
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './component/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent Route is the Layout */}
        <Route path="/" element={<MainLayout />}>
          {/* Child Routes render inside the <Outlet /> */}
          <Route index element={<Home />} />
          {/* <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

