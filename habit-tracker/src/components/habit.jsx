import React, { Component } from 'react'

export default class Habit extends Component {
  render() {
    return (
        <li className="habit">
            <span className="habit-name">Reading</span>
            <span className="habit-count">8</span>
            <button className ="habit-button habit-increase">
                <i className="fa-solid fa-square-plus"></i>
            </button>
            <button className ="habit-button habit-decrease">
                <i className="fa-solid fa-square-minus"></i>
            </button>
            <button className ="habit-button habit-delete">
                <i className="fa-solid fa-trash"></i>
            </button>
        </li>

    // <>
    //     <span className="habit-name">Running</span>;   
    // </>,

    // <>
    //     <span className="habit-name">Coding</span>;
    // </>

    )
  }
}
