import { useState } from 'react';
import { Form, json, redirect } from 'react-router-dom';
import { nanoid } from 'nanoid';

const defaultNote: Note = {
  id: nanoid(),
  title: '',
  category: '',
  content: '',
};

const NotesForm = ({ method }: { method: FormMethod }) => {
  const [note, setNote] = useState<Note>(defaultNote);

  return (
    <Form method={method}>
      <fieldset>
        <input id="id" name="id" type="hidden" value={note.id} />
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={note.title}
          onChange={(e) =>
            setNote((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </fieldset>
      <fieldset>
        <label htmlFor="category">Category</label>
        <input
          id="category"
          name="category"
          type="text"
          value={note.category}
          onChange={(e) =>
            setNote((prev) => ({ ...prev, category: e.target.value }))
          }
        />
      </fieldset>
      <fieldset>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows={5}
          value={note.content}
          onChange={(e) =>
            setNote((prev) => ({ ...prev, content: e.target.value }))
          }
        />
      </fieldset>
      <button>Submit</button>
    </Form>
  );
};

export default NotesForm;

export async function action({ request }: { request: Request }) {
  const method = request.method;
  const formData = await request.formData();

  const noteData = {
    id: formData.get('id'),
    title: formData.get('title'),
    category: formData.get('category'),
    content: formData.get('content'),
  };

  const url = 'http://localhost:8080/notes';

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(noteData),
  });

  if (!response.ok)
    throw json({ message: 'Could not save note' }, { status: 500 });

  return redirect('/notes');
}
