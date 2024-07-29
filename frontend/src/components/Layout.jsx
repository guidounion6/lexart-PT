import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Layout = () => {
  return (
    <div className="flex flex-row">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Layout;