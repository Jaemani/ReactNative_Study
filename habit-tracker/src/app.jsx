import "./app.css";
import Habits from "./components/habits";
import Navigator from "./components/navigator";
import React, { Component } from "react";

export default class App extends Component {
    
    state = {
        firstClick: true,
        inputText: "Habit",
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
        count == 0 ? (count = 0) : count--;
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
        const habits = this.state.habits.filter((item) => item.id !== habit.id);
        this.setState({ habits });
    };

    addHabit = () => {
        let habits = [...this.state.habits];
        const habit = { 
            id: habits.length+1,
            name: this.state.inputText,
            count: 0
        }
        habits.push(habit);
        this.state.firstClick=true;
        this.state.inputText="Habit";
        this.setState({habits});
    };

    inputControl = (event) => {
        this.setState({inputText: event.target.value})
    };
    
    firstClick = () => {
        let firstClick = this.state.firstClick
        let inputText = this.state.inputText
        firstClick===true ? inputText="" : inputText=inputText;
        firstClick = false;
        this.setState({firstClick, inputText});
    };

    resetAll = () => {
        const habits = [];
        this.setState({habits});
    };

    render() {
        return (
            <nav className="app">
                <Navigator
                    habits={this.state.habits} 
                    inputText={this.state.inputText}
                    firstClick={this.firstClick}
                    inputControl={this.inputControl}
                    addHabit={this.addHabit}
                />
                <Habits 
                    habits={this.state.habits} 
                    // appT={this}  // this를 props로 전달하는 것은 좋지 않은 것 같다. 이유는 모르겠다, 감이다.
                    handleIncreasement={this.handleIncreasement}
                    handleDecreasement={this.handleDecreasement}
                    handleDelete={this.handleDelete}
                />
                <button className="reset" onClick={this.resetAll}>Reset All</button>
            </nav>
        );
    }
}

// 컴포넌트가 아닌 function으로 정의된 App

// function App() {
//   return <Habits></Habits>;
// }

// export default App;
