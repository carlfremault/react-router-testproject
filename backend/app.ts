import express from 'express';

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

app.listen(8080, () => {
  console.log('Server is running on port 8080.');
});
