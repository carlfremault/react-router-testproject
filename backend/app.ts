import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});

app.use(routes);

app.listen(8080, () => {
  console.log('Server is running on port 8080.');
});
