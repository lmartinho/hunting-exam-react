import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class Question extends React.Component {
  render() {
    const answers = this.props.question.answers.map(answer =>
        <li key={answer.text} onClick={() => {this.props.onAnswerClick(answer)}}>{answer.text}</li>
    );
    
    return (
      <div>
        <h1>{this.props.question.question}</h1>
        <ul>
          {answers}
        </ul>
      </div>
    );
  }
}

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    const questions = require('./data/questions.json');
    const random = true;
    this.state = {
      questions: questions,
      questionIndex: random ? Math.floor(Math.random() * (questions.length - 1)) : 0,
      random: random
    }
  }

  nextQuestionIndex() {
    const questions = this.state.questions.slice();
    const questionIndex = this.state.random ? Math.floor(Math.random() * (questions.length - 1)) : this.state.questionIndex + 1;
    return questionIndex;
  }

  onAnswerClick(answer) {
    if (answer.correct) {
      const nextQuestionIndex = this.nextQuestionIndex();
      this.setState({questionIndex: nextQuestionIndex});
      
    } else {
      alert('ERRADO! Tenta novamente');
    }
  }

  render() {
    const currentQuestion = this.state.questions[this.state.questionIndex];
    return (
      <div className="quiz">
        <Question question={currentQuestion} onAnswerClick={answer => this.onAnswerClick(answer)}></Question>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Quiz />,
  document.getElementById('root')
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./serviceWorker.js', {scope: './'})
  .then((reg) => {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch((error) => {
    // registration failed
    console.log('Registration failed with ' + error);
  });
} else {
  console.error('no service worker');
}