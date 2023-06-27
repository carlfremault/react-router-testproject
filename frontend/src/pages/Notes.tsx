import { useLoaderData, json } from 'react-router-dom';

const Notes = () => {
  const notes = useLoaderData() as Note[];

  return (
    <>
      {notes.map((note) => (
        <p key={note.id}>{note.title}</p>
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
