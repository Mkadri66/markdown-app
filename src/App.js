import React, { Component} from 'react';
import './App.css';
import { sampleText } from './sampleText'
import marked from 'marked'

class App extends Component {
  state = {
    text : sampleText
  }

  handleChange = (event) => {
    // on recupere la valeur de l'input
    const text = event.target.value
    // on modifie le state
    this.setState({text})
  }

  renderText = text => {
     const __html = marked(text, { sanitize: true })
     return { __html}
    }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <textarea 
              onChange={this.handleChange}
              value={this.state.text}
              className="form-control"
              rows="35">
               
              </textarea>
            </div>
            <div className="col-sm-6">
              <div>
                <div dangerouslySetInnerHTML={this.renderText(this.state.text)}>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
