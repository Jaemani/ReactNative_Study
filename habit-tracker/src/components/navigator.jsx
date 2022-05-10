import React, { Component } from "react";

export default class Navigator extends Component {
    render() {
        return (
            <>
                <span className="title">
                    Habit Tracker {this.props.habits.filter((item) => item.count !== 0).length}
                </span>
                <input
                    type="text"
                    className="input"
                    value={this.props.inputText}
                    onClick={this.props.firstClick}
                    onChange={this.props.inputControl}
                ></input>
                <input
                    type="submit"
                    className="submit"
                    value="Add"
                    onClick={this.props.addHabit}
                ></input>
            </>
        );
    }
}
