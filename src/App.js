import React from 'react';
import './App.css';

// Components
import NavBarButton from './components/NavBarButton';

function App() {
  return (
    <div className='navBar'>
      <NavBarButton title='Greetings' />
      <NavBarButton title='About Me' />
      <NavBarButton title='Projects' />
      <NavBarButton title='Contact' />
    </div>
  );
}

export default App;
