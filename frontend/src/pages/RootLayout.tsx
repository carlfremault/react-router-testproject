import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  const location = useLocation();

  const getPageTitle = (pathname: string) => {
    switch (pathname) {
      case '/':
        return 'Home';
      case '/notes':
        return 'Notes';
      case '/about':
        return 'About';
      default:
        return "Carl's site";
    }
  };

  useEffect(() => {
    document.title = getPageTitle(location.pathname);
  }, [location]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
