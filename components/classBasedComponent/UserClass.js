import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("props from class", props);
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };
  }

  render() {
    console.log("this.state", this.state);

    const { name, city } = this.props;
    const { count, count2 } = this.state;

    return (
      <div>
        <h2>Name: {name}</h2>
        <h3>City: {city}</h3>
        <h4>Contact: +91 39483846762</h4>
        <h4>Counter: {count}</h4>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Counter
        </button>
        <h4>Counter2: {count2}</h4>
      </div>
    );
  }
}

export default UserClass;
