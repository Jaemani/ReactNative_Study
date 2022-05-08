import React, { Component } from "react";
import Habit from "./habit";

export default class Habits extends Component {
    state = {
        habits: [
            { id: 1, name: "Reading", count: 0 },
            { id: 2, name: "Running", count: 0 },
            { id: 3, name: "Coding", count: 0 },
        ],
    };

    handleIncreasement = (habit) => {
        const habits = [...this.state.habits]; // spread 하면 referencing이므로
        // 이를 수정하는 것은 결국 state 안의 값을 수정하는 것과 같다.
        const index = habits.indexOf(habit);
        habits[index].count++; // 사실 object를 직접 수정하는 것도 좋지 않다. 
        this.setState({ habits }); // key와 value가 이름이 동일할 경우 생갹가능하다.
        // this.setState({habits: habits});
        
    };

    handleDecreasement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        let count = habits[index].count;
        count == 0 ? count=0 : count--;
        habits[index].count = count; // let 문은 copy by value로 동작하므로 다시 habits에 반영해준다.
        // 사실 이렇게 작업하는 것도 너무 냄새나..
        this.setState({ habits });
    };

    handleDelete = (habit) => {
        // const habits = [...this.state.habits];
        // const index = habits.indexOf(habit);
        // delete habits[index];
        // this.setState({ habits });

        // -> delete를 하면 list [ empty item, ..] 이렇게 undefine로 됨

        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({ habits });

        
    };

    render() {
        return (
            <ul>
                {this.state.habits.map((habit) => (
                    <Habit
                        key={habit.id}
                        habit={habit}
                        onIncreasement={this.handleIncreasement}
                        onDecreasement={this.handleDecreasement}
                        onDelete={this.handleDelete}
                    /> // key.. 와 habit..는 props (컴포넌트 외부에서 전달받은 데이터)
                ))}
            </ul>
        );
    }
}
