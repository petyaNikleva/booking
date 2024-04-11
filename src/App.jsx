import { Outlet } from 'react-router-dom';

import { useAuth } from '@/components/AuthProvider.jsx';
import Navbar from '@/components/NavBar.jsx';

const App = () => {
  const { token } = useAuth();
  return (
    <>
      {token && <Navbar />}
      <Outlet />
    </>
  );
};

export default App;
