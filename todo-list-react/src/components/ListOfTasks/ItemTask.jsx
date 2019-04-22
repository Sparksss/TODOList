import React, { Component } from 'react';
import Helper from '../../helper';

class ItemTask extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            description: this.props.description,
            date: this.props.date,
            isCompleted: this.props.isCompleted
        };
    }

    onChangeChecked = (event, taskId) => {
        this.setState({ isCompleted: event.target.checked });
        Helper.saveData(taskId, Helper.toJson(this.state));
    };


    



    render() {
        return (
            <>
                <td>
                    {this.props.taskId}
                </td>
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
                    <input type="checkbox" name="completed" value={task.isCompleted} />
                </td>
                <td>
                    <button>Delete task</button>
                </td>
            </>
        );
    }
};

export default ItemTask;