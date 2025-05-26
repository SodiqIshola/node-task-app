
const express = require('express');
const app = express();
const taskController = require('./taskController');

app.use(express.json());

app.get('/tasks', taskController.getTasks);
app.post('/tasks', taskController.addTask);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
