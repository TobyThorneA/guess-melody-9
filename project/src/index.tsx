import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  ERRORS_COUNT:3,
  CORRECT_ANSWERS: 600,
  INCORRECT_ANSWERS: 250,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      errorsCount={Setting.ERRORS_COUNT}
      correctAnswer={Setting.CORRECT_ANSWERS}
      incorrectAnswer={Setting.INCORRECT_ANSWERS}
    />
  </React.StrictMode>,
  document.getElementById('root'));
