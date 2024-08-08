import { useState } from 'react';
import Landing from './pages/Landing';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Landing>Dota</Landing>
    </>
  );
}

export default App;
