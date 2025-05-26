
let tasks = [];

exports.getTasks = (req, res) => {
  res.status(200).json(tasks);
};

exports.addTask = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const newTask = { id: tasks.length + 1, title };
  tasks.push(newTask);
  res.status(201).json(newTask);
};
