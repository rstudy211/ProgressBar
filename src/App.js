import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [task, setTask] = useState(0);
  const [taskCompleted, setTaskCompleted] = useState(0);
  const color = "#000";
  const addTask = () => {
    console.log(task);
    setTask((task) => task + 1);
  };
  const addCompletedTask = () => {
    console.log(taskCompleted);
    setTaskCompleted((taskCompleted) => taskCompleted + 1);
  };
  return (
    <>
      <ProgressBar
        count={50}
        totalTask={task}
        completedTask={taskCompleted}
        color={color}
      ></ProgressBar>
      <div className="flex gap-7 justify-center items-center py-2">
        <button
          onClick={addTask}
          className="bg-slate-100 text-slate-500 px-2 rounded py-1"
        >
          Add Task
        </button>
      </div>
      <div className="flex gap-7 justify-center items-center">
        <button
          className="bg-blue-100 text-blue-700 px-2 rounded py-1"
          onClick={addCompletedTask}
        >
          Add complete Task
        </button>
      </div>
    </>
  );
}

export default App;
