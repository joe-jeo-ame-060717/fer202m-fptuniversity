import React from "react";
class MyButton extends React.Component {
  render() {
    return (
      <section>
        <button>{this.props.children}</button>
      </section>
    );
  }
}
export default MyButton;
