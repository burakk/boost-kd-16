export function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      const newTasks = [...tasks, action.taskObj];
      return newTasks;
    }
    case "deleted": {
      const newTasks = tasks.filter((t) => t.id !== action.id);
      return newTasks;
    }
    case "updated": {
      const newTasks = tasks.map((t) => {
        if (t.id === action.id) {
          return { ...t, title: action.title };
        }
        return t;
      });

      return newTasks;
    }
    default:
      throw new Error("Action type not defined ");
  }
}
