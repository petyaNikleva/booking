import { Link } from 'react-router-dom';

import api from '@/api';
import { useAuth } from '@/components/AuthProvider';
import { Separator } from '@/components/ui';

import NavbarDropDownMenu from './NavbarDropDownMenu.jsx';

const Navbar = () => {
  const { setToken } = useAuth();

  const handleSignOut = async () => {
    try {
      await api.post('/api/signout');

      setToken(null);
    } catch {
      setToken(null);
    }
  };

  return (
    <>
    {/* TODO */}
      <div className='flex flex-row items-center justify-start md:justify-evenly gap-8 px-8 py-4'>
        <Link to='/'>Home</Link>
        <div className='flex-end flex flex-row items-center gap-8'>
          <Link to='/favorites'>Favorites</Link>
          <NavbarDropDownMenu />
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Navbar;
