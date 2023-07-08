import { NavLink, json, useNavigate } from 'react-router-dom';
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';
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
      <p className="note-content">{note.content}</p>
      <div className="note-actions">
        <NavLink to={`/notes/${note.id}`}>
          <RiEdit2Line size={20} />
        </NavLink>
        <button className="note-action-button" onClick={deleteNote}>
          <RiDeleteBinLine size={20} />
        </button>
      </div>
    </article>
  );
};

export default NoteItem;
