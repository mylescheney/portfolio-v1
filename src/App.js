import React from 'react';
import './App.css';

// Components
import NavBarButton from './components/NavBarButton';
import GreetingBanner from './components/GreetingBanner';
import GreetingMessage from './components/GreetingMessage';

function App() {
  return (
    <div>
      <div className='navBar'>
        <NavBarButton title='Greetings' />
        <NavBarButton title='About Me' />
        <NavBarButton title='Projects' />
        <NavBarButton title='Contact' />
      </div>
      <GreetingBanner />
      <GreetingMessage />
    </div >
  );
}

export default App;
