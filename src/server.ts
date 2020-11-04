/* eslint-disable no-console */
import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.get('/', (request, response) => response.json({ message: 'Hey there.' }));

app.listen(3333, () => {
  console.log('Server running on port 3333.');
});
