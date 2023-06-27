import { NavLink, Outlet } from 'react-router-dom';

const NotesLayout = () => {
  return (
    <section>
      <h1>Notes</h1>
      <div className="menu">
        <NavLink
          to="/notes"
          className={({ isActive }) => (isActive ? 'active' : '')}
          end
        >
          all notes
        </NavLink>
        <NavLink
          to="/notes/new"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          new note
        </NavLink>
      </div>
      <Outlet />
    </section>
  );
};

export default NotesLayout;
