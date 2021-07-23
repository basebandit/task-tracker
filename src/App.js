import "./App.css";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2.30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 4,
      text: "Learn react basics",
      day: "July 20th at 2:00pm",
      reminder: true,
    },
  ]);

  //toggle task Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <AddTask />
      <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} />
    </div>
  );
}

export default App;
