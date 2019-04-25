import React, { Component } from '../../../node_modules/react';
import ListOfTasks from '../../components/ListOfTasks/ListOfTasks';
import Helper from '../../helper';
import EditTask from '../../components/EditTask/EditTask';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            dataTask: null,
            showCurrentTask: false
        };
    }
    

    getAllTasks = () => {
        let listOfTasks = Helper.getData('tasks');
        listOfTasks = Helper.parseJsonToObject(listOfTasks);
        if (listOfTasks !== null) {
            const dataOfTasks = [];
            for(let i = 0, size = listOfTasks.length;i < size; i++ ) {
                dataOfTasks.push(Helper.parseJsonToObject(Helper.getData(listOfTasks[i])));
            }
            this.setState({ tasks: dataOfTasks, dataTask: null, showCurrentTask: false});
        } else {
            Helper.saveData('tasks', Helper.toJson([]));
        }
    };

    componentDidMount() {
       this.getAllTasks();
    }

    showCurrentTask = (taskId) => {
        const findedTask = this.state.tasks.slice().find((task) => task.taskId === taskId);
        this.setState({ dataTask: findedTask, showCurrentTask: true });
    };

    removeTask = (taskId) => {
        Helper.removeTask(taskId);
        const changedListOfTasks = this.state.tasks.slice().filter((task) => task.taskId !== taskId);
        const changedListOfTaskIds =  Helper.parseJsonToObject(Helper.getData('tasks')).filter((taskId) => taskId !== taskId);
        Helper.saveData('tasks', Helper.toJson(changedListOfTaskIds));
        this.setState({ tasks: changedListOfTasks });
    };

    addNewTask = () => {
        this.setState({ dataTask: {}, showCurrentTask: true });
    };

    closeEditTask = () => {
        this.setState({ dataTask: null, showCurrentTask: false });
    };

    removeAllTasks = () => {
        const listOfTasks = Helper.parseJsonToObject(Helper.getData('tasks'));
        for(let i = listOfTasks.length; i > -1; i--) {
            Helper.removeTask(listOfTasks[i]);
        }
        Helper.saveData('tasks', Helper.toJson([]));
        this.setState({tasks: []});
    };

    render() {
        const tableTasks = this.state.tasks.length > 0 ?
            <ListOfTasks
                tasks={this.state.tasks}
                showCurrentTask={this.showCurrentTask}
                removeTask={this.removeTask}
            /> :
            <tr>
                <td></td>
                <td><p>Please add the task</p></td>
                <td></td>
                <td></td>
            </tr>
            ;
        return (
            <div className="container">
                {this.state.showCurrentTask ?
                    <EditTask
                        dataTask={this.state.dataTask}
                        closeEditTask={this.closeEditTask}
                        getAllTasks={this.getAllTasks}
                    /> :
                    <div>
                        <h1>Todo list</h1>
                        <button type="button" onClick={this.addNewTask} className="AddButton">Add new task</button>
                        {this.state.tasks.length > 0? <button onClick={this.removeAllTasks}>Remove all tasks</button> : ''}
                        <table>
                            <thead>
                                <tr>
                                    <th>Title task</th>
                                    <th>Date of creation</th>
                                    <th>Completed or not</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableTasks}
                            </tbody>
                        </table>
                    </div>
                }
            </div>

        );
    }

    static defaultProps = {
        tasks: []
    };

};

export default Dashboard;