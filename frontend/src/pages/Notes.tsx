import { useLoaderData, json, redirect } from 'react-router-dom';
import NoteItem from '../components/NoteItem';

const Notes = () => {
  const notes = useLoaderData() as Note[];

  return (
    <>
      {notes.map((note) => (
        <NoteItem note={note} key={note.id} />
      ))}
    </>
  );
};

export default Notes;

export async function loader() {
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
