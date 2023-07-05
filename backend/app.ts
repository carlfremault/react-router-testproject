import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const NOTES = [
  {
    id: 1,
    title: 'First note',
    category: 'Misc',
    content: 'This is the first note',
  },
  {
    id: 2,
    title: 'Second note',
    category: 'Misc',
    content: 'This is the second note',
  },
];

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/notes', (req, res) => {
  res.send(NOTES);
});

app.post('/notes', (req, res, next) => {
  const { id, title, category, content } = req.body;
  NOTES.push({ id, title, category, content });
  res.status(201).send({ message: 'Note created!' });
});

app.listen(8080, () => {
  console.log('Server is running on port 8080.');
});
