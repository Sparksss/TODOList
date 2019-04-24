import React from '../../../node_modules/react';
import ItemTask from './ItemTask';

const ListOfTasks = (props) => {
    return (
        <>
            {props.tasks.map((task) => {
                return (
                    <tr key={task.taskId}>
                        <ItemTask
                            task={task}
                            showCurrentTask={props.showCurrentTask}
                            removeTask={props.removeTask}
                        />
                    </tr>
                );
            }
            )}
        </>
    );
};


export default ListOfTasks;