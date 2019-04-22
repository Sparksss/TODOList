import React, { Component } from 'react';
import ListOfTasks from './../../components/ListOfTasks/ListOfTasks';
import Helper from './../../helper';
import EditTask from '../../components/EditTask/EditTask';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            dataTask: {},
            showCurrentTask: false
        };
    }

    componentDidMount() {
        const listOfTasks = Helper.parseJsonToObject(Helper.getData());
        if (typeof (listOfTasks) == 'object' && listOfTasks instanceof Array) {
            this.setState({ tasks: listOfTasks });
        }
    }

    showCurrentTask = (taskId) => {
        const findedTask = this.state.slice().find((task) => task.taskId == taskId);
        this.setState({ dataTask: findedTask, showCurrentTask: true });
    };

    removeTask = (taskId) => {
        Helper.removeTask(taskId);
        const changedListOfTasks = this.state.tasks.slice().filter((task) => { return task.taskId !== taskId });
        this.setState({ tasks: changedListOfTasks });
    };

    render() {
        return (
            <div className="container">
                {this.state.showCurrentTask ?
                    <EditTask dataTask={this.state.dataTask} /> :
                    <div>
                        <h1>Please add new task</h1>
                        <table>
                            <thead>
                                <th>Title task</th>
                                <th>Date of creation</th>
                                <th>Completed or not</th>
                                <th>Delete</th>
                            </thead>
                            <tbody>
                                <ListOfTasks tasks={this.state.tasks} />
                            </tbody>
                        </table>
                    </div>
                }
            </div>

        );
    }

};

export default Dashboard;