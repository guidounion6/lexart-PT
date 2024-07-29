import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Layout = () => {
  return (
    <div className="flex flex-row">
      <SideBar />
      <div className='flex w-[1050px] justify-center'>
      <Outlet />
      </div>
    </div>
  );
};

export default Layout;