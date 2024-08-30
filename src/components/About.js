import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/userContext";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("parent Render");
    return (
      <div>
        <h1>About Class Based Component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React web Series</h2>
        <UserClass name={"Tapu (Class Based)"} location={"Keonjhar"} />
        {/* <UserClass name={"Tapas (Class Based)"} location={"Odisha"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React web Series</h2>
//       {/* <User name={"Tapas (Functional Based)"} /> */}
//       <UserClass name={"Tapu (Class Based)"} location={"Keonjhar"} />
//     </div>
//   );
// };

export default About;
