import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);

    this.state = {
      count: 0,
      count2: 0,
      userData: {
        name: "Dummy Name",
        address: {
          city: "Dummy City",
        },
        phone: "+9 023923627365",
      },
    };
  }

  async componentDidMount() {
    // api call
    console.log("componentDidMount");
    const res = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const response = await res.json();
    this.setState({
      userData: response,
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate function called");
  }

  componentWillUnmount() {
    console.log("ComponentWIllUnmount");
  }

  render() {
    console.log("Render function");

    // const { name, city } = this.props;
    const { count, count2 } = this.state;
    const { name, address, phone } = this.state.userData;

    return (
      <div>
        <h2>Name: {name}</h2>
        <h3>City: {address.city}</h3>
        <h4>Contact: {phone}</h4>
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
      </div>
    );
  }
}

export default UserClass;
