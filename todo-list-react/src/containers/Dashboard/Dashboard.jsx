import React, { Component } from 'react';
import Helper from './../../helper';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    componentDidMount() {
        const listOfTasks = Helper.parseJsonToObject(Helper.getData());
        if (typeof (listOfTasks) == 'object' && listOfTasks instanceof Array) {
            this.setState({ tasks: listOfTasks });
        }
    }

    showCurrentTask = (taskId) => {

    };

    render() {
        const listOfTasks = this.state.tasks.map((task) => {
            return (
             
            );
        });
        return (
            <div className="container">
                <h1>Please add new task</h1>
                <table>
                    <thead>
                        <th>Title task</th>
                        <th>Date of creation</th>
                        <th>Completed or not</th>
                    </thead>
                    <tbody>
                        {listOfTasks}
                    </tbody>
                </table>
            </div>

        );
    }

};

export default Dashboard;