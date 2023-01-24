import React from "react";
import { differenceInDays } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  const date = new Date();

  return (
    <div className="p-6 bg-white rounded-md leading-8 mt-4 shadow-zinc-500">
      <h3 className="decoration-red-300 text-lg">{taskObj.title}</h3>
      <div
        className={
          differenceInDays(new Date(taskObj.deadline), new Date(date)) > 3
            ? "background-blue"
            : "background-red"
        }
      >
        son teslim:{" "}
        <span>
          {differenceInDays(new Date(taskObj.deadline), new Date(date)) < 0 &&
          taskObj.status === "yapıldı"
            ? "teslim edildi"
            : `${differenceInDays(
                new Date(taskObj.deadline),
                new Date(date)
              )} gün kaldı`}
        </span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
