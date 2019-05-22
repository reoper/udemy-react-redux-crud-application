import React, { Component } from 'react';

class App extends Component {
  render() {
    const greeting = 'view variable';
    const dom = <div className="foo">{greeting}</div>
    return (
        // <div>
        <React.Fragment>
          {dom}
          <label htmlFor="bar">Bar : </label>
          <input type="text" name="bar" id="bar"
            onClick={ () => alert('message') }
            onChange={ () => console.log('text changed')}
          />
        </React.Fragment>
        // </div>
    );
  }
}

export default App;
