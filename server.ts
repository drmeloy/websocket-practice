import express from 'express';
import { createServer } from 'node:http';

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Is there anybody out there...?</h1>');
});

server.listen(3333, () => {
  console.log('Somebody is listening at http://localhost:3333');
});