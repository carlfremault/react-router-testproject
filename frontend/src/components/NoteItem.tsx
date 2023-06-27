import React from 'react';

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
    </article>
  );
};

export default NoteItem;
