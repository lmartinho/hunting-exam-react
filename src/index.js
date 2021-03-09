import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class Question extends React.Component {
  render() {
    const answers = this.props.question.answers.map(answer =>
        <li onClick={() => {this.props.onAnswerClick(answer)}}>{answer.text}</li>
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
    this.state = {
      questions: questions,
      questionIndex: 0
    }
  }

  onAnswerClick(answer) {
    if (answer.correct) {
      const questions = this.state.questions.slice();
      this.setState({
        questions: questions,
        questionIndex: this.state.questionIndex + 1
      })
      
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

