import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import "./Layout.css"


const Layout = () => (
 <div className='layout-containter'>
    <Header />
    <>
      <Outlet />
    </>
 </div>
);

export default Layout;