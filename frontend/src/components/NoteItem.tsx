import { NavLink, useSubmit } from 'react-router-dom';
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';

const NoteItem = ({ note }: { note: Note }) => {
  const submit = useSubmit();

  const deleteNote = () => {
    if (confirm('Are you sure you want to delete this note?'))
      submit({ id: note.id }, { method: 'DELETE' });
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
