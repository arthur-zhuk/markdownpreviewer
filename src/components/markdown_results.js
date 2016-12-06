import React, { Component } from 'react';
import marked from 'marked'; 

class MarkdownResults extends Component {
  getMarkdownText(value) {
    var rawMarkup = marked(value, {sanitize: true});
    return { __html: rawMarkup };
  }
  render() {
    return (
      <div 
        className="col-md-6"
      >
        <span dangerouslySetInnerHTML={this.getMarkdownText(this.props.input)} /> 
      </div>
    )
  }
}

export default MarkdownResults;
