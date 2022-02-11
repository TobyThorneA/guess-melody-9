import React from 'react';
// import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
// import AuthScreen from '../auth-screen/auth-screen';
// import GameOverScreen from '../game-over-screen/game-ver-screen';
// import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
// import NotFounScreen from '../not-found-screen/not-found-screen';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import WinScreen from '../win-screen/win-screen';

type AppScreenProps = {
  errorsCount:number,
  correctAnswer:number,
  incorrectAnswer: number,
}

function App(props: AppScreenProps): JSX.Element {
  return <WinScreen correctAnswer={props.correctAnswer} incorrectAnswer={props.incorrectAnswer}/>;<WelcomeScreen errorsCount={props.errorsCount}/>;

}


export default App;
