import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import Notes from './pages/Notes';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'notes',
        element: <Notes />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
