import React, { Component} from 'react';
import './App.css';
import { sampleText } from './sampleText'
import marked from 'marked'

class App extends Component {
  state = {
    text : sampleText
  }
  // Cycle de vie du component 
  componentDidMount() {
    //console.log('je suis monté')
    // on recupere le contenu stocké à la clé "text"
    const text = localStorage.getItem('text')
    if (text){
      this.setState({text})
    } else {
      this.setState({text: sampleText})
    }
    
  }

  componentDidUpdate(){
    //console.log('je suis mis à jour')
    const { text } = this.state
    localStorage.setItem('text', text)
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
