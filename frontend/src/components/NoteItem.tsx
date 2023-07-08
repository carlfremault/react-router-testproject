import React from 'react';
import { NavLink } from 'react-router-dom';

const NoteItem = ({ note }: { note: Note }) => {
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
    </article>
  );
};

export default NoteItem;
