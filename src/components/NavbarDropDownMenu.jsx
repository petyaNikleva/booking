import { Laptop, LogOut, Menu, Moon, Sun } from 'lucide-react';

import api from '@/api/index.js';
import { useTheme } from '@/components/ThemeProvider';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui';

import { useAuth } from './AuthProvider.jsx';

const NavbarDropDownMenu = () => {
  const { setTheme } = useTheme();

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Menu className='h-[1.2rem] w-[1.2rem]' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Sun className='mr-2 h-4 w-4' />
            <span>Theme</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem onClick={() => setTheme('light')}>
                <Sun className='mr-2 h-4 w-4' />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                <Moon className='mr-2 h-4 w-4' />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                <Laptop className='mr-2 h-4 w-4' />
                System
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className='mr-2 h-4 w-4' />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarDropDownMenu;
