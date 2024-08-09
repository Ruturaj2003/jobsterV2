import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard, Error, Landing, Register } from './pages';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
          <Route path="landing" element={<Landing></Landing>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
