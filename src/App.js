import React from 'react';
import './App.css';

// Components
import NavBarButton from './components/NavBarButton';

function App() {
  return (
    <div>
      <div className='navBar'>
        <NavBarButton title='Greetings' />
        <NavBarButton title='About Me' />
        <NavBarButton title='Projects' />
        <NavBarButton title='Contact' />
      </div>
      <div className='periBanner'>
        <div className='banner'>
          <div className='bannerImage'>
            <p style={{ color: '#fff' }}>Banner image goes here</p>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
