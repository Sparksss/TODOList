import React, { Component } from 'React';
import Helper from '../../helper';

class EditTask extends React {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.task.title,
            description: this.props.task.description,
            date: this.props.task.date,
            isCompleted: this.props.task.isCompleted
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
        const data = {};
        data = Object.assign(this.state, data);
        Helper.saveData(Helper.toJson(data));
    };

    render() {
        <div className="EditTask">
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
    }

    static defaultProps = {
        description: '',
        date: '',
        title: '',
        isCompleted: false
    };
};

export default EditTask;