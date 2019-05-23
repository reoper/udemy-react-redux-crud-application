import React, { Component } from 'react';
import PropTypes from 'prop-types';

// クラスコンポーネント
class App extends Component {
  render() {
    const profiles = [
      { name: 'Taro', age: 10},
      { name: 'Hanako', age: 15},
      { name: 'NoName', age: 8}
    ]

    const greeting = 'view variable';
    const dom = <div className="foo">{greeting}</div>

    const users = profiles.map((profile, index) => {
      return <User name={profile.name} age={profile.age} key={index}  />;
    });

    return (
        <React.Fragment>
          {dom}
          <label htmlFor="bar">Bar : </label>
          <input type="text" name="bar" id="bar"
            onClick={ () => alert('message') }
            onChange={ () => console.log('text changed')}
          />

          {users}
        </React.Fragment>
    );
  }
}

// functionalコンポーネント
const User = (props) => {
  return <div>Hi, Iam {props.name}, and {props.age}years old.</div>;
}

// prop-types
User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
}


export default App;
