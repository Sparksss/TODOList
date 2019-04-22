import React from 'react';
import ItemTask from './ItemTask';

const listOfTasks = (props) => {
    return (
        <>
            {props.tasks.map((task) => {
                return (
                    <tr>
                        <ItemTask task={task} />
                    </tr>
                );
            }
            )}
        </>
    );
};

export default listOfTasks;