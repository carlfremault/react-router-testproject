import { json, useLoaderData } from 'react-router-dom';
import NotesForm from '../components/NotesForm';

export function EditNote() {
  const note = useLoaderData() as Note;
  return <NotesForm method="PATCH" note={note} />;
}

export async function loader({
  request,
  params,
}: {
  request: Request;
  params: any;
}) {
  const id = params.id;
  const res = await fetch(`http://localhost:8080/notes/${id}`);

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
