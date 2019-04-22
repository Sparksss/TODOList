import React from 'react';
import ItemTask from './ItemTask';

const listOfTasks = (props) => {
    return (
        <>
            {props.tasks.map((task) => {
                return (
                    <tr>
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

export default listOfTasks;