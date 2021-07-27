import Task from "./Task";

const Tasks = ({ tasks, onToggle, onDelete }) => {
  return (
    <>
      {tasks.length > 0
        ? tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        : "No Task To Show"}
    </>
  );
};

export default Tasks;
