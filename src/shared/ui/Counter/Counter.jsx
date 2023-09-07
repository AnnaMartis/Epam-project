import { Component, createElement } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { number: props?.initialValue ?? 0  };
  };

  handleIncrement = () => {
    this.setState({ number: this.state.number + 1 });
  };

  handleDecrement = () => {
    this.setState({ number: this.state.number - 1 });
  };


  render() {
    return createElement(
      "div",
      { className: "counter" },
      createElement("button", { className: "increment", onClick: this.handleIncrement }, "Increment"),
      createElement("p", { className: "number" }, this.state.number),
      createElement("button", { className: "decrement", onClick: this.handleDecrement }, "Decrement"),
    );
  }
}

export default Counter;
