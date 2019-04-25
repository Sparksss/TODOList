import React, { Component } from '../../../node_modules/react';
import Helper from '../../helper';
import './EditTask.css';

class EditTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskId: this.props.dataTask.taskId,
            title: this.props.dataTask.title,
            description: this.props.dataTask.description,
            date: this.props.dataTask.date || '',
            isCompleted: this.props.dataTask.isCompleted || false
        };
    }

    onChangeText = (name) => (event) => {
        this.setState({ [name]: event.target.value });
    };

    onCheckChange = (event) => {
        this.setState({ isCompleted: event.target.checked });
    };

    saveNew = () => {
        const newTaskId = Helper.createRandomString(10);
        const data = Object.assign(this.state, {});
        data.taskId = newTaskId;
        const tasks = Helper.parseJsonToObject(Helper.getData('tasks'));
        tasks.push(newTaskId);
        Helper.saveData('tasks', Helper.toJson(tasks));
        Helper.saveData(newTaskId, Helper.toJson(data));
        this.props.getAllTasks();
    };

    editTask = () => {
        const data = Object.assign(this.state, {});
        Helper.saveData(this.state.taskId, Helper.toJson(data));
        this.props.getAllTasks();
    };

    chooserAction = () => {
        if (this.state.taskId) {
            return this.editTask();
        }
        return this.saveNew();
    };

    render() {
        return (
            <div className="EditTask">
                <button type="button" onClick={this.props.closeEditTask}>Back to list of tasks</button>
                <form>
                    <fieldset className="FormTask">
                        <legend>Please add information about your task</legend>
                        <label>
                            <p>Please write a title of task</p>
                            <input type="text" name="title" value={this.state.title} onChange={this.onChangeText('title')} />
                        </label>
                        <label>
                            <p>Please add a task end date</p>
                            <input type="date" name="date" value={this.state.date} onChange={this.onChangeText('date')} />
                        </label>
                        <label>
                            <p>Please add describe of task</p>
                            <textarea name="description" cols="30" rows="10" onChange={this.onChangeText('description')} value={this.state.description}></textarea>
                        </label>

                        <label>
                            <p>Task is completed    ?</p>
                        <input type="checkbox" name="isCompleted" checked={this.state.isCompleted}
                                onChange={this.onCheckChange}
                            />
                        </label>

                        <button className="SaveButton" type="button" onClick={this.chooserAction}>Save</button>
                    </fieldset>
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
