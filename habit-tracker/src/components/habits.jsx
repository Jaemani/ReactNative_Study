import React, { Component } from "react";
import Habit from "./habit";

export default class Habits extends Component {

    render() {
        return (
            <ul>
                {this.props.habits.map((habit) => (
                    <Habit
                        key={habit.id}
                        habit={habit}
                        onIncreasement={this.props.handleIncreasement}
                        onDecreasement={this.props.handleDecreasement}
                        onDelete={this.props.handleDelete}
                    /> // key.. 와 habit..는 props (컴포넌트 외부에서 전달받은 데이터)
                ))}
            </ul>
        );
    }
}
