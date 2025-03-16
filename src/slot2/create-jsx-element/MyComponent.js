import React from "react";

class First extends React.Component {
  render() {
    return (
      <section>
        <p>this is the first</p>
      </section>
    );
  }
}
class Sercord extends React.Component {
  render() {
    return (
      <section>
        <p>this is the sercord</p>
      </section>
    );
  }
}

class MyComponent extends React.Component {
  render() {
    return <section>{this.props.children}</section>;
  }
}
MyComponent.First = First;
MyComponent.Sercord = Sercord;
export default MyComponent;
export { First, Sercord };
