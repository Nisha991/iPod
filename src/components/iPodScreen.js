import React from 'react';
import './static/iPodScreen.css'

// Selects and returns the JSX to be returned based on the option selected in the main menu
const iPodScreen = ({primary, selected}) => {
    switch (selected) {
        //Base JSX for main menu
        case 0:
            return (
                <div className='displayScreen'>
                    <h2>iPod.js</h2>
                    <ul className='list'>
                        <li className={checkPrimary(1, primary)}>Cover Flow</li>
                        <li className={checkPrimary(2, primary)}>Music</li>
                        <li className={checkPrimary(3, primary)}>Games</li>
                        <li className={checkPrimary(4, primary)}>Settings</li>
                    </ul>
                </div>
            );
        case 1:
            return <div className='mid'><strong>Coverflow</strong></div>;
        case 2:
            return (
                <div className="mid">
                    <i className="fas fa-music fa-7x" />
                    <div><strong>Music</strong></div>
                </div>
            );
        case 3:
            return (
                <div className='mid'>
                    <i className="fas fa-dice fa-7x" />
                    <div><strong>Games</strong></div>
                </div>
            );
        case 4:
            return (
                <div className='mid'>
                    <i className="fas fa-cog fa-7x" style={{color: "black"}}/>
                    <div><strong>Settings</strong></div>
                </div>
            );
        default: return;
    }
}

//Function used to check and apply classes to the currently selected option
const checkPrimary = (id, primary) => {
    if (id === primary)
        return 'item bg-primary';
    else
        return 'item';
}

export default iPodScreen;