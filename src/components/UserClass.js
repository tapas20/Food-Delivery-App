import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      // count: 0,
      // count2: 2,
      userInfo: {
        name: "Dummy",
        lacation: "Default",
        // avatar_url: "https://dummy-photo.com",
      },
    };
    console.log("Child Constructor");
  }

  async componentDidMount() {
    console.log("Child Component Did Mount");
    //Api call

    const data = await fetch("https://api.github.com/users/tapas20");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }
  componentDidUpdate() {
    console.log("child component Did Updated!");
  }

  componentWillUnmount() {
    console.log("child component will Unmounted!");
  }
  render() {
    // const { name, location } = this.props;
    // const { count, count2 } = this.state;

    console.log("Child Render");
    const { name, location, avatar_url, login } = this.state.userInfo;
    // debugger;
    return (
      <div className="user-card">
        {/* <h1>Count = {count}</h1> */}
        {/* <h1>Count2 = {count2}</h1> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count increase
        </button> */}

        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @{login}</h4>
      </div>
    );
  }
}

export default UserClass;
