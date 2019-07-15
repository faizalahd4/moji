import React from 'react';
import { withTranslation } from 'react-i18next';
import './styles/main.scss';

const App = props =>  {
  return (
    <div className="App">
      <header className="App-header">
        {props.t('welcome.title', {key_1: 'Testing key value pair'})}
        
      </header>
    </div>
  );
}

export default withTranslation()(App);
