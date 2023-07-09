import { useEffect, useState } from 'react';
import { Form, json, redirect, useActionData } from 'react-router-dom';
import { nanoid } from 'nanoid';

const defaultNote: Note = {
  id: '',
  title: '',
  category: '',
  content: '',
};

const NotesForm = ({ method, note }: { method: FormMethod; note?: Note }) => {
  const [formNote, setFormNote] = useState<Note>(
    (Array.isArray(note) && note[0]) || defaultNote,
  );
  const [formError, setFormError] = useState(false);
  const data: any = useActionData();
  const { message } = data || {};
  const { fieldErrors } = data?.errors || {};

  useEffect(() => {
    if (message || fieldErrors) {
      setFormError(true);
      setTimeout(() => {
        setFormError(false);
      }, 3000);
    }
  }, [message, fieldErrors]);

  return (
    <Form method={method}>
      {formError && (
        <div className="form-errors">
          {message && <p className="form-error">{data.message}</p>}
          {fieldErrors && (
            <ul>
              {Object.entries(fieldErrors).map(
                ([field, errors]) =>
                  Array.isArray(errors) && (
                    <li key={field}>
                      {field}: {errors[0]}
                    </li>
                  ),
              )}
            </ul>
          )}
        </div>
      )}
      <fieldset>
        <input id="id" name="id" type="hidden" value={formNote.id} />
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formNote.title}
          onChange={(e) =>
            setFormNote((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </fieldset>
      <fieldset>
        <label htmlFor="category">Category</label>
        <input
          id="category"
          name="category"
          type="text"
          value={formNote.category}
          onChange={(e) =>
            setFormNote((prev) => ({ ...prev, category: e.target.value }))
          }
        />
      </fieldset>
      <fieldset>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows={5}
          value={formNote.content}
          onChange={(e) =>
            setFormNote((prev) => ({ ...prev, content: e.target.value }))
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
  const errors: any = { fieldErrors: {} };

  const noteData = {
    id: formData.get('id') || nanoid(),
    title: formData.get('title'),
    category: formData.get('category'),
    content: formData.get('content'),
  };

  if (!noteData.title) {
    errors.fieldErrors.title = ['Title is required'];
  }
  if (!noteData.category) {
    errors.fieldErrors.category = ['Category is required'];
  }
  if (!noteData.content) {
    errors.fieldErrors.content = ['Content is required'];
  }

  if (Object.keys(errors.fieldErrors).length) {
    return { errors };
  }

  const url = `http://localhost:8080/notes${
    method === 'PATCH' ? '/' + noteData.id : ''
  }`;

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(noteData),
  });

  if (response.status === 422) return response;

  if (!response.ok)
    throw json({ message: 'Could not save note' }, { status: 500 });

  return redirect('/notes');
}
