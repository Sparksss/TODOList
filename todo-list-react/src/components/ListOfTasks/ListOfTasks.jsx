import React from 'react';
import ItemTask from './ItemTask';

const ListOfTasks = (props) => {
    console.log(props);
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


export default ListOfTasks;