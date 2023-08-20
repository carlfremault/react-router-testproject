import { useLoaderData, json, redirect, defer, Await } from 'react-router-dom';
import NoteItem from '../components/NoteItem';
import { Suspense } from 'react';

const Notes = () => {
  const { notes } = useLoaderData() as { notes: Note[] };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={notes}>
        {(loadedNotes) =>
          loadedNotes.map((note: Note) => (
            <NoteItem note={note} key={note.id} />
          ))
        }
      </Await>
    </Suspense>
  );
};

export default Notes;

const loadNotes = async () => {
  const res = await fetch('http://localhost:8080/notes');
  if (!res.ok) {
    throw json(
      {
        message: 'Could not load notes',
      },
      { status: 500 },
    );
  } else {
    return res.json();
  }
};

export function loader() {
  return defer({ notes: loadNotes() });
}

export async function action({ request }: { request: Request }) {
  const data = await request.formData();
  const noteId = data.get('id');

  const res = await fetch(`http://localhost:8080/notes/${noteId}`, {
    method: request.method,
  });

  if (!res.ok) {
    throw json(
      {
        message: 'Could not delete note',
      },
      { status: 500 },
    );
  }
  return redirect('/notes');
}
