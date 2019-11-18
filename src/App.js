import React from 'react';
import Registration from './components/Registration';
import { Provider } from 'react-redux';
import './App.css';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <p>New app</p>
        </header>
        <Registration />
      </div>
    </Provider>
  );
}

export default App;
