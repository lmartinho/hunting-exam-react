import React from 'react';

export class Question extends React.Component {
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
  
  