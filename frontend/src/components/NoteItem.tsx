import { NavLink, json, useNavigate } from 'react-router-dom';

const NoteItem = ({ note }: { note: Note }) => {
  const navigate = useNavigate();
  const deleteNote = async () => {
    const res = await fetch(`http://localhost:8080/notes/${note.id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw json(
        {
          message: 'Could not delete note',
        },
        { status: 500 },
      );
    }
    navigate('/notes');
  };

  return (
    <article className="note-item">
      <span>
        <h2>{note.title}</h2>
        <p>
          <em>{note.category}</em>
        </p>
      </span>
      <p>{note.content}</p>
      <NavLink to={`/notes/${note.id}`}>Edit</NavLink>
      <button onClick={deleteNote}>Delete</button>
    </article>
  );
};

export default NoteItem;
