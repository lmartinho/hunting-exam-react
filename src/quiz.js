import React from 'react';
import { Question } from './question';

export class Quiz extends React.Component {
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