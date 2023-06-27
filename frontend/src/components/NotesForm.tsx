import { useState } from 'react';
import { Form } from 'react-router-dom';

const defaultNote: Note = {
  title: '',
  category: '',
  content: '',
};

const NotesForm = ({ method }: { method: FormMethod }) => {
  const [note, setNote] = useState<Note>(defaultNote);

  return (
    <Form method={method}>
      <fieldset>
        <label htmlFor="title">Title</label>
        <input
          id="title"
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
          rows={5}
          value={note.content}
          onChange={(e) =>
            setNote((prev) => ({ ...prev, content: e.target.value }))
          }
        />
      </fieldset>
      <button type="submit">Submit</button>
    </Form>
  );
};

export default NotesForm;
