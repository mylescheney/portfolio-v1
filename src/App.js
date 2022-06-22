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
        <NavBarButton title='Greetings' section='' />
        <NavBarButton title='About Me' section='aboutSection' />
        <NavBarButton title='Projects' section='aboutSection' />
        <NavBarButton title='Contact' section='aboutSection' />
      </div>
      <GreetingBanner />
      <GreetingMessage />
      <div id='aboutSection'>
        <div className='sectionHeader'>
          <h2 className='sectionHeaderText'>About Me</h2>
        </div>
        <div className='sectionContent'>

        </div>
      </div>
    </div >
  );
}

export default App;
