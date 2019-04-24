import React, { Component } from '../../../node_modules/react';
import Helper from '../../helper';

class ItemTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskId: this.props.task.taskId,
            title: this.props.task.title,
            description: this.props.task.description,
            date: this.props.task.date,
            isCompleted: this.props.task.isCompleted
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
                    <h5 onClick={() => this.props.showCurrentTask(this.state.taskId)}>{this.state.title}</h5>
                </td>
                <td>
                    <blockquote>{this.state.date}</blockquote>
                </td>
                <td>
                    <input type="checkbox" name="isCompleted" value={this.state.isComplited} />
                </td>
                <td>
                    <button onClick={() => this.props.removeTask(this.state.taskId)}>Delete task</button>
                </td>
            </>
        );
    }

    static defaultProps = {
        title: '',
        date: '',
        description: '',
        isCompleted: false
    };
};

export default ItemTask;