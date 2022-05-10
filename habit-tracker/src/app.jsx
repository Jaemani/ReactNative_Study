import "./app.css";
import Habits from "./components/habits";
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
                <span className="title">Habit Tracker {this.state.habits.length}</span>
                <input 
                    type="text"
                    className="input"
                    value={this.state.inputText}
                    onClick={this.firstClick}
                    onChange={this.inputControl}
                >
                </input>
                <input 
                    type="submit"
                    className="submit"
                    value="Add"
                    onClick={this.addHabit}
                >
                </input>
                <Habits 
                    habits={this.state.habits} 
                    appT={this}
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
