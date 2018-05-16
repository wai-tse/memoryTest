import React from "react";
import { connect } from "react-redux";

export class Square extends React.Component {
  showTime = () => {
    for (let i = 0; i < this.props.lst[1].length; i++) {
      setTimeout(
        () =>
          this.props.dispatch({ type: "DISPLAY", id: this.props.lst[1][i] }),
        i * 1000
      );
    }
    setTimeout(
      () => this.props.dispatch({ type: "DISPLAY", id: "" }),
      this.props.lst[1].length * 1000
    );
  };

  click = () => {
    this.props.dispatch({ type: "INCREMENT", id: this.props.id });
    setTimeout(() => {
      console.log(this.props.lst);
      this.props.dispatch({ type: "DISPLAY", id: this.props.lst[0] });
    }, 0);
  };
  mouseOver = () => {};

  render() {
    var id = this.props.id;
    return (
      <button
        className="lightOff"
        onClick={this.click}
        onMouseOver={this.mouseOver}
        id={this.props.id}
      >
        {this.props.id}
      </button>
    );
  }
}

const mapStateToProps = state => ({
  lst: state.lst
});

export default connect(mapStateToProps)(Square);
