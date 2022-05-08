import React, { Component } from "react";

export default class Habit extends Component {

    render() {
        const { name, count } = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button
                    className="habit-button habit-increase"
                    onClick={()=>{this.props.onIncreasement(this.props.habit)}}
                >
                    <i className="fa-solid fa-square-plus"></i>
                </button>
                <button
                    className="habit-button habit-decrease"
                    onClick={()=>{this.props.onDecreasement(this.props.habit)}}
                >
                    <i className="fa-solid fa-square-minus"></i>
                </button>
                <button
                    className="habit-button habit-delete"
                    onClick={()=>{this.props.onDelete(this.props.habit)}}
                >
                    <i className="fa-solid fa-trash"></i>
                </button>
            </li>
        );
    }
}
