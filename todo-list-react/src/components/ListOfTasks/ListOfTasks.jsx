import React from 'react';


const listOfTasks = (props) => {
    return (
        {props.tasks.map((task) => {
                return (
                    <tr>
                        <td>
                            <h5 onclick={this.showCurrentTask}>{task.title}</h5>
                        </td>
                        <td>
                            <p>{task.description}</p>
                        </td>
                        <td>
                            <blockquote>{task.date}</blockquote>
                        </td>
                        <td>
                            <button>Delete task</button>
                        </td>
                        <td>
                            <input type="checkbox" name="completed" value={task.isCompleted} />
                        </td>
                    </tr>
                );
            }
            )
        }
    );
};

export default listOfTasks;