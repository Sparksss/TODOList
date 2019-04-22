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
        const {tasksId, date, title, isComplited} = this.state;
        return (
            <>
                <td>
                    {tasksId}
                </td>
                <td>
                    <h5 onclick={() => this.props.showCurrentTask(this.props.tasktaskId)}>{title}</h5>
                </td>
                <td>
                    <blockquote>{date}</blockquote>
                </td>
                <td>
                    <input type="checkbox" name="completed" value={isComplited} />
                </td>
                <td>
                    <button onClick={() => this.props.removeTask(tasksId)}>Delete task</button>
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