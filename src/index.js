import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class Question extends React.Component {
  render() {
    const answers = this.props.question.answers.map(answer =>
        <li>{answer.answer}</li>
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

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: require('./data/questions.json'),
    }
  }
  render() {
    const questions = this.state.questions.map((question) => 
    <Question question={question}></Question>
    );
    return (
      <div className="game">
        {questions}  
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

