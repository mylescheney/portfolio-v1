import React from 'react';
import '../App.css';
import { names } from '../resources/names';

const GreetingMessage = () => {
    const rNum = Math.floor(Math.random() * 59);
    const name = names[rNum];
    
    return (
        <div className='greetingMessage'>
            <p className='mainGreeting'>Greetings, {name}</p>
            <p className='greetingDisclaimer'>That was a guess, but if your name is {name} that was pretty cool, right?</p>
        </div>
    )
}

export default GreetingMessage;