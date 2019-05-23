import React, { Component } from 'react';

// クラスコンポーネント
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

          <Cat />
        </React.Fragment>
        // </div>
    );
  }
}

// functionalコンポーネント
const Cat = () => {
  return <div>Meow!</div>;
}
export default App;
