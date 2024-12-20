import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';
import { useManageGameState } from './useManageGameState';

const app = express();
const httpServer = createServer(app);
const socketServer = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173"
  }
});
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'example-index.html'));
});

socketServer.on('connection', (socket) => {
  console.log(`Socket ${socket.id} has connected`);

  socket.on('click', (data) => {
    console.log(data)
  })

  socket.on('disconnect', () => {
    console.log(`Socket ${socket.id} has disconnected`)
  })
})

httpServer.listen(3333, () => {
  console.log('Somebody is listening at http://localhost:3333');
});