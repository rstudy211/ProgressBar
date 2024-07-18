import React, { useEffect, useState } from "react";

function Separator(props) {
  console.log(props);

  let fill = (props.Len / props.task) * props.taskCompleted;
  let fillcolor = props.fillColor ? `bg-[${props.fillColor}]` : `bg-blue-500`;
  let color = props.index < fill ? fillcolor : "bg-slate-300";
  // console.log(fillcolor);
  console.log("fill" + fill);
  // console.log(props.index < fill);
  console.log(color);

  return (
    <div
      style={{
        transform: `rotate(${props.turns}turn)`,
        display: "flex",
        position: "absolute",
        justifyContent: "start",
        width: "100%",
        height: "0.3rem",
      }}
      key={props.index}
    >
      <div
        className={`w-[10%] transition-all  ease-in duration-200 ${
          props.index < fill ? "bg-blue-500" : "bg-slate-300"
        }`}
      ></div>
    </div>
  );
}

function ProgressBar({ count, totalTask, completedTask, color }) {
  const LEN = count;
  const arr = new Array(LEN).fill(0);
  const task = totalTask;
  const taskCompleted = completedTask;
  const turns = 1 / LEN;

  return (
    <div>
      {/* <div className="h-24 w-24 bg-[#015a9e]"></div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
        // className="flex justify-center items-center py-20"
      >
        <div
          style={{
            transform: "rotate(90deg)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            borderRadius: "50%",
            borderColor: "#CBD5E1",
            // backgroundColor:"red",
            width: "200px",
            height: "200px",
          }}
          className=""
        >
          {arr.map((val, index) => {
            return (
              <Separator
                turns={index * turns}
                index={index}
                task={task}
                taskCompleted={taskCompleted}
                Len={LEN}
                fillColor={color}
              />
            );
          })}
          {parseInt(taskCompleted) <= parseInt(task) && (
            <div className=" text-slate-300 text-2xl font-bold p-0 -rotate-90">
              <span className="text-6xl z-10 text-blue-600 font-extrabold">
                {taskCompleted}
              </span>
              /{task}
            </div>
          )}
          <span className=" text-slate-400 text-2xl p-0  -rotate-90">
            {parseInt(taskCompleted) >= parseInt(task) ? (
              <p className="text-xl text-red-700">Done</p>
            ) : (
              <p className="text-xl">Task</p>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
