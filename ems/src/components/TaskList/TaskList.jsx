import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompletTask from "./CompletTask";
import FaildTask from "./FaildTask";

const TaskList = ({ data }) => {

    return (
        <div
            id="taskList"
            className="h-[50%] flex items-center overflow-x-auto justify-start gap-5 flex-nowrap w-full py-5 mt-10 "
        >
            {data.tasks.map((elm, ind) => {
                console.log('line 16', elm.active)
                if (elm.active) {
                    return <AcceptTask key={ind} data={elm} />
                }
                if (elm.newTask) {
                    return <NewTask key={ind} data={elm} />
                }
                if (elm.completed) {
                    return <CompletTask key={ind} data={elm} />
                }
                if (elm.failed) {
                    return <FaildTask key={ind} data={elm} />
                }
            })}
        </div>
    );
};

export default TaskList;
