import { Outlet } from 'react-router-dom';

import { useAuth } from '@/components/AuthProvider.jsx';
import Devbar from '@/components/Devbar/Devbar';
import Navbar from '@/components/NavBar.jsx';

const App = () => {
  const { token } = useAuth();
  return (
    <>
      <div className='fixed bottom-0 left-0 top-0'>
        <Devbar />
      </div>
      <div className='ml-[700px]'>
        {token && <Navbar />}
        <Outlet />
      </div>
    </>
  );
};

export default App;
