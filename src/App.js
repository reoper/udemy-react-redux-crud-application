import React, { Component } from 'react';

// クラスコンポーネント
class App extends Component {
  render() {
    const profiles = [
      { name: 'Taro', age: 10},
      { name: 'Hanako', age: 15},
      { name: 'Ichiro'},
    ]

    const greeting = 'view variable';
    const dom = <div className="foo">{greeting}</div>

    const users = profiles.map((profile, index) => {
      return <User name={profile.name} age={profile.age} key={index}  />;
    });

    return (
        // <div>
        <React.Fragment>
          {dom}
          <label htmlFor="bar">Bar : </label>
          <input type="text" name="bar" id="bar"
            onClick={ () => alert('message') }
            onChange={ () => console.log('text changed')}
          />

          {users}
          {/* <User
            name={"Taro"}
            age={10}
          />
          <User
            name={"Hanako"}
            age={15}
          /> */}
        </React.Fragment>
        // </div>
    );
  }
}

// functionalコンポーネント
const User = (props) => {
  return <div>Hi, Iam {props.name}, and {props.age}years old.</div>;
}

// Default props
User.defaultProps = {
  age: 8,
}


export default App;
