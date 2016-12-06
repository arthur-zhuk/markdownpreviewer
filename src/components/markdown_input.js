import React, { Component } from 'react';
import MarkdownResults from './markdown_results';
//import marked from 'marked'; 

class MarkdownInput extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = { inputvalue: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*' };
  }
  
  onInputChange() {
    this.setState({ inputvalue: this.refs.textarea.value });
  }

  render() {
    return (
      <div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="exampleTextarea">Enter input here:</label>
            <textarea
              className="form-control"
              id="exampleTextarea"
              rows="20"
              ref="textarea"
              defaultValue={this.state.inputvalue}
              onChange={this.onInputChange} />
          </div>
        </div>
        <MarkdownResults input={this.state.inputvalue} />
      </div>
    )
  }
}

export default MarkdownInput;

