function filterCompletedTasks() {
    const input = document.getElementById('inputTasks').value;
    let tasks;

    try {
      tasks = JSON.parse(input); 

      if (!Array.isArray(tasks) || tasks.some(task => !task.task || typeof task.completed !== 'boolean')) {
        throw new Error("Invalid input format. Ensure each task has 'task' and 'completed'.");
      }
    } catch (error) {
      document.getElementById('output').textContent = `Error: ${error.message}`;
      return;
    }

    const completedTasks = tasks
      .filter(task => task.completed)
      .map(task => task.task);

    document.getElementById('output').textContent = `Completed tasks: [${completedTasks.join(', ')}]`;
  }