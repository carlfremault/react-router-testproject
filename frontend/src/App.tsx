import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Error from './pages/Error';
import Home from './pages/Home';
import NotesLayout from './pages/NotesLayout';
import Notes, { loader as notesLoader } from './pages/Notes';
import { NewNote } from './pages/NewNote';
import About from './pages/About';
import { action as newNoteAction } from './components/NotesForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'notes',
        element: <NotesLayout />,
        children: [
          {
            index: true,
            element: <Notes />,
            loader: notesLoader,
          },
          {
            path: 'new',
            element: <NewNote />,
            action: newNoteAction,
          },
        ],
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
