import React, { Component } from '../../../node_modules/react';
import Helper from '../../helper';
import './EditTask';

class EditTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskId: this.props.dataTask.taskId,
            title: this.props.dataTask.title,
            description: this.props.dataTask.description,
            date: this.props.dataTask.date,
            isCompleted: this.props.dataTask.isCompleted
        };
    }

    onChangeText = (name) => (event) => {
        this.setState({ [name]: event.target.value });
    };

    onCheckChange = (event) => {
        console.log(event.target.checked);
        this.setState({ isCompleted: event.target.checked });
    };

    save = () => {
        let newTaskId = this.state.taskId;
        if(!newTaskId) {
            newTaskId = Helper.createRandomString(10);
            this.setState({ taskId: newTaskId});
        }
        const data = Object.assign(this.state, {});
        data.taskId = newTaskId;
        const tasks = Helper.parseJsonToObject(Helper.getData('tasks'));
        tasks.push(newTaskId);
        Helper.saveData('tasks', Helper.toJson(tasks));
        Helper.saveData(newTaskId, Helper.toJson(data));
        this.props.closeEditTask();
    };

    render() {
        return (
            <div className="EditTask">
                <button type="button" onClick={this.props.closeEditTask}>Back to list of tasks</button>
                <form>
                    <input type="text" name="title" value={this.state.title} onChange={this.onChangeText('title')} />
                    <input type="date" name="date" value={this.state.date} onChange={this.onChangeText('date')} />
                    <textarea name="description" cols="30" rows="10" onChange={this.onChangeText('description')}>
                        {this.state.description}
                    </textarea>
                    <input type="checkbox" name="isCompleted" checked={this.state.isCompleted}
                        onChange={this.onCheckChange}
                    />
                    <button type="button" onClick={this.save}>Save</button>
                </form>
            </div>
        );
    }

    static defaultProps = {
        taskId: 0,
        title: '',
        description: '',
        date: '',
        isCompleted: false
    };
};

export default EditTask;